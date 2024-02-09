import React from "react";
import { BlogsContext } from "../context/BlogsContext";
import { useContext } from "react";
const Pagination = () => {
  const { mod, page, totalPage, pageHandle, setPage } =
    useContext(BlogsContext);
  return (
    <div className=" w-full bottom-0 fixed">
      <div
        className={`${
          mod === "light"
            ? "bg-slate-400 text-slate-800"
            : "bg-slate-800 text-slate-400"
        } w-10/12 mx-auto flex justify-between flex-wrap gap-2 px-5 py-2 rounded-sm items-center`}
      >
        <div className="space-x-3 space-y-3 grow sm:grow-0  text-center">
          {page < 6 && (
            <button
              className="p-1 bg-violet-600 capitalize rounded-sm px-5 text-xl text-slate-300"
              onClick={() => {
                setPage(page + 1);
                pageHandle(page);
              }}
            >
              next
            </button>
          )}
          {page > 1 && (
            <button
              className="p-1 bg-violet-600 capitalize rounded-sm px-5 text-xl text-slate-300"
              onClick={() => {
                setPage(page - 1);
                pageHandle(page);
              }}
            >
              previous
            </button>
          )}
        </div>
        <div className="text-xl text-center sm:grow-0 grow font-mono">
          Page {page} of {totalPage}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
