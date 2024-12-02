import { Component } from "../core/jsu";
import chatStore, { sendMessages } from "../store/chatbot"

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
                                ${msg.content}
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

        inputEl?.addEventListener('keydown', (event:Event) => {
            if(event instanceof KeyboardEvent && event.key === 'Enter') {
                    sendMessages()
            }
        })

        const btnEl = this.el.querySelector('input .btn')
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
    } 
}