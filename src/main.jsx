import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import AccordionPage from "./pages/AccordionPage";
import AlertsPage from "./pages/AlertsPage";
import BadgesPage from "./pages/BadgesPage";
import ButtonsPage from "./pages/ButtonsPage";
import CardsPage from "./pages/CardsPage";
import ChipsPage from "./pages/ChipsPage";
import DialogsPage from "./pages/DialogsPage";
import Error404Page from "./pages/Error404Page";
import Error500Page from "./pages/Error500Page";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<DashboardPage />} />
        <Route index path="dashboard" element={<DashboardPage />} />
        <Route path="components">
          <Route path="accordion" element={<AccordionPage />} />
          <Route path="alerts" element={<AlertsPage />} />
          <Route path="badges" element={<BadgesPage />} />
          <Route path="buttons" element={<ButtonsPage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="chips" element={<ChipsPage />} />
          <Route path="dialogs" element={<DialogsPage />} />
        </Route>
      </Route>
      <Route path="auth">
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="404" element={<Error404Page />} />
        <Route path="500" element={<Error500Page />} />
      </Route>
      <Route path="*" element={<Error404Page />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
