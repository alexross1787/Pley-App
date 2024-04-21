import React from "react";
import Navbar from "../components/navbar";
import ReservationForm from '../components/forms/reservation_form';
import ReservationList from "../components/reservationList";
import Footer from "../components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/styles.css/footer.css";

export default function Reservations() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <h2>Make a Reservation</h2>
                <ReservationForm />
                <hr />
                <h2>Existing Reservations</h2>
                <ReservationList />
            </div>
            <Footer />
        </div>
    );
}
