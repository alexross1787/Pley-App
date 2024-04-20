import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
import axios from 'axios';

export default function Restaurant() {
  


  useEffect(() => {
    dispatch(getRestaurant(restaurantId));
  }, [dispatch, restaurantId]);


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
