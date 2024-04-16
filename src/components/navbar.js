import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css/navbar.css';
import SearchBar from "../components/searchbar";


export default function Navbar() {
    return (
        <div className='sticky-navbar'> 
            <nav className='navbar navbar-expand-sm navbar-light bg-custom'> 
                <img className="pley-logo" src="/pley-logo.png" alt="Pley Logo" />
                <div className='nav-searchbar-container'>
                    <div className="tagline-container">
                        <p className="tagline" >Skip the wait, reserve your plate</p>
                    </div>
                        <SearchBar />
                </div>
             </nav>
        </div>
    )
}

