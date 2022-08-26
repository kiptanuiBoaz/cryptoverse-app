import React from "react";
import {Menu, Typography, Button ,Avatar} from "antd";
import {Link} from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
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

      <Menu theme="dark" icon= {<FundOutlined/>}>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu>

      <Menu theme="dark" icon= {<MoneyCollectOutlined/>}>
        <Link to="/exchanges">Exchanges</Link>
      </Menu>

      <Menu theme="dark" icon= {<BulbOutlined/>}>
        <Link to="/news">News</Link>
      </Menu>

      {/* <Button className="menu-control-container">

      </Button> */}
    </div>
  )
}

export default Navbar