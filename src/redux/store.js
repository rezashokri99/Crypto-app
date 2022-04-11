import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import getCoinsReducer from "./getCoins.js/getCoinsReducer";

const store = createStore(getCoinsReducer, applyMiddleware(thunk))

export default store;