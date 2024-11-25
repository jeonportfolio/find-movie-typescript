import { Component } from "../core/jsu";
import aboutStore from "../store/about"

export default class TheFooter extends Component {
    constructor() {
        super({
            tagName: 'footer'
        })
    }

    render() {
        const { blog,repository } =aboutStore.state
        this.el.innerHTML = /* html */`
            <div>
                <a href="${ repository }">
                        사이트 코드보기 
                </a>
            </div>
            <div>
                <a href= "${ blog }" >
                    ${new Date().getFullYear()}    
                    블로그 바로가기 
                </a>
            </div>
        `
    }
}