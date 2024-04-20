import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'

import restaurantReducer from "./restaurant";

export default createStore(restaurantReducer, applyMiddleware(thunk))
