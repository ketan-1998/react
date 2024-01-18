import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignupForm = ({setIsLoggedIn}) => {
  const [tag, setTag] = useState(false);
  const Navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword_1, setShowPassword_1] = useState(false);
  const [showPassword_2,setShowPassword_2]=useState(false)
  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  function submitHandler(e){
    e.preventDefault()
    if(formData.password!==formData.confirmPassword){
      toast.error('password not match')
      return
    }
    const {name,value}=e.target
    setFormData((prevData)=>{
      return {...prevData,[name]:value}
    })
    Navigate('/dashboard')
    toast.success('account created')
    setIsLoggedIn(false)
    console.log(formData)
  }
  return (
    <form action="" onSubmit={submitHandler} className="space-y-5">
      <div className="bg-slate-500 rounded-3xl px-4 py-1 w-max text-slate-100 space-x-3 capitalize">
        <span
          onClick={() => {
            setTag(!tag);
          }}
          className={`${
            tag ? "bg-slate-900 px-4 rounded-xl py-1 text-slate-100" : ""
          }`}
        >
          student
        </span>
        <span
          onClick={() => {
            setTag(!tag);
          }}
          className={`${
            !tag ? "bg-slate-900 px-4 rounded-xl py-1 text-slate-100" : ""
          }`}
        >
          Instructor
        </span>
      </div>

      <div className="flex gap-1">
        <div className="flex flex-col grow">
          <label htmlFor="firstName">
            First Name <sup className="text-yellow-900">*</sup>
          </label>
          <input
            type="text"
            required
            id="firstName"
            onChange={changeHandler}
            placeholder="enter first name"
            name="firstName"
            value={formData.firstName}
            className="border-none bg-slate-300 px-4 py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"
          />
        </div>
        <div className="flex flex-col grow">
          <label htmlFor="lastName">
            Last Name <sup className="text-yellow-900">*</sup>
          </label>
          <input
            type="text"
            id="lastName"
            required
            onChange={changeHandler}
            placeholder="enter last name"
            name="lastName"
            value={formData.lastName}
            className="border-none bg-slate-300 px-4 py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">
          Email Address <sup className="text-yellow-900">*</sup>
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          name="email"
          onChange={changeHandler}
          placeholder="enter email address"
          className="border-none bg-slate-300 px-4 py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"

        />
      </div>

      <div className="flex gap-1 ">
        <div className="flex-col flex grow ">
          <label htmlFor="password">
            Password <sup className="text-yellow-900">*</sup>
          </label>
          <div className="relative flex ">
          <input
            type={showPassword_1 ? "text" : "password"}
            name="password"
            required
            value={formData.password}
            id="password"
            className="border-none bg-slate-300 grow px-4 py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"
            onChange={changeHandler}
            placeholder="enter password"
          />
          <span
          className="absolute top-2 right-2 "
            onClick={() => {
              setShowPassword_1(!showPassword_1);
            }}
          >
            {showPassword_1 ? <AiOutlineEye className="text-slate-900" /> : <AiOutlineEyeInvisible className="text-slate-900" />}
          </span>
          </div>
        </div>
        <div className="flex-col flex grow">
          <label htmlFor="confirmPassword">
          Confirm Password <sup className="text-yellow-900">*</sup>
          </label>
          <div className="relative flex">
          <input
            type={showPassword_2 ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            id="confirmPassword"
            className="border-none bg-slate-300 px-4 grow py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"
            onChange={changeHandler}
            placeholder="Confirm password"
            required
          />
          <span
          className="absolute top-2 right-2 "
            onClick={() => {
              setShowPassword_2(!showPassword_2);
            }}
          >
            {showPassword_2 ? <AiOutlineEye className="text-slate-900" /> : <AiOutlineEyeInvisible className="text-slate-900" />}
          </span>
          </div>
        </div>
        
      </div>
      <button className="grid place-items-center hover:bg-yellow-700 duration-200 transition-all bg-yellow-600 w-full text-slate-900 py-1  capitalize text-xl font-mono rounded-lg">
          sign in
        </button>
    </form>
  );
};

export default SignupForm;
