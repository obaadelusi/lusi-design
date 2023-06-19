import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AlertsPage from "./pages/AlertsPage";
import BadgesPage from "./pages/BadgesPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="components">
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="badges" element={<BadgesPage />} />
          <Route path="buttons" element={<ButtonsPage />} />
          <Route path="cards" element={<CardsPage />} />
        </Route>
      </Route>
      <Route path="login" element={<LoginPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
