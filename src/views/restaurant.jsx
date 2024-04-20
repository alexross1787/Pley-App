import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Restaurant from "../components/restaurant";
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles.css/restaurant.css"
import axios from "axios";
import { useFetcher } from "react-router-dom";

export default function Restaurants() {

    const [restaurant, setRestaurants] = useState([])

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('/api/restaurants');
                setRestaurants(response.data);
            }
            catch (error) {
                console.error("Error fetching restaurants", error)
            }
        }
    })

    return (
        <div>
        <Navbar />
        <div className="rests-container">
        <div className="row justify-content-center">
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
        </div>
        <div className="row justify-content-center">
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
            <div className="col-3"> <Restaurant /></div>
        </div>
        </div>
        <Footer />
        </div>
    )
}