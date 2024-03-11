import { useState } from "react";
function App() {
  const [bgColor, setBgColor] = useState("bg-slate-600");
  return (
    <div className={`${bgColor} h-screen`}>
      <div className="fixed bottom-5 w-full">
        <div className="bg-slate-900 w-10/12 mx-auto text-white flex justify-around py-3 px-2 rounded capitalize">
          <span
            className="bg-red-900 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-red-900");
            }}
          >
            red
          </span>
          <span
            className="bg-black py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-black");
            }}
          >
            Black{" "}
          </span>
          <span
            className="bg-green-900 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-green-900");
            }}
          >
            Green
          </span>
          <span
            className="bg-slate-500 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-slate-500");
            }}
          >
            slate-500
          </span>
          <span
            className="bg-red-500 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-red-500");
            }}
          >
            red-500
          </span>
          <span
            className="bg-green-500 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-green-500");
            }}
          >
            Green-500
          </span>
          <span
            className="bg-stone-900 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-stone-900");
            }}
          >
            stone
          </span>
          <span
            className="bg-stone-500 py-1 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-stone-500");
            }}
          >
            stone-500
          </span>
          <span
            className=" py-1 bg-cyan-900 px-3 rounded-full capitalize"
            onClick={() => {
              setBgColor("bg-cyan-900");
            }}
          >
            cyan
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
