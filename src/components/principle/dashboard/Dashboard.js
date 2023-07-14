import React from "react";
import Header from "../header&sidemenu&footer/Header";
import SideMenu from "../header&sidemenu&footer/Sidemenu";
import Footer from "../header&sidemenu&footer/Footer";

const Dashboard = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", flex: 1, height: "100vh"}}>
      <Header/>
      <div style={{ display: "flex", flexDirection: "row", flex: 1 ,}}>
        <SideMenu />
        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
          <h1>DASH BOARD</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
