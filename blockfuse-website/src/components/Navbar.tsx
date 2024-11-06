import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, MoveRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Buttons';
import Logo from '../assets/images/blockfuse-logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootcampMenuOpen, setIsBootcampMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleBootcampMenu = () => {
    setIsBootcampMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsBootcampMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 w-[300px] lg:w-[1200px]">
      <div className="bg-white dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800">
        <div className="flex items-center gap-4 lg:gap-10 justify-between h-16 px-4 lg:px-10">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
               <img src={Logo} alt="Blockfuse Logo" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10 justify-end">
            <div className="flex items-center space-x-3">
              <NavLink href="/" label="Home" />
              <NavLink href="/about-us" label="About us" />
              <NavLink href="/team" label="Teams" />
              <div
                className="relative"
                onClick={toggleBootcampMenu}
                ref={dropdownRef}
              >
                <NavLink href="#" label="Bootcamps">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isBootcampMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </NavLink>
                {isBootcampMenuOpen && (
                  <div className="absolute mt-5 z-10 w-48 bg-white dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800 rounded-md shadow-lg">
                    <Link
                      to="/bootcamp/web2"
                      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                      onClick={() => setIsBootcampMenuOpen(false)}
                    >
                      Web2
                    </Link>
                    <Link
                      to="/bootcamp/web3"
                      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-700"
                      onClick={() => setIsBootcampMenuOpen(false)}
                    >
                      Web3
                    </Link>
                  </div>
                )}
              </div>
              <NavLink href="/events" label="Events" />
              <NavLink href="/alumni" label="Alumni" />
              <NavLink href="/blog" label="Blog" />
              <NavLink href="/opensource" label="Open source" />
              <NavLink href="/contact-us" label="Contact us" />
            </div>
            <div className="flex gap-4 items-center">
            <Button className="w-28 border-2 border-primary-100 py-2 px-4 text-black dark:bg-black dark:border dark:border-primary-100 dark:text-white mt-4 sm:mt-0 mx-auto sm:mx-0">
            Donate
          </Button>
              <button
                className=" flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-4 py-2 transition-all duration-200"
                onClick={() => navigate('/auth')}
              >
                Apply now
                <MoveRight />
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
              <MobileNavLink href="/" label="Home" />
              <MobileNavLink href="/about-us" label="About us" />
              <MobileNavLink href="/team" label="Teams" />
              <div
                className="relative"
                onClick={() => setIsBootcampMenuOpen((prevState) => !prevState)}
              >
                <MobileNavLink href="#" label="Bootcamps">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isBootcampMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </MobileNavLink>
                {isBootcampMenuOpen && (
                  <div className="space-y-1 ml-4">
                    <MobileNavLink href="/bootcamp/web2" label="Web2" />
                    <MobileNavLink href="/bootcamp/web3" label="Web3" />
                  </div>
                )}
              </div>
              <MobileNavLink href="/events" label="Events" />
              <MobileNavLink href="/alumni" label="Alumni" />
              <MobileNavLink href="/blog" label="Blog" />
              <MobileNavLink href="/opensource" label="Open source" />
              <MobileNavLink href="/contact-us" label="Contact us" />
              <div className="pt-4">
                <Button
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                    }}
                  onClick={() => navigate('/auth')}
                >
                  Apply now →
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

// Navigation link component for desktop
const NavLink = ({ href, label, children }: NavLinkProps) => (
  <Link
    to={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm font-medium flex items-center space-x-1"
  >
    {label}
    {children}
  </Link>
);

// Navigation link component for mobile
interface MobileNavLinkProps {
  href: string;
  label: string;
  children?: React.ReactNode;
}

// Navigation link component for mobile
const MobileNavLink = ({ href, label, children }: MobileNavLinkProps) => (
  <Link
    to={href}
    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 text-base font-medium flex items-center justify-between"
  >
    {label}
    {children}
  </Link>
);

export default Navbar;