import Review from "./Review";

const ReviewList = props => {

    return(
        <div>
            {props.reviews.map((review) => <Review review={review}/>)}
        </div>
    )
}

export default ReviewList;