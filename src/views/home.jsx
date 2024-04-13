import React from "react";
import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import SearchBar from "../components/searchbar";
import Restaurants from "../components/restaurant";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
    <Navbar />
    <div searcbar-container>
    <SearchBar />
    </div>
    <Gallery />
    <div className="rest-container">
       <div className="card-header"> <h2>Trending</h2> </div>
       <div class="container">
  <div class="row">
    <div class="col-sm">
      <Restaurants />
    </div>
    <div class="col-sm">
    <Restaurants />
    </div>
    <div class="col-sm">
    <Restaurants />

    </div>
  </div>
</div>
</div>
<div className="card-header"> <h2>Favorites</h2> </div>
       <div class="container">
  <div class="row">
    <div class="col-sm">
      <Restaurants />
    </div>
    <div class="col-sm">
    <Restaurants />
    </div>
    <div class="col-sm">
    <Restaurants />

    </div>
  </div>
</div>
</div>


   
)

}

export default Home;