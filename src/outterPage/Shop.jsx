import React, { useState } from "react";
import Container from "../components/Container";
import Ecart from "../components/Ecart";
import CartImg1 from "./../components/images/cart1.jpg";
import CartImg2 from "./../components/images/cart2.jpg";
import CartImg3 from "./../components/images/cart3.jpg";
import CartImg4 from "./../components/images/cart4.jpg";
import CartImg5 from "./../components/images/cart5.jpg";
import CartImg6 from "./../components/images/cart6.jpg";
import CartImg7 from "./../components/images/cart7.jpg";
import CartImg8 from "./../components/images/cart8.jpg";
import Footer from "../pages/Footer";
import ShopH from "./ShopH";
import { IoMdArrowDropdown } from "react-icons/io";

const Shop = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div data-aos="fade-up">
      <ShopH />
      <Container>
        <div>
          <div>
            <div className="bg-slate-400 py-4 text-center mx-auto relative mt-[50px]">
              <label className="text-[22px] font-medium">Sort by : </label>
              <div className="relative inline-block">
                <input
                  type="text"
                  placeholder="Search item...."
                  className="w-[500px] border text-[22px] px-6 py-2 rounded-md"
                />
                <IoMdArrowDropdown
                  onClick={toggleDropdown}
                  className="text-[20px] absolute top-1/2 right-4 transform -translate-y-1/2"
                />
                <div>
                  {isDropdownOpen && (
                    <ul className="absolute right-0 w-[500px] bg-white border mt-2 rounded-md shadow-md z-50">
                      <li
                        className="px-6 py-2 text-left hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setIsDropdownOpen(false);
                        }}
                      >
                        Organic Tea
                      </li>
                      <li
                        className="px-6 py-2 text-left hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setIsDropdownOpen(false);
                        }}
                      >
                        Tea Bags
                      </li>
                      <li
                        className="px-6 py-2 text-left hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setIsDropdownOpen(false);
                        }}
                      >
                        Tea Leaf
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-between mb-[140px] mt-[50px]">
              <Ecart
                src={CartImg1}
                name="Earl Gray Dragonfly Tea"
                price="29.99"
              />
              <Ecart
                src={CartImg2}
                name="Jade Orchid Green Tea Pyramid"
                price="29.99"
              />
              <Ecart src={CartImg3} name="Brown Bear Cushion" price="29.99" />
              <Ecart
                src={CartImg4}
                name="T2 Sleep Tight Herbal Tea"
                price="29.99"
              />
              <Ecart
                src={CartImg5}
                name="Organic Chamomile Flowers.."
                price="29.99"
              />
              <Ecart src={CartImg6} name="Pure Matoha Latte " price="29.99" />
              <Ecart
                src={CartImg7}
                name="NYBG x Tea Forté Jubilee Petite.."
                price="29.99"
              />
              <Ecart
                src={CartImg8}
                name="Wellbeing Gift Set 3-piece"
                price="29.99"
              />
              <Ecart
                src={CartImg1}
                name="Earl Gray Dragonfly Tea"
                price="29.99"
              />
              <Ecart
                src={CartImg2}
                name="Jade Orchid Green Tea Pyramid"
                price="29.99"
              />
              <Ecart src={CartImg3} name="Brown Bear Cushion" price="29.99" />
              <Ecart
                src={CartImg4}
                name="T2 Sleep Tight Herbal Tea"
                price="29.99"
              />
              <Ecart
                src={CartImg5}
                name="Organic Chamomile Flowers.."
                price="29.99"
              />
              <Ecart src={CartImg6} name="Pure Matoha Latte " price="29.99" />
              <Ecart
                src={CartImg7}
                name="NYBG x Tea Forté Jubilee Petite.."
                price="29.99"
              />
              <Ecart
                src={CartImg8}
                name="Wellbeing Gift Set 3-piece"
                price="29.99"
              />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
