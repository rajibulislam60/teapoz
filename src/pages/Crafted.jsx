import React from "react";
import Container from "../components/Container";
import CraftBannarImg from "./../components/images/craftB.jpg";
import CraftedItem from "../components/CraftedItem";
import CraftIconImg1 from "./../components/images/craft1.svg";
import CraftIconImg2 from "./../components/images/craft2.svg";
import CraftIconImg3 from "./../components/images/craft3.svg";
import CraftIconImg4 from "./../components/images/craft4.svg";
import CraftTesterImg from './../components/images/craftT.png';
import CraftTeaLeaf from './../components/images/teaLeaf.png'

const Crafted = () => {
  return (
    <div data-aos='fade-up' className="py-[78px]">
      <Container>
        <div className="flex justify-between gap-5">
          <div className="w-[50%]">
            <h4 className="uppercase text-[14px] font-normal leading-[24px] text-[#8cbc4f]">
              why we're great
            </h4>
            <h2 className="w-[500px] text-[50px] font-bold text-[#194a33] leading-[58px] mt-4">
              Crafted by Leading Tea Experts
            </h2>
            <p className="w-[500px] text-[16px] font-semibold leading-[20px] text-[#194a33] mt-4">
              Hand blended herbals & premium loose-leaf teas for body, mind &
              spirit. Whether you are a lifestyle tea drinker or exploring your
              first cup, we've got a brew for you.
            </p>
            <div className="mt-10">
              <img src={CraftBannarImg} alt="Crafted bannar Image" />
            </div>
          </div>
          <div className="w-[50%]">
            <div className="flex flex-wrap bg-[#f7f7f7] px-[40px] py-[68px]">
              <CraftedItem
                src={CraftIconImg1}
                name="Handpicked Tea"
                itemPera="There are many variations of passages of Lorem Ipsum available."
              />
              <CraftedItem
                src={CraftIconImg2}
                name="Climate & Plastic Neutral"
                itemPera="By injected humour, or randomised words which don't look even slightly believable."
              />
              <CraftedItem
                src={CraftIconImg3}
                name="Packaged Fresh at the Source"
                itemPera="Amet minim mollit non deserunt ullamco est sit consequor."
              />
              <CraftedItem
                src={CraftIconImg4}
                name="Shipped Direct to Your Doorstep"
                itemPera="Velit officia consequat duis enim velit mollit."
              />
            </div>
            <div className="w-full flex justify-between">
              <div className="w-[50%] mt-[30px] relative">
                <h2 className="w-full text-[40px] font-semibold text-[#194a33] leading-[44px] mt-4">
                  Master Tea Taster Selections
                </h2>
                <p className="text-[16px] font-semibold leading-[20px] text-[#194a33] mt-4">
                  We protect those ingredients with premium foil packaging to
                  lock in freshness and flavor, so you get the best tea
                  experience every time.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-[16px] font-medium leading-[20px] underline"
                  >
                    Veiw All Products
                  </a>
                </div>
                <div>
                  <img
                    src={CraftTeaLeaf}
                    alt="Tea Leaf Image"
                    className="-rotate-90 absolute bottom-[30px] right-[20px]"
                  />
                </div>
              </div>
              <div className="w-[50%]">
                <img src={CraftTesterImg} alt=" craft tester image" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Crafted;
