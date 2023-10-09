import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./assets/css/reset.css";
import "./assets/css/font.css";
import "./assets/css/container.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routing></Routing>
    </BrowserRouter>
  </React.StrictMode>
);
