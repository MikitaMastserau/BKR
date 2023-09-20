import React from "react";
import ReactDOM from "react-dom/client";

import { HomeContainer } from "pages/Home/containers/HomeContainer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);