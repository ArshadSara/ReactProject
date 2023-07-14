import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/principle/login/Login";
import Signup from "./components/signup/Signup";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
//----Principal Routing--//
import Dashboard from "./components/principle/dashboard/Dashboard";
import Profile from "./components/principle/profile/Profile";
import SideMenu from "./components/principle/header&sidemenu&footer/Sidemenu";
//----Principal Routing--//
const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Login />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/forgotpassword" element={<ForgotPassword/>} />

        <Route exact={true} path="/signup" element={<Signup/>} />
        //----Principal Routing--//
        <Route exact={true} path="/principal-dashboard" element={<Dashboard/>} />
        <Route exact={true} path="/principal-profile" element={<Profile/>} />
        //----Principal Routing--//
      </Routes>
    </>
  );
};

export default App;
