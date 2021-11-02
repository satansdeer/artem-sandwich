import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SandwichProvider } from "./SandwichContext"
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SandwichProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SandwichProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
