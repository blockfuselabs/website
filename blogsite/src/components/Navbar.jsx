import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 ">
      <div className="container mx-auto flex justify-evenly items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Blockfuse Blog
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link to="#" className="hover:text-purple-400 transition-colors">
            Categories
          </Link>
          <Link to="#" className="hover:text-purple-400 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;