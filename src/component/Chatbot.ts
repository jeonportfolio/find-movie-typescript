import { Component } from "../core/jsu";
import chatStore from "../store/chatbot"

export default class Chatbot extends Component {
    render() {
        this.el.classList.add('chatbot')
        this.el.innerHTML = /* html */`
            <div class="chats">
                <ul>    
                    ${chatStore.state.messages.map(msg => /* html */`
                            <li class= "${msg.role}" >
                                ${msg.content}
                            </li>       
                    `).join('')}
                </ul>
                <div class="input">
                    <input/>
                    <button class="btn btn-primary">
                        <span class="material-symbols-outlined">send</span>
                    </button>
                </div>
            </div>
            <div class="btn btn-circle chat-starter">
                <span class="material-symbols-outlined icon--open">forum</span>
                <span class="material-symbols-outlined icon--close">cancel</span>
            </div>        
        `
    }
}