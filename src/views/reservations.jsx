import React, { useState } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchbar";
import Restaurant from "../components/restaurant";
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles.css/footer.css"
import ReservationList from "../components/reservationList";

export default function Reservations() {
    return (
        <div >
        <Navbar />
        <div>
        <ReservationList />
      </div>
        <Footer />
        </div>
    )
}