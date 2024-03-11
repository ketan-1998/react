import React from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const HeaderCom = () => {
  const { themeMod, setThemeMod } = useContext(BlogContext);

  return (
    <div className="fixed top-0 w-full h-10">
      <div
        className={`w-10/12 max-w-[950px] flex justify-center items-center mx-auto p-2 capitalize font-semibold relative  ${
          themeMod === "light"
            ? "bg-[#a6a6a6] text-[#404040]"
            : "bg-[#404040] text-[#bfbfbf]"
        }  rounded-lg px-10`}
      >
        <h1 className="text-3xl">codeHelp</h1>
        <div
          className={` h-[30px] w-[30px] absolute right-2 rounded-full grid place-items-center ${
            themeMod === "light" ? "bg-[#262626]" : "bg-[#d9d9d9]"
          }`}
        >
          {themeMod === "light" ? (
            <FaLightbulb
              onClick={() => {
                setThemeMod("dark");
              }}
            />
          ) : (
            <FaRegLightbulb
              onClick={() => {
                setThemeMod("light");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderCom;
