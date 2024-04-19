// ACTION TYPES
const GET_ALL_RESTAURANTS = 'restaurant/getAllRestaurants'
const GET_RESTAURANT = 'restaurant/getRestaurant'
const ADD_RESTAURANT = 'restaurant/addRestaurant'
const UPDATE_RESTAURANT = 'restaurant/updateRestaurant'
const DELETE_RESTAURANT = 'restaurant/deleteRestaurant'

// ACTION FUNCTIONS
const setRestaurants = (restaurants) => ({ type: GET_ALL_RESTAURANTS, payload: restaurants });
const addRestaurant = (restaurant) => ({ type: ADD_RESTAURANT, payload: restaurant });
const removeRestaurant = (id) => ({ type: DELETE_RESTAURANT, payload: id });

const setRestaurant = (restaurant) => ({ type: GET_RESTAURANT, payload: restaurant })

export const getRestaurant = (id) => async (dispatch) => {
    const data = (await fetch(`/restaurants/${id}`)).json

    if (data) dispatch(setRestaurant(data));
};

// THUNK ADDING 
export const createNewRestaurant = (formData) => async (dispatch) => {
    const res = await fetch ('/restaurants', {
        method: 'POST', 
        body: JSON.stringify(formData)
    })
    const data = await res.json();
    if (data) {
        dispatch(addRestaurant(data))
        return data.id
    }
}

// THUNK GET ALL
export const getAllRestaurants = () => async (dispatch) => {
    const res = await fetch('/restaurants', {method: 'GET'})
    const data = await res.json();

    if (!data) return null
    dispatch(setRestaurants(data))
};

// THUNK UPDATE
export const updateRestaurant = (formData, id) => async (dispatch) => {
    const data = await fetch(`/restaurants/${id}`, {method: 'PUT', body:JSON.stringify(formData),
}).json();
};

// THUNK DELETE
export const deleteRestaurant = (id) => async (dispatch) => {
    const res = (await fetch(`/restaurants/${id}`, {method: 'DELETE'})).json();

    return dispatch(removeRestaurant(id))
}

const initialState = { allRestaurants: [], restaurant: [] };

const restaurantReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_RESTAURANTS:
            return { allRestaurants: action.payload, restaurant: state.restaurant };
        case ADD_RESTAURANT:
            return { allRestaurants: [...initialState.allRestaurants, action.payload], restaurant: action.payload };
        case UPDATE_RESTAURANT:
            return { allRestaurants: state.allRestaurants, restaurant: {...state.restaurant} };   
        case DELETE_RESTAURANT:
            return { allRestaurants: state.allRestaurants, restaurant: state.restaurant } 
    }   
};

export default restaurantReducer