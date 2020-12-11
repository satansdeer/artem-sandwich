import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SandwichProvider } from "./contexts/SandwichContext";
import { IngredientsProvider } from "./contexts/IngredientsContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SandwichProvider>
      <IngredientsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IngredientsProvider>
    </SandwichProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
