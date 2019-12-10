import React from "react";
/***********************/
/******** REDUX ********/
/***********************/
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import { logIn } from "./actions/auth";

const App = () => {
  // In order to use the pieces of state, we first need to extract them using the useSelector hook
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  // To trigger the actions we need to dispatch them
  const dispatch = useDispatch();

  return (
    <div>
      {/* Counter View */}
      <h1>Counter: {counter}</h1>
      <div>
        {/* It is possible to pass an argument inside each function since we prevously declared the argument inside our actions */}
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      {/* Logged In View */}
      <div>
        <button onClick={() => dispatch(logIn())}>
          {!isLogged ? "Log me in!" : "Log me out"}
        </button>
      </div>
      {isLogged && (
        <>
          <h3>Valuable information I shouldn't see if I'm not logged in</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
            minus.
          </p>
        </>
      )}
    </div>
  );
};

export default App;
