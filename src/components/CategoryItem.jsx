import React from 'react';

import { IoIosArrowForward } from "react-icons/io";

const CategoryItem = ({src, name}) => {
    return (
      <div className='relative mt-[40px]'>
        <div className="overflow-hidden w-[400px] rounded-md">
          <img
            src={src}
            alt=""
            className="mx-auto object-cover w-full duration-500 ease-in-out hover:scale-110 relative"
          />
        </div>
        <div className="flex gap-1 items-center text-[20px] font-semibold leading-[24px] text-white hover:text-[#8CBC4F] absolute bottom-[20px] left-[30px]">
          <a href="#">{name}</a>
          <IoIosArrowForward />
        </div>
      </div>
    );
}

export default CategoryItem