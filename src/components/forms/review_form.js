import { useState } from "react";
import { createNewReview } from "../../store/review";
import Navbar from "../navbar";
import Footer from "../footer";
import "../styles.css/form.css"
import { useDispatch } from "react-redux";

export default function ReviewForm() {
    const [userId, setUserId] = useState(''); 
    const [restaurantId, setRestaurantId] = useState('');
    const [review, setReview] = useState('');
    const [rating, setRating] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatchEvent(createNewReview()).then((id) =>{
            {userId, restaurantId, review, rating}
        })
    }
    return (
        <div>
            <Navbar />
        <div className="row justify-content-center align-items-center">
        <form id="reviewForm" onSubmit={(e) => e.preventDefault()}>
            <input value={userId} onChange={(e) => setUserId(e.target.value)} type="number" placeholder="User ID Number" className="form-label" id="userId" required></input>

            <input value={restaurantId} onChange={(e) => setRestaurantId(e.target.value)} type="number" placeholder="Restaurant Number" className="form-label" id="restaurantId" required></input>

            <input value={review} onChange={(e) => setReview(e.target.value)} type="text" placeholder="Insert Review Here" className="form-label" id="review" required></input>

            <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" placeholder="Rating" className="form-label" id="rating" required></input>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    )
}