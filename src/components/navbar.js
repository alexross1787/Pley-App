import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles.css/navbar.css';

export default function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'> 
            <a className="navbar-brand">
    <img src="/pley-logo.png" width="100" height="100" alt="Pley Logo" />
  </a>
                <div className="container">
                    <a className="navbar-brand" href="#">Skip the wait, reserve your plate</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        {/* <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Restaurants</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reservations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Reviews</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

