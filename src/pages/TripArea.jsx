import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

const TripArea = ()=> {
    return (
      <div data-aos="fade-up" className="bg-[url('/trip.jpg')] bg-cover bg-center py-[120px]">
        <Container>
          <div className="text-center">
            <h4 className="uppercase text-[14px] font-normal leading-[20px] text-[#8cbc4f]">
              Take a trip
            </h4>
            <h2 className="w-[500px] text-[50px] font-semibold leading-[58px] text-white mx-auto mt-4">
              Straight from the field to your cup
            </h2>
            <p className="w-[500px] text-[16px] font-semibold leading-[20px] text-white mx-auto mt-4">
              Independently owned, direct trade importer of organic teas and
              botanicals. Inspired by tradition and global culinary arts.
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

export default TripArea