import { useState } from "react";
import { createNewReview } from "../../store/review";

export default function ReviewForm() {
    const [userId, setUserId] = useState(''); 
    const [restaurantId, setRestaurantId] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = () => {
        dispatchEvent(createNewReview()).then((id) =>{
            {userId, restaurantId, review, rating}
        })
    }
    return (
        <div class="container">
        <form id="reviewForm" onSubmit={(e) => e.preventDefault()}>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" placeholder="User ID Number" class="form-label" id="userId" required></input>

            <input value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} type="number" placeholder="Restaurant Number" class="form-label" id="restaurantId" required></input>

            <input value={review} onChange={(e) => setReview(e.target.value)} type="text" placeholder="Insert Review Here" class="form-label" id="review" required></input>

            <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" placeholder="Rating" class="form-label" id="rating" required></input>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}