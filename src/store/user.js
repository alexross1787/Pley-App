const GET_ALL_USERS = 'USER/getAllUSERs'
const GET_USER = 'USER/getUSER'
const ADD_USER = 'USER/addUSER'
const DELETE_USER = 'USER/deleteUSER'
const UPDATE_USER = 'USER/updateUSER'

const setUsers = (users) => ({ type: GET_ALL_USERS, payload: users })
const addUser = (user) => ({ type: ADD_USER, payload: user })

export const createNewUser = (formData) => async (dispatch) => {
    const res = await fetch('/', {method: 'POST', body: JSON.stringify(formData)})
    const data = await res.json();

    if (!data) return null 
    dispatch(addUser(data))
};

export const getAllUsers = () => async (dispatch) => {
    const res = await fetch('/getall', {method: 'GET'})
    const data = await res.json();

    if(!data) return null
    dispatch(setUsers(data))
};

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