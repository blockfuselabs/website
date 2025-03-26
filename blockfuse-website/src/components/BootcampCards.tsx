import React from "react";
import Button from "./Buttons";
import { MoveRight } from "lucide-react";
import Web2 from "../assets/images/web2-bg.jpeg";
import Web3 from "../assets/images/web3-bg.jpeg";
import { NavLink } from "react-router-dom";

const StyledCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">

         {/* Card 3 */}
         <div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 m-3 sm:m-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${Web3})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
            Web3 Track
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 mb-4 text-justify text-lg sm:text-base">
          This program is designed for skilled programmers who want to dive into blockchain development and build the future of Web3. If you have a strong programming background and are ready to take on the world of smart contracts and decentralized applications, this is for you!
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdOn-3186jflotdHBk7vpC1umcK7ANBNVeR-i43VcYii1nZhw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>
            Enroll
              <MoveRight />
            </Button>
          </a>
        </div>
        {/* <div className="dark:text-sky-400 font-bold italic flex justify-center mb-3 mx-2">
          NOTE: Registration for Cohort III will start on March 1st.
        </div> */}
      </div>
    </div>
  );
};

export default StyledCards;
