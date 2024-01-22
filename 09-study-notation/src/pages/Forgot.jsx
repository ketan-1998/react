import React from "react";

const Forgot = () => {
  return (
    <div className=" text-slate-200 font-mono text-3xl space-y-20">
      <h1 className="bg-slate-800 capitalize text-center py-1 rounded-sm">
        forgot password
      </h1>
      <div className="flex flex-col gap-4">
        <p className="bg-slate-800 capitalize text-slate-500 rounded px-4 w-max ">
          enter email or user name
        </p>
        <input />
        <button className="bg-violet-600 hove:bg-violet-700 active:bg-violet-900 hover:text-slate-400 transition-all duration-200 px-10 rounded capitalize text-slate-500 w-max">search</button>
      </div>
    </div>
  );
};

export default Forgot;
