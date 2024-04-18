export default function RestaurantForm() {
    return (
        <div class="container">
        <form id="restaurantForm">
            <input type="text" placeholder="Restaurant Name" class="form-label" id="name" required></input>
            <input type="text" placeholder="Address" class="form-label" id="address" required></input>
            <input type="text" placeholder="Cuisine" class="form-label" id="cuisine" required></input>
            <input type="number" placeholder="Capacity" class="form-label" id="capacity" required></input>
            <button type="submit" class="btn btn-primary">submit</button>
        </form>
        </div>
    )
}