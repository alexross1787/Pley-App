import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
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

    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title ">Restaurant Name</h5>
          <p className="card-text"> Rating{} /Distance/ Price </p>
          <a href="/newRestaurant" className="btn ">More</a>
        </div>
      </div> 
      </div>
    )
}
