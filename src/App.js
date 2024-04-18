import './App.css';
import React from 'react';
import Home from "./views/home"
import Restaurant from './views/restaurant';
import Reservations from './views/reservations';
import Reviews from './views/reviews';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newRestaurant" element={<Restaurant></Restaurant>} />
      </Routes>
    </Router>
  );
}
