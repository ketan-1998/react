import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const LoginForm = ({ setIsLoggedIn }) => {
  const Navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    userEmail: "",
    userPass: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }
  function submitHandler(e) {
    e.preventDefault();
    Navigate("/dashboard");
    setIsLoggedIn(false);
    toast.success("login");
  }
  return (
    <div>
      <form onSubmit={submitHandler} className="space-y-5 pb-5">
        <div className="flex flex-col">
          <label htmlFor="email">
            Email id <sup className="text-yellow-950">*</sup>
          </label>
          <input
            type="email"
            required
            id="email"
            name="userEmail"
            placeholder="enter email address"
            value={formData.userEmail}
            onChange={changeHandler}
            className="border-none bg-slate-300 px-4 py-1 rounded text-black placeholder:text-black placeholder:capitalize outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">
            Enter password <sup className="text-yellow-900">*</sup>
          </label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              required
              id="password"
              name="userPass"
              value={formData.userPass}
              placeholder="enter password"
              onChange={changeHandler}
              className="border-none pr-10 bg-slate-300 px-4 py-1 rounded w-full  outline-none text-black placeholder:text-black placeholder:capitalize"
            />
            <span
              className="px-1 absolute right-2 top-2 z-10"
              onClick={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <AiOutlineEye className="text-slate-900" />
              ) : (
                <AiOutlineEyeInvisible className="text-slate-900" />
              )}
            </span>
          </div>
          <Link to={'/forgot'}>
            {" "}
            <p className="text-red-600 hover:text-red-800 cursor-pointer transition-all duration-200 pt-1 font-serif text-[14px] text-right">
              forgot password
            </p>
          </Link>
        </div>
        <button className="grid place-items-center hover:bg-yellow-700 duration-200 transition-all bg-yellow-600 w-full text-slate-900 py-1  capitalize text-xl font-mono rounded-lg">
          sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
