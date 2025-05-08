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
      {/*<div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 m-3 sm:m-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${Web2})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
            Web2 Basic Track
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 mb-4 text-justify text-lg sm:text-base">
          This track is designed for beginners with no prior coding experience who want to start their journey in software development. You will learn HTML, CSS, Version Control System and JavaScript from the ground up, building a solid foundation in web development. By the end of this track, you'll be well-prepared to advance into more specialized areas and pave the way for blockchain development in the future.
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXU54y3EkoNWoQtzi1Ov5zmJ2SUmmsdZpSgFEGFfmw8DqfjQ/viewform?usp=dialog"
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
      {/* </div> */}

      <div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 m-3 sm:m-5 bg-cover bg-center"
          style={{ backgroundImage: `url(${Web2})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
            Web2 Software Engineering
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 mb-4 text-justify text-lg sm:text-base">
          The Web2 Software Engineering track at Blockfuse Labs is a full-spectrum program designed to take you from beginner to industry-ready developer — even if you're starting from scratch. You'll begin by learning the fundamentals of software development: HTML, CSS, JavaScript, and Version Control Systems — building a solid foundation in web development. From there, you'll advance into modern frontend and backend technologies like React, Node.js & Express, along with essential tools like Databases and DevOps. By the end of this program, you'll be able to build and deploy full-stack applications confidently — and you'll be fully prepared to transition into Web3 and blockchain development. This is the path to becoming a well-rounded, future-ready engineer — and it starts here.
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeXU54y3EkoNWoQtzi1Ov5zmJ2SUmmsdZpSgFEGFfmw8DqfjQ/viewform?usp=dialog"
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


      {/* Card 2 */}
      <div className="dark:bg-black h-auto sm:h-[650px] border border-purple-500 shadow-lg overflow-hidden">
        <div
          className="h-40 sm:h-60 bg-cover dark:bg-black m-3 sm:m-5 bg-center"
          style={{ backgroundImage: `url(${Web2})` }}
        >
          <div className="flex items-center justify-center h-full bg-opacity-50">
            <h2 className="dark:text-white text-lg sm:text-2xl font-semibold">
            Web2 Advanced Track
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="dark:text-gray-300 text-justify mb-4 text-lg sm:text-base">
          This track is designed for those with basic programming knowledge who want to advance in Web2 development. You will dive into advanced JavaScript, React, Node.js & Express, DevOps, and Databases, gaining the skills needed to build and deploy full-stack applications. This program will make you a developer well-prepared to dive into a blockchain programming bootcamp, equipping you with the essential technical foundation for Web3 development
          </p>
        </div>
        <div className="flex justify-center mb-3 mx-2 sm:mt-16">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf_QPUkN_KIuTw4BA-aWTzD8njbvdOJdObwe6mCkzcZikY5PA/viewform?usp=dialog"
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
