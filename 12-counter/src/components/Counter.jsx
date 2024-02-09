import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlices";

const Counter = () => {
  const counterData=useSelector((state)=>state.counter)
  const count = counterData.value
  const gfName=useSelector((state)=>state.counter.gf)
  const dispatch = useDispatch();
  console.log(counterData)
  return (
    <div className="bg-slate-500 flex p-10 space-x-5 min-h-screen justify-center items-center">
      <button
        className="px-5 bg-violet-800 py-1 rounded-sm font-mono active:scale-105 duration-200 transition-all  text-2xl capitalize text-slate-900 font-semibold"
        onClick={() => dispatch(increment())}
      >
        increment
      </button>
      <h2 className="text-slate-900 font-semibold font-mono text-2xl">{count}</h2>
      <button
        className="px-5 bg-violet-800 py-1 rounded-sm font-mono active:scale-105 duration-200 transition-all  text-2xl capitalize text-slate-900 font-semibold"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <h1>{gfName}</h1>
    </div>
  );
};

export default Counter;
