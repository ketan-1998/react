import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const Testimonial = ({ review }) => {
  const [index, setIndex] = useState(0);
  function leftBtnHandler() {
    if (index <= 0) setIndex(review.length-1);
    else setIndex(index - 1);
  }

  function rightBtnHandler() {
    if (index >= review.length-1) setIndex(0);
    else setIndex(index + 1);
  }
  function surprizeHandler() {
    setIndex(Math.floor(Math.random() * review.length));
  }
  return (
    <div className="w-[650px] bg-slate-100 rounded-sm space-y-3 p-8 pb-4 mt-4 hover:shadow-md hover:shadow-white duration-500">
      <Card {...review[index]} />
      <div className="text-red-900 text-3xl text-center">
        <button onClick={leftBtnHandler}>
          <FaAngleLeft />
        </button>
        <button  onClick={rightBtnHandler}>
          <FaAngleRight />
        </button>
      </div>
      <div className="text-center">
        <button className='bg-red-500 text-white text-2xl font-mono px-6 py-1 rounded' onClick={surprizeHandler}>surprize me</button>
      </div>
    </div>
  );
};

export default Testimonial;
