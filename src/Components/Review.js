
const Review = props => {

    return (
        <div>
            <h2>{props.review.reviewTitle}</h2>
            <p>{props.review.email}</p>
            <p>{props.review.reviewText}</p>
        </div>
    )
}

export default Review;