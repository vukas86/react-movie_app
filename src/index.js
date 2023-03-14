import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/mexcellent3d.ttf";
import "./assets/fonts/budmojiggler.ttf";
import { MovieProvider } from "./store/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MovieProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MovieProvider>
);
