import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';

import AboutUs from './outterPage/AboutUs';
import Blog from './outterPage/Blog';
import Shop from './outterPage/Shop';
import Contact from './outterPage/Contact';
import AOS from "aos";
import "aos/dist/aos.css";


const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout includes Navbar and an outlet for other components
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true,
    });
  });

  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      <div>
        {/* <Home /> */}
        
      </div>
    </div>
  );
}

export default App