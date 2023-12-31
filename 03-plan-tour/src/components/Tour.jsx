import React from "react";
import { useState } from "react";
const Tour = ({ id, name, info, price, image, removeTour }) => {
  const [descriptionShow, setDescriptionShow] = useState(true);
  const description = descriptionShow
    ? `${info.substring(0, 198)}... `
    : `${info} `;
  return (
    <div className="bg-slate-800  rounded flex flex-col overflow-hidden">
      <img
        src={image}
        loading="lazy"
        alt={`${name} inamge`}
        className=" aspect-square"
      />
      <div className="m-3 flex flex-col">
        <div>
          <h2 className="text-green-600 font-mono text-[22px] font-semibold">
            {name}
          </h2>
          <p className="text-green-600 font-mono text-[18px]">₹ {price}</p>
        </div>
        <div>
          {description}
          <span
            className="text-green-600 font-mono text-[15px] capitalize"
            onClick={() => {
              setDescriptionShow(!descriptionShow);
            }}
          >
            {descriptionShow ? `read more` : "show less"}
          </span>
        </div>
        <button
          className="bg-slate-500 active:bg-slate-950 rounded capitalize mt-1 text-red-800 font-mono text-[22px] hover:bg-slate-700 duration-200"
          onClick={() => {
            removeTour(id);
          }}
        >
          remove tour
        </button>
      </div>
    </div>
  );
};

export default Tour;
