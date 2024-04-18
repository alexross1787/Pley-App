const GET_ALL_REVIEWS = 'review/getAllReviews'
const GET_REVIEW = 'review/getReview'
const ADD_REVIEWS = 'review/addReviews'
const UPDATE_REVIEWS = 'review/updateReviews'
const DELETE_REVIEWS = 'review/deleteReviews'

// ACTION FUNCTIONS
const Reviews = (reviews) => ({ type: GET_ALL_REVIEWS, payload: reviews });
const addReview = (review) => ({ type: ADD_REVIEW, payload: review });
const removeReview = (id) => ({ type: DELETE_REVIEW, payload: id });

const setReview = (review) => ({ type: GET_REVIEW, payload: review })

export const getReview = (id) => async (dispatch) => {
    const data = (await fetch(`/reviews/${id}`)).json

    if (data) dispatch(setReview(data));
};

// ADD REVIEWS
export const createNewReview = (formData) => async (dispatch) => {
    const res = await fetch ('/reviews', {
        method: 'POST', 
        body: JSON.stringify(formData)
    })
    const data = await res.json();
    if (data) {
        dispatch(addReview(data))
        return data.id
    }
}

export const getAllReviews = () => async (dispatch) => {
    const res = await fetch('/reviews', {method: 'GET'})
    const data = await res.json();

    if (!data) return null
    dispatch(setReviews(data))
};

// UPDATE REVIEWS
export const updateReview = (formData, id) => async (dispatch) => {
    const data = await fetch(`/reviews/${id}`, {method: 'PUT', body:JSON.stringify(formData),
}).json();
};

// DELETE REVIEWS
export const deleteReview = (id) => async (dispatch) => {
    const res = (await fetch(`/reviews/${id}`, {method: 'DELETE'})).json();

    return dispatch(removeReview(id))
}

const initialState = { allReviews: [], review: [] };

const reviewReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return { allReviews: action.payload, review: state.review };
        case ADD_REVIEWS:
            return { allReviews: [...initialState.allReviews, action.payload], review: action.payload };
        case UPDATE_REVIEWS:
            return { allReviews: state.allReviews, review: {...state.review} };   
        case DELETE_REVIEWS:
            return { allResviews: state.allReviews, review: state.review } 
    }   
};

export default reviewReducer