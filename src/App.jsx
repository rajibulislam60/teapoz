import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';

import AboutUs from './outterPage/AboutUs';
import Blog from './outterPage/Blog';


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
        path: "blog",
        element: <Blog />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

const App = () => {

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