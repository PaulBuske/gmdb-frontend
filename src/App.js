import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Movie from "./Components/Movie";
import MovieView from "./Components/MovieView";


class App extends React.Component {

    getMoviesFromDB() {
        let moviesPromise = axios.get("http://localhost:3001/movies")
        // let moviesJSON = await
        moviesPromise.then((value) => {
            this.setState({movies: value.data})
            this.setState({searchedMovies: value.data})
        })
    }

    async sendReview(event){
        axios.post("http://localhost:3001/reviews", + event.target.review.value).then(
            function (reponse ){
                console.log(reponse)
            }
        )

    }

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            searchedMovies: [],
            currentMovie: {}
        }


        this.getMoviesFromDB()

    }

    handleMovieClick(movie) {
        this.setState({currentMovie: movie})
    }

    returnToMainMenu() {
        this.setState({currentMovie: {}})
    }

    searchMovie(userSearch){
        userSearch.preventDefault()
        console.log(userSearch.target.query.value)
        let userSearchText =  userSearch.target.query.value;
        let newMovies = this.state.movies.slice();
        let foundMovies = []
        newMovies.forEach((movie)=> {
            if(movie.title.toLowerCase().includes(userSearchText.toLowerCase())){
                foundMovies.push(movie)
            }
        })
        this.setState({searchedMovies: foundMovies})
    }

    render() {
        if (Object.keys(this.state.currentMovie).length > 0) {
            return (
                <MovieView
                    movie={this.state.currentMovie}
                    returnButton={() => this.returnToMainMenu()}
                />
            )
        } else if (this.state.movies) {
            return (
                <div className={"main"}>
                    <form
                        className={"search-bar"}
                        id={"search-bar"}
                        onSubmit={(event) => this.searchMovie(event)}
                    >
                        <input
                        type={"text"}
                        placeholder={"Search a movie by title"}
                        name={"query"}
                        />
                        <input type={"submit"} />

                    </form>
                    {this.state.searchedMovies.map((movie) => {
                            return <Movie className={"movie"}
                                          movie={movie}
                                          onMovieClick={(movie) => this.handleMovieClick(movie)}
                            />
                        }
                    )}
                </div>
            )
        }


    }
}

export default App;
