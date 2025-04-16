import React from 'react';
import Logo from '../assets/images/blockfuse.svg';
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className='flex items-center justify-center md:justify-start space-x-2'>
             <img src={Logo} alt="Blockfuse Logo" className="w-12 md:w-16" />
            <h3 className="text-lg md:text-xl font-bold text-purple-500">Blockfuse Labs Blog</h3>
            </div>
            <p className="mt-2">Blockchain technology insights and research</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0">
            <a href="#" className="hover:text-purple-400 transition-colors text-center sm:text-left">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors text-center sm:text-left">
              Privacy
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors text-center sm:text-left">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Blockfuse Labs. All rights reserved.
        </div>
        
        <div className="mt-4 flex justify-center space-x-4">
        <div className="flex gap-4 mb-4 sm:mb-0 py-2 px-4">
            <a href="https://www.facebook.com/profile.php?id=61562117006926&mibextid=ZbWKwL" target="_blank" className="hover:text-purple-400 transition-colors">
              <SlSocialFacebook size={20} />
            </a>
            <a href=" https://x.com/blockfuselabs" target="_blank" className="hover:text-purple-400 transition-colors">
              <RiTwitterXFill size={20} />
            </a>
            <a href="https://www.instagram.com/blockfuselabs" target="_blank" className="hover:text-purple-400 transition-colors">
              <SlSocialInstagram size={20} />
            </a>
            <a href="https://www.youtube.com/@blockfuselabs" target="_blank" className="hover:text-purple-400 transition-colors">
              <SlSocialYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;