import React from 'react'

import { FaStar } from "react-icons/fa6";

const CustomerItem = ({ text, src, cName}) => {
  return (
    <div className="w-[400px] px-[30px] py-[40px] border rounded-md bg-white">
      <div className="flex gap-1 text-[#FF961B]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-[18px] font-normal leading-[22px] mt-[30px]">{text}</p>
      <div className="flex justify-between items-center mt-[40px]">
        <div>
          <img src={src} alt=" Customer Image" />
        </div>
        <div>
          <h5 className="text-[16px] font-medium leading-[18px]">{cName}</h5>
          <h6 className="text-[16px] font-medium leading-[18px] text-[#8cbc4f] mt-2">
            Verified Purchased
          </h6>
        </div>
      </div>
    </div>
  );
};

export default CustomerItem