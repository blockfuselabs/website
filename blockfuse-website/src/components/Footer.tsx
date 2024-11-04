import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { label: 'Home', href: '#' },
    { label: 'About us', href: '#' },
    { label: 'Teams', href: '#' },
    { label: 'Bootcamps', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Alumni', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Open source', href: '#' },
    { label: 'Contact us', href: '#' }
  ];

  // Array of profile images
  const profiles = Array(10).fill(null).map((_, index) => ({
    id: index,
    image: `/src/assets/images/founder_TradeBrigde_Portrait.JPG`
  }));

  return (
    <footer className="dark:bg-[#1a1a1a] text-gray-300">
      {/* Community Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-semibold mb-2">Join our Community</h2>
          <p className="text-gray-400 mb-8">
            Become part of a thriving network of blockchain enthusiasts and professionals.
          </p>

          {/* Logo Circle */}
          <div className="w-20 h-20 rounded-full bg-purple-600/10 border border-purple-500 mx-auto mb-8 flex items-center justify-center">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Logo</span>
            </div>
          </div>

        {/* Profile Images */}
        <div className="mb-12 overflow-hidden">
            <div className="flex justify-center gap-4 px-4">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="relative group"
                >
                  {/* Glow effect wrapper */}
                  <div className="absolute inset-0 rounded-full bg-purple-500/50 blur-md group-hover:bg-purple-400/50 transition-colors duration-300"></div>
                  {/* Border and image container */}
                  <div className="relative w-12 h-12 rounded-full border-2 border-purple-500 overflow-hidden">
                    <img
                      src={profile.image}
                      alt={`Community member ${profile.id + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Telegram Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-400">Connect with us on Telegram</span>
            <a
              href="#"
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
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold">Logo</span>
            </div>
            <span className="text-sm">block.hustle@gmail.com</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  className="text-sm hover:text-purple-400 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links and Copyright */}
        <div className='mx-auto px-4 sm:px-6 lg:px-8 py-8 w-[300px] lg:w-[1400px]'>
        <div className="flex flex-col sm:flex-row justify-between bg-white dark:bg-[#2F2E34] border border-gray-200 dark:border-zinc-800 items-center pt-8 border-t ">
          <div className="flex gap-4 mb-4 sm:mb-0 py-2 px-4 ">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-purple-400">Terms & Conditions</a>
            </div>
            <span className="text-gray-500">All Copyright (C) 2024 Reserved</span>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;