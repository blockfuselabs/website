import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/blockfuse-white.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <div className="flex-shrink-0">
            <img src={Logo} alt="Blockfuse Logo" className="w-12 md:w-16 filter drop-shadow-md" />
          </div>
          <span className="hidden sm:block">Blockfuse Blog</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white focus:outline-none p-2 rounded hover:bg-white hover:bg-opacity-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex md:space-x-8">
          <Link to="/" className="hover:text-white hover:underline transition-colors font-medium">
            Home
          </Link>
          <Link to="#" className="hover:text-white hover:underline transition-colors font-medium">
            Categories
          </Link>
          <Link to="#" className="hover:text-white hover:underline transition-colors font-medium">
            About
          </Link>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-3 bg-white bg-opacity-10 rounded shadow-lg">
          <div className="flex flex-col space-y-2 px-4">
            <Link to="/" className="py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
              Home
            </Link>
            <Link to="#" className="py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
              Categories
            </Link>
            <Link to="#" className="py-2 px-3 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;