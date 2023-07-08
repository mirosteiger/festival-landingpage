import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "router";
import { RouterProvider } from 'react-router'
import GlobalStyles from "GlobalStyles";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
);
