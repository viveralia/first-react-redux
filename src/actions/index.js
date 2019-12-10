export const increment = (unitsToIncrement = 1) => {
  return {
    type: "INCREMENT",
    payload: unitsToIncrement
  };
};

export const decrement = (unitsToDecrement = 1) => {
  return {
    type: "DECREMENT",
    payload: unitsToDecrement
  };
};
