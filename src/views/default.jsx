import Navbar from "../components/navbar";
import Gallery from "../components/gallery";
import SearchBar from "../components/searchbar";
import Restaurants from "../components/restaurant";

function Home() {
    return (
        <div>
    <Navbar />;
    <SearchBar />
    <Gallery />
    <div className="rest-container">
    <Restaurants />
    <Restaurants />
    <Restaurants />
    </div>

    </div>
)

}

export default Home;