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
        photo:'',
        name:'JEON SEON UK',
        email: 'etoile929@naver.com => 이메일 보내기',
        blog: 'https://blog.naver.com/turtleweb => 블로그 바로가기',
        github: 'https://github.com/jeonportfolio => 깃허브 바로가기',
        repository : 'https://github.com/jeonportfolio/movie-app-'
})