import React from "react";
import  "./App.css";
import { Routes, Route } from "react-router-dom";
import {Layout } from "antd";
import {Navbar, Exchanges, News, Homepage, CryptoCurrencies,CryptoDetails} from "./components";

function App() {
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
                <Route exact path="/crypto:coinId" element = {<CryptoDetails />}/>
                <Route exact path="/news" element ={<News />}/>
              </Routes>
            </div>
          </Layout>

        </div>

        <div className="footer">

        </div>
      </div>


  );
}

export default App