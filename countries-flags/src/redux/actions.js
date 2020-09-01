export const Increment = (incrementVal) => {
  return {
    type: "INCREMENT",
    payload: incrementVal
  };
};

export const Decrement = (decrementVal) => {
  return {
    type: "DECREMENT",
    payload: decrementVal
  };
};