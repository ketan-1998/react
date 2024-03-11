import React from "react";
import { BlogsContext } from "../context/BlogsContext";
import { useContext } from "react";
import { CiLight, CiDark } from "react-icons/ci";
const Header = () => {
  const { mod, changeMode } = useContext(BlogsContext);
  return (
  <div className="fixed top-0 w-full">
      <div
      className={`text-center w-10/12 max-w-[850px] mx-auto rounded-sm capitalize font-semibold text-3xl font-mono py-2 relative ${
        mod === "light"
          ? "bg-green-200 text-green-800"
          : "bg-slate-800 text-slate-400"
      }`}
    >
      <h1>codeHelp</h1>
      <span className={`w-[40px] h-[40px] p-1  grid place-items-center ${mod==='light'?'bg-black':'bg-white'}  rounded-full absolute top-[5px] right-[10px] `}
      onClick={()=>{
        let newMode=mod==='light'?'dark':'light'
        changeMode(newMode)
      }}>
        {mod === "light" ? <CiDark className=" text-white " /> : <CiLight className="text-black" />}
      </span>
    </div>
  </div>
  );
};

export default Header;
