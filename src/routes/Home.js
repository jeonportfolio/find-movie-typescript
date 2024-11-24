import { Component } from "../core/jsu";
import Headline from "../component/Headline";
import Search from "../component/Search";
import MovieList from "../component/MovieList";
import MovieListMore from "../component/MovieListMore";

export default class Home extends Component {
    render() {
        const headline = new Headline().el
        const search =new Search().el
        const movieList = new MovieList().el
        const movieListMore = new MovieListMore().el

        this.el.classList.add('container')
        this.el.append(
            headline,
            search,
            movieList,
            movieListMore
        )
    } 
}