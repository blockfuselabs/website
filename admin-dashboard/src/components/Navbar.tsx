import React from 'react';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4">
      <div className="w-full md:w-auto mb-2 md:mb-0">
        <input
          type="text"
          placeholder="Search anything here"
          className="border rounded-md p-2 w-full max-w-xs outline-none"
        />
      </div>
      <div className="flex items-center">
        <FaBell className="text-gray-600 mr-4" />
        <div className="flex items-center cursor-pointer">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="ml-2 hidden sm:inline">Alexandro</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
