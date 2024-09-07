import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button';

const About = ()=> {
    return (
      <div
        data-aos="fade-up"
        className="bg-[url('/about.jpg')] bg-cover bg-center py-[100px] "
      >
        <Container>
          <div className="text-center">
            <h3 className="uppercase text-[16px] font-normal leading-[32px] text-[#8CBC4F]">
              About us
            </h3>
            <h2 className="w-[350px] text-[50px] font-semibold leading-[58px] text-white mx-auto mt-[24px]">
              Welcome to Our Tea Store
            </h2>
            <p className="w-[580px] text-[16px] font-medium leading-[22px] text-white mx-auto mt-[24px]">
              We are a family run company founded on a passion for tea. Our
              Chairman made a promise to never sell tea he wouldn't drink at
              home. Learn how we stay true to those values in everything we do.
            </p>
            <div className="w-[300px] mx-auto">
              <Button
                name="Shop The Collection"
                className="w-full text-white border border-[#8CBC4F] hover:border-[#8CBC4F] hover:bg-[#8CBC4F] hover:text-white duration-[0.4s] mt-[24px]"
              />
            </div>
          </div>
        </Container>
      </div>
    );
}

export default About