import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'

const BlogItem = ({ src, name, itemTitle, itemPera }) => {
  return (
    <div>
      <Container>
        <div className="py-[30px]">
          <div className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="mx-auto object-cover w-full duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <p className="text-[14px] font-medium leading-[22px] mt-[16px]">
            Sub Category 1 | <span className="text-slate-400">Posted By:</span>{" "}
            {name} |{" "}
            <span className="text-slate-400">
              On: Tuesday September 12 2023
            </span>
          </p>
          <h2 className="text-[40px] font-bold leading-[44px] text-[#194A33] hover:text-[#8CBC4F] duration-[0.4s] cursor-pointer mt-[24px]">
            {itemTitle}
          </h2>
          <p className="text-[16px] font-medium leading-[22px] text-[#194A33] mt-[18px]">
            {itemPera}
          </p>
          <Button
            name="Read More"
            className="w-[150px] border border-[#8CBC4F] bg-white hover:bg-[#8CBC4F] hover:text-white duration-[0.4s] mt-[24px]"
          />
        </div>
      </Container>
    </div>
  );
};

export default BlogItem