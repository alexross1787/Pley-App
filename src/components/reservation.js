import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css/restaurant.css"
import { useParams } from 'react-router-dom';
import { getReservation } from '../store/reservation';
import { useDispatch, useSelector } from 'react-redux';

export default function Reservation() {
    const dispatch = useDispatch();
    const { reservationId } = useParams();
    const state = useSelector((state) => state)

    useEffect(() => {
        dispatch(getReservation(reservationId))
    }, [dispatch, restaurantId])

    if (!state || !state.restaurant) return null;
    const reservation = state.reservation
    return (
        <div>
        <div className="rest-card">
            <div className='rest-img-container'>
        <img className="card-img-top" src="/restaurant-sample-pic.jpg" alt="Card image cap"/>
        </div>
        <div className="card-body">
          <h5 className="card-title ">{reservation.name}</h5>
          <p className="card-text"> {reservation.email}/ {reservation.date} / {reservation.time} / {reservation.guests}</p>
          <a href="/newReservation" className="btn ">More</a>
        </div>
      </div> 
      </div>
    )
}