import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    navigate("/Signup");
    e.preventDefault();
  };
  const handleForgotPassword = (e) => {
    navigate("/forgotpassword");
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="login">
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
          <div>
            <a onClick={(e) => handleForgotPassword(e)}>
              <span style={{color:"black"}}>Forgot password?</span>
            </a>
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Not a member? <a onClick={(e) => handleSignIn(e)}>Signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
