import './App.css';
import React from 'react';
import Home from "./views/home"
import Restaurant from './views/restaurant';
import Reservations from './views/reservations';
import Reviews from './views/reviews';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import RestaurantForm from './components/forms/restaurant_form';
import ReviewForm from './components/forms/review_form';
import UserForm from './components/forms/user _form';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/newRestaurant" element={<RestaurantForm></RestaurantForm>} />
        <Route exact path="/newUser" element={<UserForm></UserForm>} />
        <Route exact path="/newReview" element={<ReviewForm></ReviewForm>} />
      </Routes>
    </Router>
  );
}
