import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleOnClick = (e) => {
    navigate("/");
    e.preventDefault()
  };
  return (
    <div className="container">
      <div className="signup">
        <div className="title">
          <span>Register</span>
        </div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="First Name" required />
          </div>
          <div className="row">
          <i className="fas fa-user"></i>
            <input type="password" placeholder="Last Name" required />
          </div>
          <div className="row">
          {/* <i className="fa-solid fa-envelope"></i> */}
          <i className="fas fa-envelope"></i>
            <input type="password" placeholder="Email" required />
          </div>
          <div className="row">
            <i className="fas fa-mobile" aria-hidden="true"></i>
            <input type="password" placeholder="Phone Number" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="New Password" required />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <div className="row button">
            <input type="submit" value="Submit" />
          </div>
          <div className="signup-link">
            Go to Login  <a onClick={(e)=>handleOnClick(e)}>Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
