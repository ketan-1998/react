import React from "react";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
const PaginationCom = () => {
  const { page, totalPages, themeMod, pageHandler } = useContext(BlogContext);
  return (
    <div className="fixed bottom-0 w-full">
      <div
        className={`w-10/12 max-w-[950px] flex justify-between items-center mx-auto p-2 capitalize font-semibold ${
          themeMod === "light"
            ? "bg-[#a6a6a6] text-[#404040]"
            : "bg-[#404040] text-[#bfbfbf]"
        }  rounded-lg px-10`}
      >
        <div className="space-x-5">
          {page > 1 && (
            <button
              className={`${
                themeMod === "light" ? "bg-[#d9d9d9]" : "bg-[#262626]"
              } px-10 capitalize py-1 rounded active:scale-105 duration-150 transition-all`}
              onClick={() => {
                pageHandler(page - 1);
              }}
            >
              previous
            </button>
          )}
          {page < totalPages && (
            <button
              className={`${
                themeMod === "light" ? "bg-[#d9d9d9]" : "bg-[#262626]"
              } px-10 capitalize py-1 rounded active:scale-105 duration-150 transition-all`}
              onClick={() => {
                pageHandler(page + 1);
              }}
            >
              next
            </button>
          )}
        </div>
        <div
          className={`  px-10 capitalize py-1 rounded ${
            themeMod === "light" ? "bg-[#d9d9d9]" : "bg-[#262626]"
          } `}
        >
          page <span className="text-red-600"> {page} </span>of{" "}
          <span className="text-green-700">{totalPages}</span>
        </div>
      </div>
    </div>
  );
};

export default PaginationCom;
