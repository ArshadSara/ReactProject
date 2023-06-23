import React from "react";
import  "./Login.css";
import profile from "../../images/mypic.jpg";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleOnClick = ()=>{
    navigate("/Signup")
  }
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="Please enter email" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Please enter password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="link">
              {/* <a href="#">Forgot password ?</a> Or  */}
               <a onClick={(e)=>handleOnClick(e)}> Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
