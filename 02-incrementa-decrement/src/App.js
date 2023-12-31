import { FaPlus, FaMinus } from "react-icons/fa";
import './App.css';
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className='bg-slate-600 flex justify-center items-center h-screen select-none flex-col gap-4'>
      <div className='bg-slate-800 rounded space-x-6 px-10 py-5 flex items-center'>
        <span className="bg-slate-100 px-5 py-2 rounded-sm active:bg-slate-600" onClick={() => {
          setValue(value + 1)
        }}>
          <FaPlus />
        </span>
        <span className="bg-slate-100 px-5 py-2 rounded-sm">{value}</span>
        <span className="bg-slate-100 px-5 py-2 rounded-sm active:bg-slate-600" onClick={() => {
          setValue(value - 1)
        }}>
          <FaMinus />
        </span>
      </div>
      <div className='bg-slate-800  px-10 py-3 rounded flex items-center'>
        <buttOn className="bg-slate-300 px-10 py-2 rounded capitalize active:bg-slate-600" onClick={()=>{
          setValue(0)
        }}>reset</buttOn>
      </div>
    </div>
  );
}

export default App;
