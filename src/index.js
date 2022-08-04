import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "typeface-roboto";
import "./body.css";
import Layout from "./pages";

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
