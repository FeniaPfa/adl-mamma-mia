import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalProvider } from "./context/GlobalContext";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
