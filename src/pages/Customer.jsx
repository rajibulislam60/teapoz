import React from "react";
import Container from "../components/Container";
import CustomerItem from "../components/CustomerItem";

import Slider from "react-slick";
import CustomerImg1 from "./../components/images/customer1.png";

const Customer = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div data-aos='fade-up' className=" py-[120px] bg-slate-200">
      <Container>
        <div>
          <h2 className="text-[50px] font-bold leading-[58px] text-[#194a33]">
            Customer Reviews
          </h2>
          <div className=" mt-4">
            <Slider {...settings}>
              <CustomerItem
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fugiat culpa tempore maiores necessitatibus similique ut. Molestiae, animi iusto? Sapiente sed quia labore sequi veniam eveniet perspiciatis dolore libero."
                src={CustomerImg1}
                cName="Camilla V."
              />
              <CustomerItem
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fugiat culpa tempore maiores necessitatibus similique ut. Molestiae, animi iusto? Sapiente sed quia labore sequi veniam eveniet perspiciatis dolore libero."
                src={CustomerImg1}
                cName="Camilla V."
              />
              <CustomerItem
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fugiat culpa tempore maiores necessitatibus similique ut. Molestiae, animi iusto? Sapiente sed quia labore sequi veniam eveniet perspiciatis dolore libero."
                src={CustomerImg1}
                cName="Camilla V."
              />
              <CustomerItem
                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit fugiat culpa tempore maiores necessitatibus similique ut. Molestiae, animi iusto? Sapiente sed quia labore sequi veniam eveniet perspiciatis dolore libero."
                src={CustomerImg1}
                cName="Camilla V."
              />
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
