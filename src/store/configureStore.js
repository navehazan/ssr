import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import bloggersReducer from "../reducers/bloggers";


const rootReducer = combineReducers({ bloggers: bloggersReducer });



export default (initialState) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);;
