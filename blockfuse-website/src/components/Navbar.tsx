import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-[300px] lg:w-[1200px]">
      <div className="bg-white dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800">
        <div className="flex items-center gap-4 lg:gap-10 justify-between h-16 px-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <span className="text-sm font-bold dark:text-primary-200">Logo</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 justify-end">
            <div className='flex items-center space-x-3'>
              <NavLink href="#" label="Home" />
              <NavLink href="#" label="About us" />
              <NavLink href="#" label="Teams" />
              <NavLink href="#" label="Bootcamps" />
              <NavLink href="#" label="Events" />
              <NavLink href="#" label="Alumni" />
              <NavLink href="#" label="Blog" />
              <NavLink href="#" label="Open source" />
              <NavLink href="#" label="Contact us"/>
            </div>
            <div className='flex gap-4'>
              <button 
                className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-4 py-2 transition-all duration-200"
              >
                Apply now →
              </button>
             
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-zinc-800">
            <div className="px-4 py-3 space-y-1">
              <MobileNavLink href="#" label="Home" />
              <MobileNavLink href="#" label="About us" />
              <MobileNavLink href="#" label="Teams" />
              <MobileNavLink href="#" label="Bootcamps" />
              <NavLink href="#" label="Events" />
              <MobileNavLink href="#" label="Alumni" />
              <MobileNavLink href="#" label="Blog" />
              <MobileNavLink href="#" label="Open source" />
              <MobileNavLink href="#" label="Contact us" />
              <div className="pt-4">
                <button 
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-4 py-2"
                >
                  Apply now →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Navigation link component for desktop
const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
  >
    {label}
  </a>
);

// Navigation link component for mobile
const MobileNavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium"
  >
    {label}
  </a>
);

export default Navbar;