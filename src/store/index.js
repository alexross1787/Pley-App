import { createStore, combineReducers, applyMiddleware, compose, } from "redux";
  
  import restaurantReducer from "./restaurant";
  const rootReducer = combineReducers({
    session: restaurantReducer
  });
  
  const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;