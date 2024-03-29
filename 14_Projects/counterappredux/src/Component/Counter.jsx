import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="border-2 border-black p-2 px-4 "
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <br />
      <br />

      <div>{count}</div>

      <br />
      <button
        className="border-2 border-black p-2 px-4 "
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
