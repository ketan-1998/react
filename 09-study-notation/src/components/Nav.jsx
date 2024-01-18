import React from "react";
import logo from "../assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Nav = ({ isLoggedIn,setIsLoggedIn }) => {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-between items-center flex-wrap">
      <img src={logo} alt="logo" />
      <div className="space-x-4 text-xl font-mono">
        <span>
          <Link to={"./"}>Home</Link>
        </span>
        <span>
          <Link to={"./"}>About</Link>
        </span>
        <span>
          <Link to={"./"}>Contact</Link>
        </span>
      </div>
      <div className="space-x-4 space-y-3">
        {isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/signup");
            }}
            className="px-4 bg-violet-800 rounded-sm py-1 font-mono text-slate-100"
          >
            Sign up
          </button>
        )}
        {isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/login");
            }}
            className="px-4 bg-violet-800 rounded-sm py-1 font-mono text-slate-100"
          >
            Login
          </button>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/login");
              setIsLoggedIn(true)
              toast.success('Logged out')
            }}
            className="px-4 bg-violet-800 rounded-sm py-1 font-mono text-slate-100"
          >
            Log out
          </button>
        )}
        {!isLoggedIn && (
          <button
            onClick={() => {
              Navigate("/dashboard");
            }}
            className="px-4 bg-violet-800 rounded-sm py-1 font-mono text-slate-100"
          >
            Dashboard
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
