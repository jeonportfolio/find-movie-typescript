import { Store } from "../core/jsu";

interface State {
        photo: string
        name: string 
        email: string 
        blog: string 
        github: string 
        repository: string
}

export default new Store<State>({
        photo:'https://images.unsplash.com/photo-1731973453382-647c28c8ba1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D',
        name:'JEON SEON UK',
        email: 'etoile929@naver.com => 이메일 보내기',
        blog: 'https://blog.naver.com/turtleweb => 블로그 바로가기',
        github: 'https://github.com/jeonportfolio => 깃허브 바로가기',
        repository : 'https://github.com/jeonportfolio/movie-app-'
})