import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import "modern-normalize/modern-normalize.css";
import "./index.scss";

import FavoritesPage from "./pages/FavoritesPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/catalog' element={<CatalogPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
