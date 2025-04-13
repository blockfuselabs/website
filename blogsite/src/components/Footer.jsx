import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-purple-500">Blockfuse Labs Blog</h3>
            <p className="mt-2">Blockchain technology insights and research</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Blockfuse Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;