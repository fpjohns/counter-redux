import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Button = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  const handleInc = () => {
    dispatch({ type: "plus" });
  };
  const handleDec = () => {
    if (number > 0) {
      dispatch({ type: "minus" });
    }
  };
  const handleRand = () => {
    dispatch({ type: "rand", payload: Math.floor(Math.random(0, 10) * 100) });
  };
  return (
    <div className="btn">
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <button onClick={handleRand}>rand</button>
    </div>
  );
};

export default Button;
