

const Movie = (props) => {
    return <img src={props.movie.poster}
                onClick={(movie) => props.onMovieClick(props.movie)}>
    </img>
}

export default Movie;