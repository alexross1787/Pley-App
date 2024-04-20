import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
import { useParams } from 'react-router-dom';
import { getRestaurant } from '../store/restaurant';
import { useDispatch, useSelector } from 'react-redux';

export default function Restaurant() {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const state = useSelector((state) => state)

  useEffect(() => {
    dispatch(getRestaurant(restaurantId));
  }, [dispatch, restaurantId]);

  if (!state || !state.restaurant) return null;
  const restaurant = state.restaurant
    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title ">{restaurant.name}</h5>
          <p className="card-text"> {restaurant.address}/ {restaurant.cuisine} / {restaurant.capacity} </p>
          <a href="/newRestaurant" className="btn ">More</a>
        </div>
      </div> 
      </div>
    )
}
