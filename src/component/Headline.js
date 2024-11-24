import { Component } from "../core/jsu";

export default class Headline extends Component {
    render() {
        this.el.classList.add('headline')
        this.el.innerHTML = /* html */`
            <h1>
                <Span>OMDb API</span><br/>
                영화 DB<br/>
                검색 사이트  
            </h1>
            <p>
                api 연동을 통해 영화 정보를 손쉽게 검색하기 ! 영어로 입력해야 영화 정보가 나옵니다
            </p>
        `
    }
}