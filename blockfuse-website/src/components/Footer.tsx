
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MoveRight } from 'lucide-react';
import Button from './Buttons';

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
    { label: 'Contact us', href: '#' },
  ];


//   return (
//     <footer className="dark:bg-[#1a1a1a] text-gray-300">
//       {/* Community Section */}
//       <div className="border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
//           <h2 className="text-3xl font-semibold mb-2">Join our Community</h2>
//           <p className="text-gray-400 mb-8">
//             Become part of a thriving network of blockchain enthusiasts and professionals.
//           </p>
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MoveRight } from 'lucide-react';
import Button from './Buttons';

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
  // Array of profile images
  const profiles = Array(9).fill(null).map((_, index) => ({
    id: index,
    image: `/src/assets/images/founder_TradeBrigde_Portrait.JPG`,
  }));


  return (
    <footer className="dark:bg-[#1a1a1a] dark:text-gray-300">
      {/* Community Section */}
      <div className="border-b bg-[#f5f5f5] dark:bg-[#1a1a1a] border-gray-300">
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
<div className="mb-12 py-8 overflow-hidden hidden sm:block">
  <div className="flex justify-center items-center -space-x-4 px-4">
    {profiles.map((profile, index) => {
      const centerIndex = Math.floor(profiles.length / 2);
      const distanceFromCenter = Math.abs(centerIndex - index);
      // Adjust the scale to make the last items slightly larger
      const scale = 1 + (centerIndex - distanceFromCenter) * 0.1;
      // Adjust translateX to control spacing more accurately
      const translateX =
        index === centerIndex
          ? 0
          : index < centerIndex
          ? -(centerIndex - index) * 8
          : (index - centerIndex) * 8;
      // Adjust z-index to control depth
      let zIndex;
      if (index === centerIndex) {
        zIndex = 20;
      } else if (Math.abs(index - centerIndex) === 1) {
        zIndex = 18;
      } else {
        zIndex = 20 + (centerIndex - Math.abs(centerIndex - index)) * 2;
      }
      return (
        <div
          key={profile.id}
          className={`relative group z-${zIndex}`}
          style={{
            transform: `translateX(${translateX}px) scale(${scale})`,
          }}
        >
          {/* Border and image container */}
          <div className="relative w-16 h-16 lg:w-28 lg:h-28 rounded-full border-4 border-purple-500 overflow-hidden">
            <img
              src={profile.image}
              alt={`Community member ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      );
    })}
  </div>
</div>


          {/* Telegram Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-400">Connect with us on Telegram</span>
            
             <a href="#"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white px-6 py-2 transition-all duration-200"
            >
              Join our Community 
              <MoveRight />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Logo and Contact Section */}
<div className="flex flex-col items-center sm:flex-row sm:items-center mb-8">
  <div className="flex items-center justify-center gap-2 flex-col mb-4 sm:mb-0 mx-auto">
    <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center mr-0 sm:mr-3">
      <span className="text-white font-bold">Logo</span>
    </div>
    <span className="text-sm text-center">block.hustle@gmail.com</span>
  </div>
</div>


{/* Navigation Links */}
<nav className="mb-8 flex justify-center flex-col sm:flex-row sm:justify-center">
  <ul className="flex flex-wrap gap-4 justify-center sm:justify-start">
    {navigationLinks.map((link) => (
      <li key={link.label}>
        <a href={link.href} className="text-sm hover:text-purple-400 transition-colors">
          {link.label}
        </a>
      </li>
    ))}
  </ul>
  <Button className="w-40 border-2 border-primary-100 py-2 px-4 text-black dark:bg-black dark:border dark:border-primary-100 dark:text-white mt-4 sm:mt-0 mx-auto sm:mx-0">
    Donate
  </Button>
</nav>


        {/* Social Links and Copyright */}
        <div className="flex flex-col sm:flex-row justify-between bg-gray-100 dark:bg-[#2F2E34] border  dark:border-zinc-800 items-center py-3 border-t">
          <div className="flex gap-4 mb-4 sm:mb-0 py-2 px-4">
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

          <div className="flex flex-col sm:flex-row items-center gap-4 px-6 text-sm">
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-purple-400">
                Terms & Conditions
              </a>
            </div>
            <span className="text-gray-500">All Copyright (C) 2024 Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;