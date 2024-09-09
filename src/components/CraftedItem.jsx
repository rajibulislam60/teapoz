import React from 'react'

const CraftedItem = ({ src, name, itemPera }) => {
  return (
    <div className="w-[50%] py-[20px]">
      <img src={src} alt="craft icon image" />
      <h3 className="text-[18px] font-medium leading-[22px] text-[#194a33] mt-5">
        {name}
      </h3>
      <p className="text-[14px] font-normal leading-[22px] text-[#86938d] mt-2">
        {itemPera}
      </p>
    </div>
  );
}

export default CraftedItem