import React from "react";
import "./Signup.css";
import profile from "../../images/mypic.jpg";
// import profile from "../../images/pr.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Sign up</h1>
            <div>
              <p className="textsize">Full Name</p>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="Please enter Full Name"
                className="name"
              />
            </div>
            <div>
              <p className="textsize">phone Number</p>
              <img src={email} alt="pass" className="email" />
              <input
                type="text"
                placeholder="Please enter email"
                className="name"
              />
            </div>
            <div>
              <p className="textsize">Email</p>
              <img src={email} alt="pass" className="email" />
              <input
                type="text"
                placeholder="Please enter email"
                className="name"
              />
            </div>
            <div>
              <p className="textsize">Create password</p>

              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="Please enter password"
                className="name"
              />
            </div>
            <div className="login-button">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
