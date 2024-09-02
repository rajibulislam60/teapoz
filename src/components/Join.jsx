import React from 'react'
import Container from './Container'
import JoinImg from './images/joinPart.png'

const Join = () => {
  return (
    <div className="bg-[url('/join.jpg')] bg-cover bg-center py-[70px]">
      <Container>
        <div className="relative flex">
          <div className="w-[20%]">
            <div className="absolute top-[-150px] left-0">
              <img src={JoinImg} alt="tea with cup image" />
            </div>
          </div>
          <div className="flex items-center gap-[50px]">
            <div className="w-[40%]">
              <h3 className="text-[30px] font-semibold leading-[48px]">
                Join the Tea Club
              </h3>
              <p className="text-[16px] font-medium leading-[22px] text-[#194A33] mt-[14px]">
                You may unsubscribe at any moment. For that purpose, please find
                our contact info in the legal notice.
              </p>
            </div>
            <div className="flex">
              <div className="border rounded-md flex items-center">
                <input
                  type="text"
                  className="w-[500px] search-bar px-3 py-2 border text-[24px]"
                  placeholder="Your email address"
                  // Auto-focus on the search input when it becomes visible
                />
                <a
                  href=""
                  className="uppercase text-[24px] text-white px-3 py-2 bg-[#8CBC4F]"
                >
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Join