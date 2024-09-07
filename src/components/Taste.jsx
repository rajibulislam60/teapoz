import React from 'react'
import Container from './Container'
import { FaArrowRightLong } from "react-icons/fa6";

const Taste = () => {
  return (
    <div data-aos="fade-up" className="mt-[50px] mb-[100px]">
      <Container>
        <div className="bg-[url('/taste.jpg')] bg-cover bg-center py-[50px] ">
          <div className="ml-[300px]">
            <h3 className="w-[350px] text-[40px] font-semibold leading-[48px]">
              Exquisite Taste, Refreshing Blends.
            </h3>
            <p className="text-[16px] font-medium leading-[22px] text-[#194A33] mt-[20px]">
              Popular flavored tea you must try.
            </p>
            <div className="text-[18px] font-medium leading-[22px] mt-8 flex gap-2 items-center hover:text-[#8CBC4F]">
              <a href="#">Learn More</a>
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Taste