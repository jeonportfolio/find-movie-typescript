import { Component } from "./core/jsu";
import TheHeader from "./component/TheHeader";
import TheFooter from "./component/TheFooter";

export default class App extends Component {
    render() {
        const theHeader = new TheHeader().el
        const theFooter = new TheFooter().el
        const routerView = document.createElement('router-view')

        this.el.append(
            theHeader,
            routerView,
            theFooter
        )
    }
    
}