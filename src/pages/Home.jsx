import React from "react";
import Bannar from "../components/Bannar";
import About from "./About";
import Taste from "../components/Taste";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div>
        <Bannar />
        <About />
        <Taste />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
