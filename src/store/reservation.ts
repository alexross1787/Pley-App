// ACTION TYPES
const GET_ALL_RESERVATIONS = 'reservation/getAllReservations'
const GET_RESERVATION = 'reservation/getReservation'
const ADD_RESERVATION = 'reservation/addReservation'
const UPDATE_RESERVATION = 'reservation/updateReservation'
const DELETE_RESERVATION = 'reservation/deleteReservation'

// ACTION FUNCTIONS
const setReservations = (reservations) => ({ type: GET_ALL_RESERVATIONS, payload: reservations });
const addReservation = (reservation) => ({ type: ADD_RESERVATION, payload: reservation });
const removeReservation = (id) => ({ type: DELETE_RESERVATION, payload: id });
const setReservation = (reservation) => ({ type: GET_RESERVATION, payload: reservation })

export const getReservation = (id) => async (dispatch) => {
    const data = await((await fetch(`http://127.0.0.1:8080/reservations/${id}`)).json())

    if (data) dispatch(setReservation(data));
};

// THUNK ADDING 
export const createNewReservation = (formData) => async (dispatch) => {
    console.log(formData, JSON.stringify(formData))
    const res = await fetch('http://127.0.0.1:8080/reservations', {
        method: 'POST', 
        body: JSON.stringify(formData),
        headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    if (data) {
        dispatch(addReservation(data))
        return data.id
    }
}

// THUNK GET ALL
export const getAllReservations = () => async (dispatch) => {
    const res = await fetch('/reservations', {method: 'GET'})
    const data = await res.json();

    if (!data) return null
    dispatch(setReservations(data))
};

// THUNK UPDATE
export const updateReservation = (formData, id) => async (dispatch) => {
    const data = await fetch(`/reservations/${id}`, {method: 'PUT', body:JSON.stringify(formData),
}).json();
};

// THUNK DELETE
export const deleteReservation = (id) => async (dispatch) => {
    const res = (await fetch(`/reservations/${id}`, {method: 'DELETE'})).json();

    return dispatch(removeReservation(id))
}

const initialState = { allReservations: [], reservation: {} };

const reservationReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_RESERVATIONS:
            return { allReservations: action.payload, reservation: state.reservation };
        case GET_RESERVATION:
            return { allReservations: state.allReservations, reservation: action.payload }
        case ADD_RESERVATION:
            return { allReservations: [...initialState.allReservations, action.payload], reservation: action.payload };
        case UPDATE_RESERVATION:
            return { allReservations: state.allReservations, reservation: {...state.reservation} };   
        case DELETE_RESERVATION:
            return { allReservations: state.allReservations, reservation: state.reservation } 
    }   
};

export default reservationReducer