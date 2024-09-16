import React, { useState } from "react";
import Container from "../components/Container";
import ContactH from "./ContactH";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import Footer from "../pages/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle the form submission here
  };

  return (
    <div data-aos="fade-up">
      <ContactH />
      <Container>
        <div className="mt-[68px] mb-[140px]">
          <div className="flex justify-between">
            {/* Email Us Section */}
            <div className="w-[32%] flex items-center justify-between bg-slate-200 py-[30px]">
              <div className="pl-[30px]">
                <h3 className="text-[24px] font-semibold leading-[28px] text-[#194A33]">
                  Email us
                </h3>
                <a
                  href="#"
                  className="text-[18px] font-medium leading-[22px] hover:text-[#8CBC4F]"
                >
                  demo@gmail.com
                </a>
              </div>
              <IoMailOutline className="text-[80px] text-[#8CBC4F]" />
            </div>
            {/* Call Us Section */}
            <div className="w-[32%] flex items-center justify-between bg-slate-200 py-[30px]">
              <div className="pl-[30px]">
                <h3 className="text-[24px] font-semibold leading-[28px] text-[#194A33]">
                  Call Us
                </h3>
                <a
                  href="#"
                  className="text-[18px] font-medium leading-[22px] hover:text-[#8CBC4F]"
                >
                  0198-186-9112
                </a>
              </div>
              <FaRegClock className="text-[80px] text-[#8CBC4F]" />
            </div>
            {/* Location Section */}
            <div className="w-[32%] flex items-center justify-between bg-slate-200 py-[30px]">
              <div className="pl-[30px]">
                <h3 className="text-[24px] font-semibold leading-[28px] text-[#194A33]">
                  Location
                </h3>
                <p className="text-[18px] font-medium leading-[22px] hover:text-[#8CBC4F]">
                  Kazipara, Mirpur, Dhaka, Bangladesh
                </p>
              </div>
              <IoLocationOutline className="text-[80px] text-[#8CBC4F]" />
            </div>
          </div>

          {/* Leave Us a Message Section */}
          <div className="text-center">
            <h2 className="text-[50px] font-bold text-[#194a33] leading-[58px] mt-[40px]">
              Leave Us a Message
            </h2>
            <p className="text-[16px] font-semibold leading-[20px] text-[#194a33] mt-2">
              Fill all information details to consult with us to get services
              from us.
            </p>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="mt-[30px] max-w-[600px] mx-auto"
          >
            <div className="mb-[20px]">
              <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-[10px] border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-[20px]">
              <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="demo@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-[10px] border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-[20px]">
              <label className="block text-[#194a33] text-[18px] font-medium mb-[5px]">
                Message
              </label>
              <textarea
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-[10px] border border-gray-300 rounded-lg h-[150px]"
              />
            </div>
            <button
              type="submit"
              className="px-[20px] py-[10px] border border-[#8CBC4F] font-semibold rounded-lg hover:bg-[#8CBC4F] hover:text-white transition-all"
            >
              Send
            </button>
          </form>
        </div>
      </Container>
      <Footer/>
    </div>
  );
};

export default Contact;
