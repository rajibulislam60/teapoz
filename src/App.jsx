import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Taste from './components/Taste';
import Footer from './pages/Footer';

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
        <About/>
        <Taste/>
        <Footer/>
      </div>
    </div>
  );
}

export default App