const GET_ALL_REVIEWS = 'review/getAllReviews'
const GET_REVIEW = 'review/getReview'
const ADD_REVIEWS = 'review/addReviews'
const UPDATE_REVIEWS = 'review/updateReviews'
const DELETE_REVIEWS = 'review/deleteReviews'

// ACTION FUNCTIONS
const Reviews = (reviews: any) => ({ type: GET_ALL_REVIEWS, payload: reviews });
const addReview = (review: any) => ({ type: ADD_REVIEWS, payload: review });
const removeReview = (id: any) => ({ type: DELETE_REVIEWS, payload: id });

const setReview = (review: () => Promise<any>) => ({ type: GET_REVIEW, payload: review })

export const getReview = (id: any) => async (dispatch: (arg0: { type: string; payload: () => Promise<any> }) => void) => {
    const data = (await fetch(`/reviews/${id}`)).json

    if (data) dispatch(setReview(data));
};

// ADD REVIEWS
export const createNewReview = (formData: any) => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
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

export const getAllReviews = () => async (dispatch: (arg0: any) => void) => {
    const res = await fetch('/reviews', {method: 'GET'})
    const data = await res.json();

    if (!data) return null
    dispatch(setReview(data))
};

// UPDATE REVIEWS
export const updateReview = (formData: any, id: any) => async () => {
    const data = await (await fetch(`/reviews/${id}`, {
        method: 'PUT', body: JSON.stringify(formData),
    })).json();
};

// DELETE REVIEWS
export const deleteReview = (id: any) => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
    const res = (await fetch(`/reviews/${id}`, {method: 'DELETE'})).json();

    return dispatch(removeReview(id))
}

const initialState = { allReviews: [], review: [] };

const reviewReducer = ( state = initialState, action: { type: any; payload: any } ) => {
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