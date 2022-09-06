import React, {  } from "react";
import  "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import {Layout ,Space,Typography} from "antd";
import {Navbar, Exchanges, News, Homepage, CryptoCurrencies,CryptoDetails} from "./components";

// destructuring the title from Typography exported as namde Component from antd styling library
const {Title} = Typography;

export default function App() {
  return (
  
 
      <div className="app">

        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route  path="/" element={<Homepage/> } />
                <Route exact path="/exhanges"  element={<Exchanges/>}/>
                <Route exact path="/cryptocurrencies" element = {<CryptoCurrencies />}/>
                <Route exact path="/crypto/:coinId" element = {<CryptoDetails />}/>
                <Route exact path="/news" element ={<News />}/>
              </Routes>
            </div>
          </Layout>

          <div className="footer" >
            <Title level={5} style={{color:"#fff", textAlign:"center"}}>
              Cryptovetse <br/>
              All rights reserved
            </Title>

            <Space>
              <Link to ="home" >Home</Link>
              <Link to ="exchanges">Exchanges</Link>
              <Link to = "news">News</Link>
            </Space>

          </div>

        </div>
      
      </div> 


  );
}

