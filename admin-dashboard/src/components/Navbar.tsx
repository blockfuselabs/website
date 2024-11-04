import React from 'react';
import { FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex justify-end items-center bg-white shadow-md p-4">
      <div className="flex items-center">
        <FaBell className="text-gray-600 mr-4" />
        <div className="flex items-center cursor-pointer">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="rounded-full w-10 h-10 object-cover"
          />
          <span className="ml-2">Super Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
