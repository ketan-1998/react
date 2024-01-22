import React from "react";
import { useState } from "react";
const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [show, setShow] = useState(false);
  let desc = show ? info : info.substr(0, 120) + "...";
  return (
    <div className="w-[340px] bg-slate-900 pb-5 overflow-hidden rounded space-y-4">
      <img src={image} alt={`${name}`} className="aspect-square object-cover" />
      <div className="px-2">
        <p className="text-center font-serif text-slate-200 text-3xl font-semibold">
          {name}
        </p>
        <p className="text-slate-600 font-semibold text-xl">
          <span className="text-red-900">₹</span>
          {price}
        </p>
      </div>
      <p className="text-balance text-justify px-2   text-slate-500">
        {desc}
        <span
          className="text-yellow-800 capitalize"
          onClick={() => setShow(!show)}
        >
          {!show ? " show more" : "  show less"}
        </span>
      </p>
      <div className="px-5">
        <button
          className="text-center bg-violet-800 py-1  w-full rounded capitalize text-xl text-slate-200"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
