
import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, showLoader, getGif } = useGif();
  return (
    <div className="mx-auto w-3/4 bg-slate-800 space-y-5 p-5 border border-slate-600">
      <h1 className="text-center text-slate-100 capitalize text-2xl rounded">
        a random gif
      </h1>
      {showLoader ? (
        <Spinner />
      ) : (
        <img src={gif} alt="random gif" className="mx-auto" />
      )}
      <button
        className="bg-slate-700 py-1 px-10 rounded-md capitalize block hover:bg-slate-600 active:scale-95 w-3/4 mx-auto text-slate-50 text-xl"
        onClick={() => {
          getGif();
        }}
      >
        generate
      </button>
    </div>
  );
};

export default Random;
