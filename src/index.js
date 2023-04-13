import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/mexcellent3d.ttf";
import "./assets/fonts/budmojiggler.ttf";
import { MovieProvider } from "./store/MovieContext";
import { PaginationProvider } from "./store/Pagination.Context";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PaginationProvider>
    <MovieProvider>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </MovieProvider>
  </PaginationProvider>
);
