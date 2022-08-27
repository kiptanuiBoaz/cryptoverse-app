import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import{ BrowserRouter } from "react-router-dom";

import "antd/dist/antd.min.css";

// ReactDom.render

//     // Wrapping the app with router for the Links to work
   

// , document.getElementById("root"));

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render( 
        <React.StrictMode >
        
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </React.StrictMode>
    );

