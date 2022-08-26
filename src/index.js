import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import {BrowserRouter as Router }  from "react-router-dom";
import "antd/dist/antd.css";

ReactDom.render(

    // Wrapping the app with router for the Links to work
    <Router>
        <App/>
    </Router>

, document.getElementById("root"));

