import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: "",
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      <div>
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App