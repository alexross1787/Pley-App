const GET_ALL_RESTAURANTS = 'restaurant/getAllRestaurants'
const GET_RESTAURANT = 'restaurant/getRestaurant'
const ADD_RESTAURANT = 'restaurant/addRestaurant'
const DELETE_RESTAURANT = 'restaurant/deleteRestaurant'
const ADD_REVIEWS = 'restaurant/addReviews'
const UPDATE_REVIEWS = 'restaurant/updateReviews'
const DELETE_REVIEWS = 'restaurant/deleteReviews'

const setRestaurants = (restaurants) => ({ type: GET_ALL_RESTAURANTS, payload: restaurants})
const addRestaurant = (restaurant) => ({ type: ADD_RESTAURANT, payload: restaurant })

export const createNewRestaurant = (formData) => async (dispatch) => {
    const res = await fetch('/', {method: 'POST', body: JSON.stringify(formData)})
    const data = await res.json();

    if (!data) return null
    dispatch(addRestaurant(data))
}

export const getAllRestaurants = () => async (dispatch) => {
    const res = await fetch('/', {method: 'GET'})
    const data = await res.json();

    if (!data) return null
    dispatch(setRestaurants(data))
}

const initialState = { allRestaurants: [], restaurant: [] }

const restaurantReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            return { allRestaurants: action.payload, restaurant: state.restaurant };
        case ADD_RESTAURANT:
            return { allRestaurants: [ ...initialState.allRestaurants, action.payload ], restaurant: action.payload };
    }   
}

export default restaurantReducer