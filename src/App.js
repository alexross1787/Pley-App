import './App.css';
import React from 'react';
import Home from "./views/home"
import Restaurants from './views/restaurant';
import Reservations from './views/reservations';

export default function App() {
  return (
    <div className="App">
      
      <Reservations />
     
    </div>
  );
}
