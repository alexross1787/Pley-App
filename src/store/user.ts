// ACTION TYPES
const GET_ALL_USERS = 'USER/getAllUsers';
const GET_USER = 'USER/getUser';
const ADD_USER = 'USER/addUser';
const DELETE_USER = 'USER/deleteUser';
const UPDATE_USER = 'USER/updateUser';

// ACTION FUNCTIONS
const setUsers = (users: any) => ({ type: GET_ALL_USERS, payload: users });
const addUser = (user: any) => ({ type: ADD_USER, payload: user });
const removeUser = (id: any) => ({ type: DELETE_USER, payload: id });
const setUser = (user: any) => ({ type: GET_USER, payload: user });

export const getUser = (id: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const data = await (await fetch(`/users/${id}`)).json();

    if (data) dispatch(setUser(data));
};

// THUNK ADDING
export const createNewUser = (formData: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const res = await fetch('/users', {
        method: 'POST',
        body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data) {
        dispatch(addUser(data));
        return data.id;
    }
};

// THUNK GET ALL
export const getAllUsers = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const res = await fetch('/users', { method: 'GET' });
    const data = await res.json();

    if (!data) return null;
    dispatch(setUsers(data));
};

// THUNK UPDATE
export const updateUser = (formData: any, id: any) => async () => {
    const data = await (await fetch(`/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
    })).json();
};

// THUNK DELETE
export const deleteUser = (id: any) => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
    await fetch(`/users/${id}`, { method: 'DELETE' });

    return dispatch(removeUser(id));
};

const initialState = { allUsers: [], user: {} };

const userReducer = (state = initialState, action: { type: any; payload: any }) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return { ...state, allUsers: action.payload };
        case ADD_USER:
            return { ...state, allUsers: [...state.allUsers, action.payload] };
        case DELETE_USER:
            return { ...state, allUsers: state.allUsers.filter((user: any) => user.id !== action.payload) };
        case GET_USER:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export default userReducer;
