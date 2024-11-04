import React, { useState, useEffect } from 'react';
import {
  FaUserMd, FaCalendarAlt, FaUsers, FaBuilding,
  FaDollarSign, FaBoxes, FaCog, FaQuestionCircle, FaTh
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    // Automatically collapse the sidebar on mobile view
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize state on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`bg-white shadow-lg h-screen ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && <h1 className="text-xl font-bold">BlockFuse Labs</h1>}
        <button onClick={handleCollapse} className="text-gray-500">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Main Menu */}
      <div className="mt-4">
        <ul>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/" className="flex items-center">
              <FaTh className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Overview</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder1" className="flex items-center">
              <FaUserMd className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder1</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder2" className="flex items-center">
              <FaCalendarAlt className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder2</span>}
            </Link>
          </li>
        </ul>

        {/* Other Menu */}
        {!isCollapsed && <p className="px-4 mt-4 mb-2 text-gray-500">Other Menu</p>}
        <ul>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder3" className="flex items-center">
              <FaUsers className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder3</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder4" className="flex items-center">
              <FaBuilding className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder4</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder5" className="flex items-center">
              <FaDollarSign className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder5</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/placeholder6" className="flex items-center">
              <FaBoxes className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Placeholder6</span>}
            </Link>
          </li>
        </ul>

        {/* Help & Settings */}
        {!isCollapsed && <p className="px-4 mt-4 mb-2 text-gray-500">Help & Settings</p>}
        <ul>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/help-center" className="flex items-center">
              <FaQuestionCircle className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Help & Center</span>}
            </Link>
          </li>
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <Link to="/settings" className="flex items-center">
              <FaCog className="text-gray-500" />
              {!isCollapsed && <span className="ml-4">Settings</span>}
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        {!isCollapsed && (
          <div className="flex items-center justify-center mt-6">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="hidden" />
              <span className="relative">
                <span className="block w-10 h-4 bg-gray-300 rounded-full shadow-inner"></span>
                <span className="absolute block w-6 h-6 mt-1 ml-1 transition-transform transform bg-white rounded-full shadow inset-y-0 left-0"></span>
              </span>
              <span className="ml-3 text-gray-500">Dark mode</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
