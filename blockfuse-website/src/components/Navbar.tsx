import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ChevronDown, MoveRight } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from './Buttons';
import Logo from '../assets/images/blockfuse-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBootcampMenuOpen, setIsBootcampMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

 
  const handleMobileNavClick = () => {
    setIsOpen(false); 
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
                <NavLink href="/" label="Home" isActive={location.pathname === '/'} />
                <NavLink href="/about-us" label="About us" isActive={location.pathname === '/about-us'} />
                <NavLink href="/team" label="Teams" isActive={location.pathname === '/team'} />
                <NavLink href="/bootcamp" label="Boot Camp" isActive={location.pathname === '/bootcamp'} />
                <NavLink href="/events" label="Events" isActive={location.pathname === '/events'} />
                <NavLink href="/alumni" label="Alumni" isActive={location.pathname === '/alumni'} />
                <NavLink href="/blog" label="Blog" isActive={location.pathname === '/blog'} />
                <NavLink href="/opensource" label="Open source" isActive={location.pathname === '/opensource'} />
                <NavLink href="/contact-us" label="Contact us" isActive={location.pathname === '/contact-us'} />
              </div>
              <div className="flex gap-4 items-center">
                <Button
                  className="w-28 border-2 border-primary-100 py-2 px-4 text-black dark:bg-black dark:border dark:border-primary-100 dark:text-white mt-4 sm:mt-0 mx-auto sm:mx-0"
                  onClick={() => navigate('/donate/*')}
                >
                  Donate
                </Button>
                <Link to="/bootcamp">
                  <button
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-4 py-2 transition-all duration-200"
                  >
                    Apply now
                    <MoveRight />
                  </button>
                </Link>
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

            {/* Mobile menu button */}
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
                <MobileNavLink href="/" label="Home" onClick={handleMobileNavClick} isActive={location.pathname === '/'} />
                <MobileNavLink href="/about-us" label="About us" onClick={handleMobileNavClick} isActive={location.pathname === '/about-us'} />
                <MobileNavLink href="/team" label="Teams" onClick={handleMobileNavClick} isActive={location.pathname === '/team'} />
                <MobileNavLink href="/bootcamp" label="Bootcamp" onClick={handleMobileNavClick} isActive={location.pathname === '/bootcamp'} />
                <MobileNavLink href="/events" label="Events" onClick={handleMobileNavClick} isActive={location.pathname === '/events'} />
                <MobileNavLink href="/alumni" label="Alumni" onClick={handleMobileNavClick} isActive={location.pathname === '/alumni'} />
                <MobileNavLink href="/blog" label="Blog" onClick={handleMobileNavClick} isActive={location.pathname === '/blog'} />
                <MobileNavLink href="/opensource" label="Open source" onClick={handleMobileNavClick} isActive={location.pathname === '/opensource'} />
                <MobileNavLink href="/contact-us" label="Contact us" onClick={handleMobileNavClick} isActive={location.pathname === '/contact-us'} />
                <div className="pt-4">
                  <Button
                    style={{
                      width: '100%',
                      maxWidth: '200px',
                    }}
                    onClick={() => {
                      navigate('/auth');
                      handleMobileNavClick();
                    }}
                  >
                    Apply now →
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

// Navigation link component
const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => {
  return (
    <Link
      to={href}
      className={`text-sm transition-colors duration-200 ${
        isActive 
          ? 'text-purple-600 dark:text-purple-400' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {label}
    </Link>
  );
};

// Mobile Navigation link
const MobileNavLink: React.FC<NavLinkProps> = ({ href, label, isActive, onClick, children }) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`block text-lg transition-colors duration-200 ${
        isActive 
          ? 'text-purple-600 dark:text-purple-400' 
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {label}
      {children}
    </Link>
  );
};

export default Navbar;