import Home from "Home";
import { AuthPage } from "components/auth/AuthPage";
import { Footer } from "components/footer/Footer";
import { Lineup } from "components/lineup/Lineup";
import { Navigation } from "components/navigation/Navigation";
import { Cart } from "components/tickets/Cart";
import { Tickets } from "components/tickets/Tickets";
import { Timetable } from "components/timetable/Timetable";
import { useEffect } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { useBandStore } from "store/store.db";

const Layout = () => {
  const { fetchBandData } = useBandStore();

  //pulling the band data from firestore on page load
  useEffect(() => {
    fetchBandData();
    console.log("fetched line up data")
  }, []);

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
        element: <AuthPage />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/timetable",
        element: <Timetable />,
      },
      {
        path: "/*",
        element: <h1>404</h1>,
      },
    ],
  },
]);
