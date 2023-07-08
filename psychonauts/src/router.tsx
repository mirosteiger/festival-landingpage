import Home from "Home";
import { About } from "components/about/About";
import { SignIn } from "components/auth/signin";
import { Footer } from "components/footer/Footer";
import { Lineup } from "components/lineup/Lineup";
import { Navigation } from "components/navigation/Navigation";
import { Outlet, createBrowserRouter } from "react-router-dom";

const NavigationWrapper = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export const router = createBrowserRouter([
  {
    // Keep Navigation on every site
    path: "/",
    element: <NavigationWrapper />,
    children: [
      {
        path: "/festival-landingpage",
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
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/*",
        element: <h1>404</h1>,
      },
    ],
  },
]);
