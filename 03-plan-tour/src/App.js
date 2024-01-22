import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
const App = () => {
  const [allTours, setAllTours] = useState(data);
  function removeTour(id) {
    let updateTours = allTours.filter((tour) => tour.id !== id);
    setAllTours(updateTours);
  }
  return (
    <div className="bg-slate-900 min-h-screen p-10 space-y-4 flex flex-col">
      <h1 className="w-10/12 mx-auto bg-slate-500 text-center text-2xl capitalize font-mono rounded-sm py-1">
        tours plan
      </h1>
      {allTours.length === 0 && (
        <div className="flex flex-col justify-center items-center grow">
          <p className="text-center text-2xl capitalize font-mono rounded-sm py-1">no tour left</p>
          <button className="bg-slate-700 px-4 py-1 text-center rounded-sm capitalize" onClick={()=>{
            setAllTours(data)
          }}>refresh</button>
        </div>
      )}
      {!(allTours.length === 0) && <Tours allTours={allTours} removeTour={removeTour} />}
    </div>
  );
};

export default App;
