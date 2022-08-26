import React from "react";
import {Menu, Typography, Button ,Avatar} from "antd";
import {Link} from "react-router-dom";
import { HomeOutlined, MoneyCollectingOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";


const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="small"/>
        <Typography.Title level={2} className= "logo" >
          <Link to ="/">Cyrptoverse</Link>

        </Typography.Title>

        {/* <Button className="menu-control-container">

        </Button> */}
      </div>

    </div>
  )
}

export default Navbar