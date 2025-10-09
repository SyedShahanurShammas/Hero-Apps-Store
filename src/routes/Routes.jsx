import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/AllApps";
import Installation from "../pages/Installation/Installation";
import AllApps from "../pages/Apps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Loading..</p>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/Home.json"),
        Component: Home,
      },
      {
        path: "/apps",
        Component: AllApps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
