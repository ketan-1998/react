import React from "react";
import Temp from "../components/Temp";
import login from "../assets/login.png";

const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Temp
        title="welcome back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={login}
        type="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
