import React from "react";
import {Menu, Typography ,Avatar} from "antd";
import {Link} from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon}  size="small" alt= "avatar" />

        <Typography.Title level={2} className="logo">
          <Link to="/"> Cyrptoverse </Link>
        </Typography.Title>
       
      </div>

      <Menu theme="dark" >

        <Menu.Title icon= {<HomeOutlined/>}>
          <Link to="/">Home</Link>
        </Menu.Title>
    
        <Menu.Title icon= {<FundOutlined/>}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Title>

        <Menu.Title icon= {<MoneyCollectOutlined/>}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Title>

        <Menu.Title  icon= {<BulbOutlined/>}>
          <Link to="/news">News</Link>
        </Menu.Title>

        {/* <Button className="menu-control-container">
< MenuOutlined/
        </Button> */}

      </Menu>
    </div>
  )
}

export default Navbar