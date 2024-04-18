import { useState } from "react";

export default function RestaurantForm() {
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [capacity, setCapacity] = useState('');
    return (
        <div class="container">
        <form id="restaurantForm" onSubmit={(e) => e.preventDefault()}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Restaurant Name" class="form-label" id="name" required></input>

            <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" class="form-label" id="address" required></input>

            <input value={cuisine} onChange={(e) => setCuisine(e.target.value)} type="text" placeholder="Cuisine" class="form-label" id="cuisine" required></input>

            <input value={capacity} onChange={(e) => setCapacity(e.target.value)} type="number" placeholder="Capacity" class="form-label" id="capacity" required></input>

            <button type="submit" class="btn btn-primary">submit</button>
        </form>
        </div>
    )
}