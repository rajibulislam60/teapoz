import React from 'react';
import Container from '../components/Container';
import { IoIosArrowForward } from "react-icons/io";
import CategoryItem from '../components/CategoryItem';
import CategoryImg1 from "./../components/images/cate1.jpg";
import CategoryImg2 from "./../components/images/cate2.jpg";
import CategoryImg3 from "./../components/images/cate3.jpg";
import CategoryImg4 from "./../components/images/cate4.jpg";
import CategoryImg5 from "./../components/images/cate5.jpg";

const Category = () => {
    return (
      <div className="mb-[120px]">
        <Container>
          <div>
            <div className="text-center">
              <h2 className="text-[50px] font-semibold leading-[54px] text-[#194a33]">
                Browse by Category
              </h2>
              <div className="flex gap-1 items-center justify-center mt-[26px] text-[14px] font-normal leading-[18px] text-[#8CBC4F]">
                <a href="#">View All Products</a>
                <IoIosArrowForward />
              </div>
            </div>
            <div className="flex flex-wrap justify-between ">
              <CategoryItem src={CategoryImg1} name="Organic Teas" />
              <CategoryItem src={CategoryImg2} name="Iced Teas" />
              <CategoryItem src={CategoryImg3} name="Tea Bags" />
              <CategoryItem src={CategoryImg4} name="Classic Teas" />
              <CategoryItem src={CategoryImg5} name="Loose Leaf" />
              <CategoryItem src={CategoryImg1} name="Vegan Teas" />
            </div>
          </div>
        </Container>
      </div>
    );
}

export default Category