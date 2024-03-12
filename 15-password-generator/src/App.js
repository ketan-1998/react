import { useState, useEffect, useCallback, useRef } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(5);
  const [password, setPassword] = useState("");
  const [allowUpper, setAllowUpper] = useState(true);
  const [allowLower, setAllowLower] = useState(true);
  const [allowNumber, setAllowNumber] = useState(true);
  const [allowCharacter, setAllowCharacter] = useState(true);

  const passwordGenerator = (() => {
    let pass = "";
    let lower = "qwertyuioplkjhgfdsazxcvbnm";
    let upper = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
    let number = "123456789";
    let special = "!@#$%^&*(){}()*+,-./";
    let str = "";
    if (allowUpper) str += upper;
    if (allowNumber) str += number;
    if (allowLower) str += lower;
    if (allowCharacter) str += special;
    if (str.length === 0) {
      setPassword("Please select at least one character type.");
      return;
    }
    console.log(str)
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
      console.log('value of i ',i,' and value of pass',pass,' value of length ',length,' value of index ',index)
      // console.log(str)
    }
    setPassword(pass);
  })

useEffect(()=>{
  passwordGenerator()
},[length,allowUpper,allowLower,allowNumber,allowCharacter])

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-slate-800 shadow-2xl rounded px-10 py-5 space-y-3">
        <h1 className="text-center capitalize text-3xl  text-slate-300">
          password generator
        </h1>
        <div className="relative rounded-xl overflow-hidden ">
          <input
            className="w-full border-none outline-none py-2 text-xl text-green-900 bg-slate-300 pl-5 font-semibold"
            placeholder="Password"
            value={password}
            readOnly
          />
          <button className="absolute right-3 bottom-0 top-0 text-white text-xl capitalize bg-blue-800 px-5 ">
            copy
          </button>
        </div>
        <div className="">
          <div className="flex  items-center gap-4  ">
            <input
              type="range"
              className="grow "
              min={3}
              max={20}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <span className="text-green-500 font-semibold capitalize">
              length:- {length}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="space-x-1 capitalize text-slate-400 font-semibold">
              <input
                type="checkbox"
                id="uppercase"
                checked={allowUpper}
                onChange={() => {
                  setAllowUpper((prev) => !prev);
                }}
              />
              <label htmlFor="uppercase">upperCase</label>
            </span>
            <span className="space-x-1 capitalize text-slate-400 font-semibold">
              <input
                type="checkbox"
                id="lowercase"
                checked={allowLower}
                onChange={() => {
                  setAllowLower((prev) => !prev);
                }}
              />
              <label htmlFor="lowercase">lowerCase</label>
            </span>
            <span className="space-x-1 capitalize text-slate-400 font-semibold">
              <input
                type="checkbox"
                id="number"
                checked={allowNumber}
                onChange={() => {
                  setAllowNumber((prev) => !prev);
                }}
              />
              <label htmlFor="number">number</label>
            </span>
            <span className="space-x-1 capitalize text-slate-400 font-semibold">
              <input
                type="checkbox"
                id="specialchar"
                checked={allowCharacter}
                onChange={() => {
                  setAllowCharacter((prev) => !prev);
                }}
              />
              <label htmlFor="specialchar">special character</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
