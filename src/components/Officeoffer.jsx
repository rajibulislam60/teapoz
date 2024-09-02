import React from 'react'
import Container from './Container'
import { MdProductionQuantityLimits } from "react-icons/md";
import { LuPackage2 } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { VscVerified } from "react-icons/vsc";
import { FaHeadset } from "react-icons/fa";




const Officeoffer = () => {
  return (
    <div className="py-[70px]">
      <Container>
        <div className="flex gap-[90px]">
          <div className="flex gap-[90px] items-center text-center">
            <div className="text-[#8CBC4F]">
              <div className="text-[60px]">
                <MdProductionQuantityLimits className="mx-auto" />
              </div>
              <h4 className="w-[100px] mx-auto text-[24px] mt-[14px] uppercase leading-[28px]">
                Free shipping
              </h4>
            </div>
            <div className="w-1 h-[150px] bg-black/25"></div>
          </div>
          <div className="flex gap-[90px] items-center text-center">
            <div className="text-[#8CBC4F]">
              <div className="text-[60px]">
                <LuPackage2 className="mx-auto" />
              </div>
              <h4 className="w-[120px] mx-auto text-[20px] mt-[14px] uppercase leading-[28px]">
                100% hand packed
              </h4>
            </div>
            <div className="w-1 h-[150px] bg-black/25"></div>
          </div>
          <div className="flex gap-[90px] items-center text-center">
            <div className="text-[#8CBC4F]">
              <div className="text-[60px]">
                <MdOutlinePayment className="mx-auto" />
              </div>
              <h4 className="w-[100px] mx-auto text-[24px] mt-[14px] uppercase leading-[28px]">
                secured payment
              </h4>
            </div>
            <div className="w-1 h-[150px] bg-black/25"></div>
          </div>
          <div className="flex gap-[90px] items-center text-center">
            <div className="text-[#8CBC4F]">
              <div className="text-[60px]">
                <VscVerified className="mx-auto" />
              </div>
              <h4 className="w-[100px] mx-auto text-[24px] mt-[14px] uppercase leading-[28px]">
                quality guarantee
              </h4>
            </div>
            <div className="w-1 h-[150px] bg-black/25"></div>
          </div>
          <div className="flex gap-[90px] items-center text-center">
            <div className="text-[#8CBC4F]">
              <div className="text-[60px]">
                <FaHeadset className="mx-auto" />
              </div>
              <h4 className="w-[100px] mx-auto text-[24px] mt-[14px] uppercase leading-[28px]">
                Customer Service
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Officeoffer