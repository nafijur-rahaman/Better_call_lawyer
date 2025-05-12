import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "../Root/Root";
import Error from "../pages/Error/Error";
import Booking from "../pages/Bookings/Booking";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("LawyerData.json"),
        Component: Home,
      },
      {
        path: "/bookings",
        Component: Booking,
      },
      {
        path: "/blogs",
        Component: Blogs,
      },
      {
        path:"/error",
        Component:Error,
      }
    ],
  },
]);
