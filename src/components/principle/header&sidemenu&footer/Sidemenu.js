import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "row"}}>
      <Menu
        onClick={({key})=>{
            if(key == "/logout"){
                console.log("key")
            }else{
                navigate(key)
            }
        }}
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          { label: "Home", key: "/principal-dashboard", icon: <HomeOutlined /> },
          { label: "Profile", key: "/principal-profile", icon: <UserOutlined /> },
          { label: "Logout", key: "/logout", icon: <PoweroffOutlined />, danger: true },
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
