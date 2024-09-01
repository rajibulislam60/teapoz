import React from "react";
// import BannarImg from './images/bannar.jpg'
import Container from "./Container";
import Button from "./Button";

const Bannar = () => {
  return (
    <div className="bg-[url('/bannar.jpg')] bg-cover bg-center pt-[150px] pb-[250px] ">
      <Container>
        <div>
          <h3 className="uppercase font-medium text-[14px] text-[#8CBC4F] mb-3">
            Organic green tea
          </h3>
          <h1 className="text-[44px] font-bold leading-[58px] w-[350px] text-white">
            Start Your Relaxing Life Today
          </h1>
          <h4 className="font-semibold text-[16px] text-white mt-4">
            The wonderfull taste of life
          </h4>
          <Button
            name="Shop Now"
            className="w-[140px] bg-white hover:bg-[#8CBC4F] hover:text-white duration-[0.4s] mt-[24px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default Bannar;
