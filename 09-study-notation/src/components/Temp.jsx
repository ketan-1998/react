import React from "react";
import { FcGoogle } from "react-icons/fc";
import frame  from '../assets/frame.png'
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

const Temp = ({title,desc1,desc2,image,isLoggedIn,type,setIsLoggedIn}) => {
  return (
    <div className="flex  justify-between flex-wrap">
      <div className="w-[450px]">
        <h1 className=" font-extrabold font-mono text-2xl pb-3 text-balance">{title}</h1>
        <p className="pr-14">{desc1}</p>
        <p className="text-blue-500 italic pb-8">{desc2}</p>
        <div>
            {type==='signup'?<SignupForm setIsLoggedIn={setIsLoggedIn}/>:<LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </div>
        <div className="flex justify-center items-center pb-6">
            <div className="h-[2px] bg-slate-800 grow rounded"></div>
           <p className="mx-1">OR</p>
            <div className="h-[2px] bg-slate-800 grow rounded"></div>
        </div>
        <button className="flex justify-center items-center gap-4 border-2 rounded border-slate-700 w-full h-10  text-slate-200">
            <FcGoogle/>
            Sign in with google
        </button>
      </div>
      <div className="relative">
        <img src={image} alt="login" className="relative z-10 w-[400px]"/>
        <img src={frame} alt="frame" className="absolute top-5 -right-5  "/>
      </div>
    </div>
  );
};

export default Temp;
