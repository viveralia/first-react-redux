/***********************/
/******** REDUX ********/
/***********************/
import counter from "./counter";
import isLogged from "./isLogged";
import { combineReducers } from "redux";

// Here is where we combine all the reducers into one named root
const root = combineReducers({
  counter,
  isLogged
});

export default root;
