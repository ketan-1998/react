import { useState, useEffect, useCallback, useRef } from "react";

function App() {
  const [length, setLength] = useState(5);
  const [password, setPassword] = useState("");
  const [allowUpper, setAllowUpper] = useState(true);
  const [allowLower, setAllowLower] = useState(true);
  const [allowNumber, setAllowNumber] = useState(true);
  const [allowCharacter, setAllowCharacter] = useState(true);

  const passwordGenerator = useCallback(() => {
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
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [
    allowCharacter,
    allowUpper,
    allowLower,
    allowNumber,
    setPassword,
    password,
  ]);

  useEffect(() => {
    passwordGenerator();
  }, [allowCharacter, allowUpper, allowLower, allowNumber, length]);

  return (
    <div className="bg-slate-900 h-screen flex justify-center items-center">
      <div className="bg-slate-800 shadow-2xl rounded px-10 py-5 space-y-3">
        <h1 className="text-center capitalize text-3xl  text-slate-300">
          password generator
        </h1>
        <div className="relative">
          <input
            className="w-full border-none outline-none py-2 pl-1 rounded-xl"
            placeholder="Password"
            value={password}
          />
          <button className="absolute right-0 bottom-0 top-0 text-white text-xl capitalize bg-blue-800 px-4 ">
            copy
          </button>
        </div>
        <div className="">
          <div className="flex  items-center gap-4">
            <input
              type="range"
              className="grow"
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
