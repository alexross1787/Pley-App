import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css/navbar.css';
import SearchBar from "../components/searchbar";


export default function Navbar() {
    return (
        <div className='sticky-navbar'> 
            <nav className='navbar navbar-expand-sm navbar-light bg-custom'> 
            <div className='nav-top'>
         
                <img className="pley-logo" src="/pley-logo.png" alt="Pley Logo" />
                
                
                    <div className="tagline-container">
                        <p className="tagline" >Skip the wait, reserve your plate</p>
                    </div>
                        <SearchBar />
                </div>
                
                <div className='nav-links'>
                    <div className='row'>
                        <a className='col 3' href="/">Home</a>
                        <a className='col 3' href='/newRestaurant'>Restaurants</a>
                        <a className='col 3' href='/newReview'>Reviews</a>
                        <a className='col 3' href='newUser'>My Account</a>
                    </div>
                </div>
             </nav>
        </div>
    )
}

