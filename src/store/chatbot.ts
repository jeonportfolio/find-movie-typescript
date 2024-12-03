import { Store } from '../core/jsu'
import OpenAI from 'openai'

interface State {
    chatText: string
    messages: OpenAI.ChatCompletionMessageParam[]
    loading: boolean
}

const defaultMessages: OpenAI.ChatCompletionMessageParam[] = [
    { role: 'assistant', content: '영화에 대해 궁금한 점을 물어보세요'},
]

const store = new Store<State>({
    chatText:  '',
    messages: defaultMessages,
    loading: false,
})

export default store
export const sendMessages = async() => {
    if(!store.state.chatText.trim()) return
    if(store.state.loading) return 
    store.state.loading = true
    store.state.messages = [
        ...store.state.messages,
        { role:'user', content:store.state.chatText }
    ]
    try {
        const res = await fetch('/api/chatbot', {
            method: 'POST',
            body: JSON.stringify({
                messages: store.state.messages
            })
        })
        const message = await res.json()
        store.state.messages = [
            ...store.state.messages,
            message
        ]//push로 데이터를 밀어넣을수 있지만 변화를 감시할 수 없기 떄문에 = 할당연산자로 데이터 주입
        store.state.chatText = ''
    } catch (error) {
        console.log('sendMessage eroor:', error)
    }  finally {
        store.state.loading = false
    }
}
export const resetMessages = () => {
    store.state.messages = defaultMessages
}

