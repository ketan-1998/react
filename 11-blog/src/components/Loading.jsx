import React from "react";
import { useContext,  } from "react";
import { BlogsContext } from "../context/BlogsContext";
import "./Loading.css";
const Loading = () => {
  const { mod } = useContext(BlogsContext);
  return (
    <div
      className={`flex justify-center flex-col items-center w-10/12 max-w-[850px] mx-auto grow ${
        mod === "light" ? "bg-slate-500" : "bg-slate-700"
      }`}
    >
      <div>
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
