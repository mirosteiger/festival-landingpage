import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "router";
import { RouterProvider } from 'react-router'
import GlobalStyles from "GlobalStyles";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);
