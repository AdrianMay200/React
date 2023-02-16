import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
//importamos la app
import App from "./App";
//creamos un get.ELementById
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
