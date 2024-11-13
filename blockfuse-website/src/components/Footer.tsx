import React from "react";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";
import Button from "./Buttons";
import Logo from '../assets/images/blockfuse-logo.png';
import LazyLoadedFooter from './LazyLoadedFooter';

import ProfileImage0 from '../assets/images/Ellipse 9.png';
import ProfileImage1 from '../assets/images/Ellipse 12.png';
import ProfileImage2 from '../assets/images/Ellipse 12-1.png';
import ProfileImage3 from '../assets/images/Ellipse 12-2.png';
import ProfileImage4 from '../assets/images/Ellipse 12-3.png';
import ProfileImage5 from '../assets/images/Ellipse 12-4.png';
import ProfileImage6 from '../assets/images/Ellipse 12-5.png';
import ProfileImage7 from '../assets/images/Ellipse 12-6.png';
import ProfileImage8 from '../assets/images/Ellipse 12-7.png';
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationLinks = [
    { label: "Home", to: "/home" },
    { label: "About us", to: "/about-us" },
    { label: "Teams", to: "/team" },
    { label: "Bootcamps", to: "/bootcamp" },
    { label: "Events", to: "/events" },
    { label: "Alumni", to: "/alumni" },
    { label: "Blog", to: "/blog" },
    { label: "Open source", to: "/opensource" },
    { label: "Contact us", to: "/contact-us" },
  ];

  const profiles = [
    { id: 0, image: ProfileImage0 },
    { id: 1, image: ProfileImage1 },
    { id: 2, image: ProfileImage2 },
    { id: 3, image: ProfileImage3 },
    { id: 4, image: ProfileImage4 },
    { id: 5, image: ProfileImage5 },
    { id: 6, image: ProfileImage6 },
    { id: 7, image: ProfileImage7 },
    { id: 8, image: ProfileImage8 },
  ];

  return (
    <footer className="dark:bg-[#1a1a1a] dark:text-gray-300">
      {/* Community Section */}
      <div className="border-b bg-[#f5f5f5] dark:bg-[#1a1a1a] border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-2">Join our Community</h2>
          <p className="dark:text-gray-400 mb-8">
            Become part of a thriving network of blockchain enthusiasts and
            professionals.
          </p>

          {/* Logo Circle */}
          <div className="w-20 h-20 rounded-full bg-purple-600/10 border border-purple-500 mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={Logo} alt="Blockfuse Logo" />
            </div>
          </div>

          {/* Profile Images */}
          <div className="mb-12 py-8 overflow-hidden hidden sm:block">
            <div className="flex justify-center items-center -space-x-4 px-4">
              {profiles.map((profile, index) => {
                const centerIndex = Math.floor(profiles.length / 2);
                const distanceFromCenter = Math.abs(centerIndex - index);
                const scale = 1 + (centerIndex - distanceFromCenter) * 0.1;
                const translateX = index === centerIndex
                  ? 0
                  : index < centerIndex
                  ? -(centerIndex - index) * 8
                  : (index - centerIndex) * 8;

                let zIndex;
                if (index === centerIndex) {
                  zIndex = 20;
                } else if (Math.abs(index - centerIndex) === 1) {
                  zIndex = 18;
                } else {
                  zIndex = 15;
                }

                return (
                  <div
                    key={profile.id}
                    className="relative group"
                    style={{
                      zIndex,
                      transform: `translateX(${translateX}px) scale(${scale})`,
                    }}
                  >
                    {/* Border and image container */}
                    <div className="relative w-16 h-16 lg:w-28 lg:h-28 rounded-full border-2 border-purple-500 overflow-hidden">
                      <img
                        src={profile.image}
                        alt={`Community member ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Telegram Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-lg dark:text-gray-400">Connect with us on Telegram</span>
            
            <a href="https://t.me/blockfuselabs" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-6 py-2 transition-all duration-200"
            >
              Join our Community →
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Logo and Contact Section */}
        <div className="flex flex-col items-center sm:flex-row sm:items-center mb-8">
          <div className="flex flex-col gap-3 items-center sm:flex-col sm:items-center sm:justify-start mb-4 sm:mb-0 sm:ml-0 mx-auto sm:mx-0">
            {/* Logo container */}
            <div className="w-8 h-8 flex items-center justify-center mr-0 sm:mr-3">
              <img src={Logo} alt="Blockfuse Logo" />
            </div>
            {/* Email text */}
            <span className="text-lg text-center sm:text-left">support@blockfuselabs.com</span>
          </div>
        </div>

    
     {/* Navigation Links */}
     <nav className="mb-8 flex gap-3 items-center justify-center flex-col sm:flex-row sm:justify-between">
        <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
          {navigationLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="text-md hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/donate">
          <Button className="w-40 border-2 border-primary-100 py-2 px-4 text-black dark:bg-black dark:border dark:border-primary-100 dark:text-white mt-4 sm:mt-0 mx-auto sm:mx-0">
            Donate
          </Button>
        </Link>
      </nav>

        {/* Social Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between bg-gray-100 dark:bg-[#2F2E34] border dark:border-zinc-800 items-center py-3 border-t">
          <div className="flex gap-4 mb-4 sm:mb-0 py-2 px-4">
            <a href="https://www.facebook.com/profile.php?id=61562117006926&mibextid=ZbWKwL" className="hover:text-purple-400 transition-colors">
              <SlSocialFacebook size={20} />
            </a>
            <a href=" https://x.com/blockfuselabs" className="hover:text-purple-400 transition-colors">
              <RiTwitterXFill size={20} />
            </a>
            <a href="https://www.instagram.com/blockfuselabs" className="hover:text-purple-400 transition-colors">
              <SlSocialInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@blockfuselabs" className="hover:text-purple-400 transition-colors">
              <SlSocialYoutube size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 px-6 text-sm">
            <div className="flex gap-4">
              {/* <a href="#" className="hover:text-purple-400">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-purple-400">
                Terms & Conditions
              </a> */}
              <LazyLoadedFooter />
            </div>
            {/* <span className="dark:text-gray-500">
              All Copyright (C) 2024 Reserved
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
