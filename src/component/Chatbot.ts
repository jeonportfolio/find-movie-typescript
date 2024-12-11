import { Component } from "../core/jsu";
import chatStore, { sendMessages } from "../store/chatbot"
import movieStore, { searchMovies } from '../store/movie'

export default class Chatbot extends Component {
    constructor() {
       super() 
       chatStore.subscribe('messages', () => this.render())
       chatStore.subscribe('loading', () => this.render())
    }
    render() {
        this.el.classList.add('chatbot')
        this.el.innerHTML = /* html */`
            <div class="chats">
                <ul>    
                    ${chatStore.state.messages.map(msg => /* html */`
                            <li class= "${msg.role}" >
                                ${msg.role === 'assistant'? (/* html */`
                                    <div class="photo">
                                       <span class="material-symbols-outlined">😸</span>
                                    </div>
                                `) : ''}
                                ${typeof msg.content === 'string' 
                                    ? (msg.content.replace(/{{(.*?)\/\/(.*?)}}/g, (match, ko, en) => /* html */`
                                        <span class= "movie-title" data-movie-title="${en}">${ko}</span>
                                    `)) 
                                    : ''}
                            </li>       
                    `).join('')}
                    ${chatStore.state.loading ? (/* html */`
                        <li class="assistant">    
                            <div class="photo">
                                <span class="material-symbols-outlined">😸</span>
                            </div>
                            <div class="the-loader"></div>
                        </li>        
                   `) : ''}
                </ul>
                <div class="input">
                    <input/>
                    <button class="btn btn-primary">
                        <span class="material-symbols-outlined">forum</span>
                    </button>
                </div>
            </div>
            <div class="btn btn-starter chat-starter">
                <span class="material-symbols-outlined icon--open">CHAT</span>
                <span class="material-symbols-outlined icon--close">X</span>
            </div>        
        `
        const inputEl = this.el.querySelector('input')
        inputEl?.addEventListener('input', () => {
            chatStore.state.chatText = inputEl.value
        })

        //엔터키 입력 한국어는 이벤트가 두번 발생 가능하기에 isComposing을 사용한다
        inputEl?.addEventListener('keydown', (event:Event) => {
            if(
                event instanceof KeyboardEvent && 
                event.key === 'Enter' && 
                !event.isComposing
            ) {
                    sendMessages()
            }
        })

        const btnEl = this.el.querySelector('.input .btn')
        btnEl?.addEventListener('click', () => {
            sendMessages()
        })

        const chatStarterEl = this.el.querySelector('.chat-starter')
        chatStarterEl?.addEventListener('click', (event: Event) => {
            event.stopPropagation()//여기서 stopPropagation을 통해서 starter버튼은 예외로 
            this.el.classList.toggle('chatbot__on')
            const offChats = () =>  this.el.classList.remove('chatbot__on')
            if(this.el.classList.contains('chatbot__on')){
                window.addEventListener('click', offChats)
                setInterval(() => {
                    inputEl?.focus()
                },300) //css에서 input이 생성되는 transition0.3를 주었기 때문에
            } else {
                window.removeEventListener('click', offChats )
            }
        })

        const chatsEl = this.el.querySelector('.chats')
        chatsEl?.addEventListener('click', (event: Event) => {
            event.stopPropagation()
        })

        const messageListEl = this.el.querySelector('.chats ul')
        messageListEl?.scrollTo(0, messageListEl.scrollHeight || 0) 

        inputEl?.focus()

        const movieTitleEls = this.el.querySelectorAll<HTMLElement>('.movie-title')
        movieTitleEls.forEach(movieTitleEl => {
            movieTitleEl.addEventListener('click', () => {
                const searchInputEl = document.querySelector<HTMLInputElement>('.search input')
                if (!searchInputEl) return 
                const title = movieTitleEl.dataset.movieTitle || ''
                searchInputEl.value = title
            })
        })

    } 
}