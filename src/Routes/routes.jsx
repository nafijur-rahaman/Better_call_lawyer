import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from '../Root/Root';



   export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
      {
        index:true,
        path:"/home",
        element: <h1>hello world</h1>
      }
    ]
  },

]);

