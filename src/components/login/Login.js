import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    navigate("/Signup");
    e.preventDefault()
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Login</span>
        </div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          <div className="pass">
            <a href="#">Forgot password?</a>
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a onClick={(e)=>handleOnClick(e)}>Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
