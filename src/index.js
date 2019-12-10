import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/***********************/
/******** REDUX ********/
/***********************/
import root from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  root,
  // For debugging with the Google Chrome Redux Extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // The entire app needs to be wrapped with the provider so it can access the data in whichever component we desire
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
