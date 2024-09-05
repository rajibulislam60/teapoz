import React from "react";
import Bannar from "../components/Bannar";
import About from "./About";
import Taste from "../components/Taste";
import Footer from "./Footer";
import Category from "./Category";

const Home = () => {
  return (
    <div>
      <div>
        <Bannar />
        <About />
        <Taste />
        <Category/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
