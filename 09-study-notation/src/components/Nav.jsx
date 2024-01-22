import React from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-between items-center flex-wrap">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="logo" />
      </Link>
      <div className="space-x-4 text-xl font-mono">
        <span>
          <Link
            to={"./"}
            className="text-slate-400 text-xl hover:text-slate-200"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            to={"./about"}
            className="text-slate-400 text-xl hover:text-slate-200"
          >
            About
          </Link>
        </span>
        <span>
          <Link
            to={"/contact"}
            className="text-slate-400 text-xl hover:text-slate-200"
          >
            Contact
          </Link>
        </span>
      </div>
      <div className="space-x-4 space-y-3">
        {isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/signup");
            }}
            className="px-5 active:bg-violet-900 bg-violet-500 hover:bg-violet-600 active:scale-105 duration-200 transition-all text-slate-400 py-1 rounded-sm capitalize hover:text-slate-100"
          >
            Sign up
          </button>
        )}
        {isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/login");
            }}
            className="px-5 active:bg-violet-900 bg-violet-500 hover:bg-violet-600 active:scale-105 duration-200 transition-all text-slate-400 py-1 rounded-sm capitalize hover:text-slate-100"
          >
            Login
          </button>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/login");
              setIsLoggedIn(true);
              toast.success("Logged out");
            }}
            className="px-5 active:bg-violet-900 bg-violet-500 hover:bg-violet-600 active:scale-105 duration-200 transition-all text-slate-400 py-1 rounded-sm capitalize hover:text-slate-100"
          >
            Log out
          </button>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/dashboard");
            }}
            className="px-5 active:bg-violet-900 bg-violet-500 hover:bg-violet-600 active:scale-105 duration-200 transition-all text-slate-400 py-1 rounded-sm capitalize hover:text-slate-100"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
