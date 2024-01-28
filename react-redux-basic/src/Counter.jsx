// src/Counter.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './Store/CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => {
    return state.counter.value;
  });

  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
