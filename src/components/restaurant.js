import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurants.css"

export default function Restaurants() {
    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title">Restaurant Name</h5>
          <p className="card-text">This restaurant serves blah blah blah. </p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div> 
      </div>
    )
}

//fix this later