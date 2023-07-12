import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import Dashboard from "./components/dashboard/Dashboard";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Login />} />
        <Route exact={true} path="/login" element={<Login />} />
        <Route exact={true} path="/signup" element={<Signup/>} />
        <Route exact={true} path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact={true} path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default App;
