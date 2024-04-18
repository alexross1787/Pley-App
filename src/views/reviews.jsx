import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "bootstrap"
import Restaurant from "../components/restaurant";


export default function Reviews() {
    return (
        <div>
            <Navbar />
            
            <div className="container">
                <div className="row">
                    <div className="col">
                <Restaurant /></div>
                <div className="col">
                <Restaurant /></div>
                <div className="col">
                <Restaurant /></div>
            </div>
            <div className="row">
                    <div className="col">
                <Restaurant /></div>
                <div className="col">
                <Restaurant /></div>
                <div className="col">
                <Restaurant /></div>
            </div>
            </div>
            <Footer />
        </div>
    )
}