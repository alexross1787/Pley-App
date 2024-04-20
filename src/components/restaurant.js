import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
<<<<<<< HEAD
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function Restaurant() {
  // const [restaurant, setRestaurant] = useState(null);

  // useEffect(() => {
  //   const fetchRestaurantData = async () => {
  //     try {
  //       const response = await axios.get('../api/models/restaurant.js')
        
  //       setRestaurant(response.data);
  //     } catch (error) {
  //       console.error('Error fetching restaurant data:', error);
  //     }
  //   };

  //   // Call the fetchRestaurantData function
  //   fetchRestaurantData();
  // }, []); 

=======
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
>>>>>>> e637e2c2f6de905f5f8292cb29228fa2a7fb089d
    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
<<<<<<< HEAD
          <h5 className="card-title ">Restaurant Name</h5>
          <p className="card-text"> Rating{} /Distance/ Price </p>
=======
          <h5 className="card-title ">{restaurant.name}</h5>
          <p className="card-text"> {restaurant.address}/ {restaurant.cuisine} / {restaurant.capacity} </p>
>>>>>>> e637e2c2f6de905f5f8292cb29228fa2a7fb089d
          <a href="/newRestaurant" className="btn ">More</a>
        </div>
      </div> 
      </div>
    )
}
