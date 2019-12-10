import counter from "./counter";
import isLogged from "./isLogged";
import { combineReducers } from "redux";

const root = combineReducers({
  counter,
  isLogged
});

export default root;
