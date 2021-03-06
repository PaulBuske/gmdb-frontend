import axios from "axios";
import {logDOM} from "@testing-library/react";
import ReviewList from "./ReviewList";


const MovieView = props => {
    return <div
        className={"current-movie"}
        id={"current-movie"}>
        <img src={props.movie.poster}/>
        <h1>{props.movie.title}</h1>
        <h3>Released: {props.movie.released}</h3>
        <p>
            {props.movie.genre} | {props.movie.actors}</p>
        <p>{props.movie.plot}</p>
        <div
        > {
            //reviews go here
            (props.review.length > 0 && <ReviewList
                reviews={props.review} />)
        }</div>
        <br/>
        Leave a Review:
        <form onSubmit={(event) => this.props.sendReview(event.target.review.value)}>
            <input type={"text"}
            name={"review"}/>
            <input type={"submit"}/>
        </form>
        <br/>
        <button onClick={props.returnButton}>Return to Main Menu</button>

    </div>
}

export default MovieView;