import React, { useState } from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import SearchBar from "../components/searchbar";
import Restaurant from "../components/restaurant";
import Footer from "../components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';


// Yelp API not working... need to find out how to fix and integrate into search bar :P
import { searchFunction } from "../api/searchFunction";

export default function Home() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  }
    return (
        <div>
    <Navbar />
    <Gallery />
    <div className="rest-container">
       <div className="card-header"> <h2>Trending</h2> </div>
       <div className="container">
  <div className="row">
    <div className="col-sm">
      <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
  </div>
</div>
</div>
<div className="card-header"> <h2>Favorites</h2> </div>
       <div className="container">
  <div className="row">
    <div className="col-sm">
      <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
  </div>
</div>
<div className="card-header"> <h2>Nearby</h2> </div>
       <div className="container">
  <div className="row">
    <div className="col-sm">
      <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
    <div className="col-sm">
    <Restaurant />
    </div>
    
  </div>
</div>
<Footer />
</div>


   
)

}