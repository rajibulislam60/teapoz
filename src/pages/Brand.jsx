import React from 'react'
import Container from '../components/Container'
import BrandImg1 from './../components/images/brand1.jpg'
import BrandImg2 from "./../components/images/brand2.jpg";
import BrandImg3 from "./../components/images/brand3.jpg";
import BrandImg4 from "./../components/images/brand4.jpg";
import BrandImg5 from "./../components/images/brand5.jpg";
import BrandImg6 from "./../components/images/brand6.jpg";

const Brand = () => {
  return (
    <div data-aos="fade-up" className="bg-[#194A33] py-[80px] mb-[100px]">
      <Container>
        <div>
          <h3 className="text-[32px] font-bold leading-[38px] text-white text-center mb-[50px]">Popular Tea Brands</h3>
          <div className="flex justify-between">
            <img
              src={BrandImg1}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
            <img
              src={BrandImg2}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
            <img
              src={BrandImg3}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
            <img
              src={BrandImg4}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
            <img
              src={BrandImg5}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
            <img
              src={BrandImg6}
              alt="Brand Image"
              className="w-[200px] filter brightness-50 hover:brightness-100 duration-[0.8s]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Brand