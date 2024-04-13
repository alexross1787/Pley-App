import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css/navbar.css';
import SearchBar from "../components/searchbar";


export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
            <a className="navbar-brand">
    <img src="/pley-logo.png" width="100" height="100" alt="Pley Logo" />
    </a> 
    <div className='nav-searchbar-container'>
    <div className="tagline-container">
        <a className="navbar-brand" href="#">Skip the wait, reserve your plate</a>
       
          
            </div>
             <SearchBar /></div></nav>
            </div>
    )
}

