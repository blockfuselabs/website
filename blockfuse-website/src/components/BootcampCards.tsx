import React from "react";
import Button from "./Buttons";
import { MoveRight } from "lucide-react";
import Web2 from "../assets/images/web2-bg.jpeg";
import Web3 from "../assets/images/web3-bg.jpeg";
import { NavLink } from "react-router-dom"; 

const StyledCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Card 1 */}
      <div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 bg-cover dark:bg-black m-3 sm:m-5 bg-center"
          style={{ backgroundImage: `url(${Web2})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
              Web 2 for Web 3
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 mb-4 text-lg sm:text-base">
            Learn the essentials of modern web development in HTML, CSS,
            Tailwind CSS, JavaScript, and Node.js/React. This program guides you
            through creating interactive, responsive websites, providing the
            skills and confidence to start building real-world projects. Perfect
            for beginners ready to launch their web journey!
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-16">
          <NavLink to="/web2"> {/* Use NavLink instead of anchor tag */}
            <Button>
              Apply now
              <MoveRight />
            </Button>
          </NavLink>
        </div>
      </div>

      {/* Card 2 */}
      <div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 m-3 sm:m-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${Web3})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
              Web 3
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 mb-4 text-lg sm:text-base">
            Unlock the future of the internet with our Web3 Bootcamp! Learn
            blockchain fundamentals, smart contracts, and dApps to build
            decentralized applications. Ideal for beginners eager to explore
            Web3 technology and launch into the world of blockchain development!
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-24">
          <NavLink to="/web3"> {/* Use NavLink instead of anchor  */}
            <Button>
              Apply now
              <MoveRight />
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StyledCards;
