import React from "react";
import Tour from "./Tour";
const Tours = ({ allTours ,removeTour}) => {
  return (
    <div className="w-10/12 mx-auto bg-slate-500 grow flex flex-wrap gap-5 justify-evenly sm:w-full p-10 items-start">
      {allTours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};

export default Tours;
