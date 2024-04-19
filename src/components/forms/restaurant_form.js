import { useState } from "react";
import { createNewRestaurant } from "../../store/restaurant";

export default function RestaurantForm() {
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [capacity, setCapacity] = useState('');
    const [image, setImage] = useState(null); // State for the image

    const handleSubmit = () => {
        dispatchEvent(createNewRestaurant()).then((id) =>{
            { name, address, cuisine, capacity, image } // Include image in the data being sent
        })
    }

    return (
        <div className="container">
            <form id="restaurantForm" onSubmit={(e) => e.preventDefault()}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Restaurant Name" className="form-label" id="name" required />
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Address" className="form-label" id="address" required />
                <input value={cuisine} onChange={(e) => setCuisine(e.target.value)} type="text" placeholder="Cuisine" className="form-label" id="cuisine" required />
                <input value={capacity} onChange={(e) => setCapacity(e.target.value)} type="number" placeholder="Capacity" className="form-label" id="capacity" required />

                {/* Input for uploading image */}
                <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" /> {/* Accepts only image files */}

                {/* Input for providing a link to an image */}
                {/* <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} type="url" placeholder="Image URL" className="form-label" id="imageUrl" /> */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
