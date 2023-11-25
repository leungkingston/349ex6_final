import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Calculator from "./Calculator"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
const calc = createRoot(document.getElementById("calc"));
calc.render(
  <StrictMode>
    <Calculator />
  </StrictMode>
);