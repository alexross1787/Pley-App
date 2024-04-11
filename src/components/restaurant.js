import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurants.css"

export default function Restaurants() {
    return (
        <div>
        <h2>Trending</h2>
        <div className="rest-card">
            
        <img className="card-img-top" src="..." alt="Card image cap"/>
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