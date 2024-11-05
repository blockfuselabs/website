import React from 'react';
import Button from './Buttons';
import { MoveRight } from "lucide-react";

const StyledCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Card 1 */}
      <div className="bg-black h-[600px] shadow-lg overflow-hidden">
        <div className="h-60 bg-cover  bg-black m-5 bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/400x200')" }}>
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <h2 className="text-white text-2xl font-semibold">Web 2 for Web 3</h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4">
            Learn the essentials of modern web development in HTML, CSS, Tailwind CSS, JavaScript, and Node.js/React.
            This program guides you through creating interactive, responsive websites, providing the skills and confidence
            to start building real-world projects. Perfect for beginners ready to launch their web journey!
          </p>
         
        </div>
        <div className="flex justify-center mt-16">
            <Button>
              Apply now
              <MoveRight />
            </Button>
          </div>
      </div>

      {/* Card 2 */}
      <div className="bg-black h-[600px] shadow-lg overflow-hidden">
        <div className="h-60 m-5 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/400x200')" }}>
          <div className="flex items-center justify-center h-full bg-black  bg-opacity-50">
            <h2 className="text-white text-2xl font-semibold">Web 3</h2>
          </div>
        </div>
        <div className="p-10">
          <p className="text-gray-300 mb-4">
            Unlock the future of the internet with our Web3 Bootcamp! Learn blockchain fundamentals, smart contracts,
            and dApps to build decentralized applications. Ideal for beginners eager to explore Web3 technology and
            launch into the world of blockchain development!
          </p>
        </div>
        <div className="flex justify-center mt-16">
            <Button>
              Apply now
              <MoveRight />
            </Button>
          </div>
      </div>
    </div>
  );
};

export default StyledCards;
