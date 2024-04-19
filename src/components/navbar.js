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
                        <div className='col 3'>Home</div>
                        <div className='col 3'>Reservations</div>
                        <div className='col 3'>Reviews</div>
                        <div className='col 3'>My Account</div>
                    </div>
                </div>
             </nav>
        </div>
    )
}

