// ACTION TYPES
const GET_ALL_USERS = 'USER/getAllUsers'
const GET_USER = 'USER/getUser'
const ADD_USER = 'USER/addUser'
const DELETE_USER = 'USER/deleteUser'
const UPDATE_USER = 'USER/updateUser'

// ACTION FUNCTIONS
const setUsers = (users) => ({ type: GET_ALL_USERS, payload: users })
const addUser = (user) => ({ type: ADD_USER, payload: user })
const removeUser = (id) => ({ type: DELETE_USER, payload: id });
const setUser = (user) => ({ type: GET_USER, payload: user })

export const getUser = (id) => async (dispatch) => {
    const data = (await fetch(`/users/${id}`)).json

    if (data) dispatch(setRestaurant(data))
}

// THUNK ADDING
export const createNewUser = (formData) => async (dispatch) => {
    const res = await fetch('/', {method: 'POST', body: JSON.stringify(formData)})
    const data = await res.json();

    if (!data) return null 
    dispatch(addUser(data))
};

// THUNK GET ALL
export const getAllUsers = () => async (dispatch) => {
    const res = await fetch('/users', {method: 'GET'})
    const data = await res.json();

    if(!data) return null
    dispatch(setUsers(data))
};

// THUNK UPDATE
export const updateRestaurant = (formData, id) => async (dispatch) => {
    const data = await fetch(`/users/${id}`, {method: 'PUT', body:JSON.stringify
    (formData),
}).json();
};

// THUNK DELETE
export const deleteRestaurant = (formData, id) => async (dispatch) => {
    const res = (await fetch(`/users/${id}`, {method: 'DELETE'})).json();

    return dispatch(removeUser(id))
}

const initialState = { allUsers: [], user: [] };

const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { allUsers: action.payload, user: state.user };
        case ADD_USER:
            return { allUser: [...initialState.State.allUsers, action.payload],
            user: action.payload }
    }
};

export default userReducer