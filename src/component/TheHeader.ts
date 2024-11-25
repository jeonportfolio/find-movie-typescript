import { Component } from "../core/jsu";

interface State {
    [key: string]: unknown
    menus: {
        name:string
        href:string 
    }[]
}

export default class TheHeader extends Component {
    public state!: State 
    constructor(){
        super({
            tagName: 'header',
            state: {
                menus: [
                    {
                        name:'Search',
                        href:'#/'
                    },
                    {
                        name: 'Movie',
                        href: '#/movie?id=tt4520988'
                    },
                    {
                        name : 'About',
                        href: '#/about'
                    }
                ]
            }
        })
        window.addEventListener('popstate', () => {
            this.render()
        })
    }
    render() {
        this.el.innerHTML = /* html */ `
            <a 
                herf="#/" 
                class="logo">
                <span>Movie</span>BOX
            </a>
            <nav>
                <ul>
                    ${this.state.menus.map(menu => {
                        const href = menu.href.split('?')[0]
                        const hash = location.hash.split('?')[0]
                        const isActive = href === hash 
                        return /* html */`
                            <li>
                                <a 
                                    class = "${isActive ? 'active' : ''}"
                                    href="${menu.href}">
                                    ${menu.name}
                                </a>
                            </li>
                        `
                    }).join('')}
                </ul>
            </nav>
            <a href="#/about" class="user">
                <img src="https://images.unsplash.com/photo-1731973453382-647c28c8ba1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D" alt="User">
            </a>
        `
    }
}