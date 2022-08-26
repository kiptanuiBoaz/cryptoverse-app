import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import "antd/dist/antd.min.css";

ReactDom.render(

    // Wrapping the app with router for the Links to work
        <App/>

, document.getElementById("root"));

