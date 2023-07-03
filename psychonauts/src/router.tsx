import Home from "Home";
import { About } from "components/About";
import { Lineup } from "components/lineup/Lineup";
import { Navigation } from "components/navigation/Navigation";
import { Outlet, createBrowserRouter } from "react-router-dom";

const NavigationWrapper = () => {
    return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
    )
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationWrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/lineup",
        element: <Lineup />,
      },
      {
        path: "/*",
        element: <h1>404</h1>,
      }
    ],
  },
]);
