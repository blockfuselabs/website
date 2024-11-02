import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-purple-300 shadow-lg" : "bg-purple-300"
      }`}
    >
      <div className="flex px-6 py-6 items-center">
        {/* Logo on the left */}

        <div className="flex items-center">
          <Link to="/home-page">
            <div className="flex gap-3 items-center">
              <div className=" px-1 text-primary-100">
                <h1 className="font-bold text-nowrap">BlockFuse Labs</h1>
              </div>
            </div>
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-primary-200 text-2xl">
            {isOpen ? (
              <AiOutlineClose className="text-primary-100 ml-24" />
            ) : (
              <AiOutlineMenu className="text-primary-100 ml-24" />
            )}
          </button>
        </div>

        {/* Navigation in the center for desktop */}
        <div className="hidden md:flex flex-col gap-4 md:flex-row md:flex-1 md:justify-center items-center space-y-4 md:space-y-0 md:space-x-2">
          <nav className="flex flex-col items-center gap-8 md:flex-row space-y-5 md:space-y-0 md:space-x-2 px-4 text-nowrap text-sm font-semibold">
            <div className="relative">
              <Link to="/home">
                <button
                  className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
                >
                  Home
                </button>
              </Link>
            </div>

            <div className="relative">
            <Link to="/about-us">
              <button
                className="flex items-center gap-1 focus:outline-none hover:text-logoColor"
              >
                About Us
              </button>
              </Link>
            </div>

            <div className="relative">
              <Link to="/team">
                <button
                  className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
                >
                  Team
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/alumni">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Alumni
                </button>
              </Link>
            </div>
            <div className="relative">
              <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor"
               onClick={() => toggleDropdown("bootcamp")}>
                Bootcamp
                {openDropdown === "bootcamp" ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}{" "}
              </button>
              {openDropdown === "bootcamp" && (
                <div className="absolute bg-purple-300 text-black text-left py-2 shadow-lg mt-6 rounded-md w-40">
                  <Link
                    to="/bootcamp/web2"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Web2
                  </Link>
                  <Link
                    to="/bootcamp/web3"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Web3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <Link to="events">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Events
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="opensource">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Open Source
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="testimonial">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Testimonal
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="blog">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Blog
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="contact-us">
                <button className=" flex items-center gap-1 focus:outline-none hover:text-logoColor">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown('auth')}
                className="bg-primary-100 text-white flex items-center gap-1 px-8 py-2 rounded-md focus:outline-none "
              >
               Signup
               
              </button>
              {openDropdown === 'auth' && (
                <div className="absolute bg-primary-100 text-black shadow-lg mt-5 rounded-md w-36">
                  <Link
                    to="/auth/member-login"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/registration"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={handleLinkClick}
                  >
                    Register
                  </Link>
                </div>
              )}
            </div> */}
          </nav>
        </div>

        {/* Sidebar for mobile */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-primary-100 text-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="text-2xl p-4">
            <AiOutlineClose />
          </button>
          <nav className="flex flex-col p-4 space-y-6 text-md">
            <div className="relative">
              <Link to="/home-page" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Home
                </button>
              </Link>
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                About Us
              </button>
            </div>
            <div className="relative">
              <Link to="/team" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Team
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/alumni" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Alumni
                </button>
              </Link>
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("bootcamp")}
                className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200"
              >
                Bootcamp
                {openDropdown === "bootcamp" ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </button>
              {openDropdown === "bootcamp" && (
                <div className="mt-2 rounded-md">
                  <Link
                    to="/bootcamp/web2"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Web2
                  </Link>
                  <Link
                    to="/bootcamp/web3"
                    className="block px-4 py-2 hover:bg-gray-600"
                    onClick={handleLinkClick}
                  >
                    Web3
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <Link to="/events" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Events
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/opensource" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Open Source
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/testimonial" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Testimonial
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/blog" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Blog
                </button>
              </Link>
            </div>
            <div className="relative">
              <Link to="/contact-us" onClick={toggleSidebar}>
                <button className="text-white flex items-center gap-2 focus:outline-none hover:text-gray-200">
                  Contact Us
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
