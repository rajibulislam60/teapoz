import React from "react";

const FooterItem = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h4 className="uppercase text-[18px] font-medium leading-[28px] mb-[14px]">
          About
        </h4>
        <ul>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Company
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            FAQs
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Quality Gift
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Cards
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Contacts
          </li>
        </ul>
      </div>
      <div>
        <h4 className="uppercase text-[18px] font-medium leading-[28px] mb-[14px]">
          Shop
        </h4>
        <ul>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Loose Left Tea
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Green Teas
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Packed Teas
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Teaware
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Tea Gift
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Iced Tea
          </li>
        </ul>
      </div>
      <div>
        <h4 className="uppercase text-[18px] font-medium leading-[28px] mb-[14px]">
          Help Center
        </h4>
        <ul>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Delivery Information
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Terms & Conditions
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Returns & Refunds
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Privacy Notice
          </li>
          <li className="hover:text-[#8CBC4F] text-[14px] font-normal mt-[12px]">
            Shopping FAQs
          </li>
        </ul>
      </div>
      <div>
        <h4 className="uppercase text-[18px] font-medium leading-[28px] mb-[14px]">
          Get in touch
        </h4>
        <h5 className="w-[240px] text-[14px] font-medium mt-[12px]">
          2972 Westheimer Rd. Santa Ana, Illinois 85486
        </h5>
        <a href="#" className=" text-[14px] font-medium mt-[12px]">
          support@example.com
        </a>
        <h6 className=" text-[14px] font-normal mt-[16px] text-slate-400">
          Need help? Call us.
        </h6>
        <h4 className="text-[#8CBC4F] text-[16px] font-medium mt-[8px]">
          0198 186 9112
        </h4>
      </div>
    </div>
  );
};

export default FooterItem;
