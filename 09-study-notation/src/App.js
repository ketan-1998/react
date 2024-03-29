import React from "react";
import Nav from "./components/Nav";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Forgot from "./pages/Forgot";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen pt-2 select-none">
      <div className="w-10/12 max-w-[1100px] mx-auto space-y-14">
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
