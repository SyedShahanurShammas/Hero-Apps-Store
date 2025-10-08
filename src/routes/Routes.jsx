import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/Home.json"),
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
