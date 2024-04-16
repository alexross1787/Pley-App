import React, { useState } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Restaurant from "../components/restaurant";
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles.css/restaurant.css"

export default function Restaurants() {
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