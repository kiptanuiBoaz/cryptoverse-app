import React from "react";
import  "./App.css";
import { Routes, Link,Route } from "react-router-dom";
import {Layout, Typography,space } from "antd";
import {Navbar, Exchanges, News, Homepage, Cryptocurrencies,CryptoDetails} from "./components";

const App = () => {
  return (
        <div className="app">
            <div className="navbar">
              <Navbar/>
            </div>

            <div className="main">
              <Layout>
                <div className="routes">
                  <Routes>
                    <Route exact path ="/" ><Homepage/></Route>
                    <Route exact path ="/exhanges" ><Exchanges/></Route>
                    <Route exact path ="/cryptocurrencies" ><Cryptocurrencies/></Route>
                    <Route exact path ="/crypto:coinId" ><CryptoDetails/></Route>
                    <Route exact path ="/news" ><News/></Route>
                  </Routes>
                </div>
              </Layout>

            </div>

            <div className="footer">
                
            </div>
        </div>

  )
}

export default App