import React from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Taste from './components/Taste';
import Footer from './pages/Footer';
import AboutUs from './outterPage/AboutUs';


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