import Home from "Home";
import { AuthPage } from "components/auth/AuthPage";
import { Footer } from "components/footer/Footer";
import { Lineup } from "components/lineup/Lineup";
import { Navigation } from "components/navigation/Navigation";
import { Cart } from "components/tickets/Cart";
import { Tickets } from "components/tickets/Tickets";
import { Outlet, createBrowserRouter } from "react-router-dom";


const Layout = () => {
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
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/festival-landingpage",
        element: <Home />,
      },
      {
        path: "/lineup",
        element: <Lineup />,
      },
      {
        path: "/auth",
        element: <AuthPage />
      },
      {
        path: "/tickets",
        element: <Tickets />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/*",
        element: <h1>404</h1>,
      },
    ],
  },
]);
