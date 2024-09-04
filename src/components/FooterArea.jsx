import React from "react";
import Container from "./Container";
import LogoImg from "./images/logoF.jpg";
import FooterItem from "./FooterItem";

const FooterArea = () => {
  return (
    <div className="py-[78px]">
      <Container>
        <div className="flex">
          <div className="w-[20%]">
            <img src={LogoImg} alt="" />
          </div>
          <div className="w-[80%]">
            <FooterItem />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterArea;
