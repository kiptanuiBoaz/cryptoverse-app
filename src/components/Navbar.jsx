import React from "react";
import {Menu, Typography ,Avatar} from "antd";
import {NavLink as Link} from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined,FundOutlined} from "@ant-design/icons";
import icon from "../images/logo.png";



export const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon}  size={70} alt= "avatar" />

        <Typography.Title level={2} className="logo">
          <Link to="/"> Cyrptoverse </Link>
        </Typography.Title>
       
      </div>

      <Menu theme="dark" >

        <Menu.Item icon= {<HomeOutlined/>}>
          <Link to="/">Home</Link>
        </Menu.Item>
    
        <Menu.Item icon= {<FundOutlined/>}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item icon= {<MoneyCollectOutlined/>}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item  icon= {<BulbOutlined/>}>
          <Link to="/news">News</Link>
        </Menu.Item>

         {/* <Button className="menu-control-container">
        < MenuOutlined/
        </Button>  */}

      </Menu>
    </div>
  )
}

