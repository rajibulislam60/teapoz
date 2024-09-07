import React from "react";
import Container from "../components/Container";
import CartImg1 from "./../components/images/cart1.jpg";
import CartImg2 from "./../components/images/cart2.jpg";
import CartImg3 from "./../components/images/cart3.jpg";
import CartImg4 from "./../components/images/cart4.jpg";
import CartImg5 from "./../components/images/cart5.jpg";
import CartImg6 from "./../components/images/cart6.jpg";
import CartImg7 from "./../components/images/cart7.jpg";
import CartImg8 from "./../components/images/cart8.jpg";
import Ecart from "../components/Ecart";

const Ecommarce = () => {
  return (
    <div data-aos="fade-up" className="py-[68px] relative">
      <Container>
        <div>
          <div>
            <h2 className="text-[50px] font-bold leading-[58px] text-[#194a33] text-center">
              Shop Our Teas
            </h2>
          </div>
          <div>
            <div className="flex flex-wrap justify-between">
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
    </div>
  );
};

export default Ecommarce;
