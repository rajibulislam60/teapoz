import React from "react";
import Container from "./components/Container";
import LogoImg from "./components/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const closeMenu = () => onClick(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="sticky top-0 bg-[#194A33] py-[22px] z-50">
      <Container>
        <div className="flex items-center justify-between">
          <div className="text-white flex gap-[150px] items-center">
            <img src={LogoImg} alt="Logo Image" />
            <div>
              <ul className="flex gap-6">
                <li className="text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s]">
                  <Link onClick={closeMenu} to="/">
                    HOME
                  </Link>
                </li>
                <li className="uppercase text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s]">
                  <Link onClick={closeMenu} to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="uppercase text-4 font-semibold leading-[24px] hover:text-primary duration-[0.4s]">
                  <Link onClick={closeMenu} to="/aboutus">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white flex gap-6 items-center">
            <div>
              <div className="search-container relative">
                {/* Search icon that toggles the search bar */}
                <FaSearch
                  className="search-icon text-[24px] relative"
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                />

                {/* Conditionally render the search bar based on visibility state */}
                {isVisible && (
                  <div className="flex">
                    <div className="absolute top-[30px] right-[-30px] border rounded-md flex items-center bg-[#8CBC4F]">
                      <input
                        type="text"
                        className="search-bar px-3 py-2 border"
                        placeholder="Search..."
                        // Auto-focus on the search input when it becomes visible
                      />
                      <FaSearch className="text-[24px] w-[50px] " />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
