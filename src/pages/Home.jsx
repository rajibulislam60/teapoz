import React, { useEffect } from "react";
import Bannar from "../components/Bannar";
import About from "./About";
import Taste from "../components/Taste";
import Footer from "./Footer";
import Category from "./Category";
import AOS from "aos";
import "aos/dist/aos.css";
import Ecommarce from "./Ecommarce";
import TripArea from "./TripArea";
import Brand from "./Brand";
import Crafted from "./Crafted";
import Customer from "./Customer";


const Home = () => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: true
    })
  })
  return (
    <div>
      <div data-aos="fade-up">
        <Bannar />
        <About />
        <Ecommarce/>
        <Taste />
        <Category/>
        <TripArea/>
        <Brand/>
        <Crafted/>
        <Customer/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
