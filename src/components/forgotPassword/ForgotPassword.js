import React from "react";
import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    navigate("/");
    e.preventDefault()
  };
  return (
    <div className="container">
      <div className="pass">
        <div className="title">
          <span>Login</span>
        </div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Email" required />
          </div>
          <div className="row button">
            <input type="submit" value="Login" />
          </div>
          <div className="signup-link">
            Go to Login <a onClick={(e)=>handleOnClick(e)}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
