import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Signup from "./components/signup/Signup";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path="/" element={<Login />} />
        <Route exact={true} path="/signup" element={<Signup/>} />
        <Route exact={true} path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
};

export default App;
