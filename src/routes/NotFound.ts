import { Component } from "../core/jsu";

export default class NotFound extends Component {
    render() {
        this.el.classList.add('container', 'not-found')
        this.el.innerHTML = /* html */ `
            <h1>
                ERROR <br>
                페이지를 찾을 수 없습니다.
            </h1>
        `
    }
}