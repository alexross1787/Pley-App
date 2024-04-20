import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
import axios from 'axios';

export default function Restaurant() {
  const [rating, setRating] = useState(0);
  const [cuisine, setCuisine] = useState(0);
  const [name, setName] = useState(0);


  useEffect(() => {
    axios.get("/RestaurantTracker/Restaurants")
    .then(response => {
      const { rating, cuisine, name} = response.data;
      setRating(rating);
      setCuisine(cuisine);
      setName(name);


    })
    .catch(error => {
      console.log('error fetching restaurant data')
    })
  }, [])


    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title ">Restaurant Name</h5>
          <p className="card-text"> Rating{}/ (amount of reviews) /Distance/ Price </p>
          <a href="/newRestaurant" className="btn ">More</a>
        </div>
      </div> 
      </div>
    )
}
