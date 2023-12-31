import React from "react";
import Tour from "./Tour";

const Tours = ({ allTours, removeTour, refTour }) => {
  if (allTours.length === 0) {
    return (
      <div className="w-10/12 mx-auto bg-slate-900 text-center py-3 rounded min-h-[500px] justify-center items-center flex flex-col">
        <h3 className="text-slate-400 capitalize font-mono text-[30px]">
          no tour left
        </h3>
        <button
          className="bg-slate-800 px-10 py-1 text-slate-100 rounded active:bg-slate-600"
          onClick={() => {
            refTour();
          }}
        >
          refresh
        </button>
      </div>
    );
  }
  return (
    <div
      className={`mx-auto w-[80%]  p-5 rounded grid grid-cols-3 gap-5 items-start`}
    >
      {allTours.map((tour) => {
        return <Tour {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
