import React from "react";
import box from "../assets/svgs/box1.svg";
import Imageone from "../assets/images/Frame-10-1.png";
import alumni1 from "../assets/images/alumni.png";
import alumni2 from "../assets/images/alumni.png";
import OurAlumni from "./OurAlumni";


const Alumni = () => {
  return (
    <div className="px-6 py-4 h-full sm:px-8 md:px-16 lg:px-24">
       <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src="/src/assets/svgs/circles.svg"
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
            loading="lazy"
            className="w-full h-auto max-w-[800px]"
          />
        </div>

        {/* Text Content */}
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl  md:text-5xl dark:text-white">
              Meet Our Alumni{" "}
              <span className="text-purple-500 font-bold">At Blockfuselabs</span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl w-full md:w-3/4  mx-auto dark:text-gray-300">
            Discover the bright minds shaping the blockchain space! Our alumni are pioneers, creators, and leaders who drive innovation and inspire the next generation in the world of decentralized technology.Blockfuse Labs Alumni is where graduates connect, collaborate, and continue to drive the future of decentralized technology.
            </p>
          </div>

        </div>
      </section>
      <section
        className="space-y-5 h-auto px-4 py-10 sm:px-6 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
       
        <p className="dark:text-gray-300 text-xl pb-10 md:pb-0 lg:pb-0 leading-[26px] font-light sm:w-[90%] md:w-[700px] mx-auto text-center md:text-left md:ml-[290px]">
          At Blockfuse Labs, we see education as a journey. Whether you're new
          to blockchain or an experienced developer, we offer resources,
          expert instructors, and tools for every stage of your growth.
        </p>
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex justify-center">
              <img src={Imageone} alt="Main Image" className="relative z-10 w-[90%] sm:w-full md:w-full" />
            </div>
            <img
              src={box}
              alt="Box svgs"
              className="absolute top-0 left-0 z-0 h-[250px] sm:h-[350px] md:h-[450px]"
              style={{ transform: "translate(-20%, -20%)" }}
            />
          </div>
        </div>
        <p className="text-xl md:text-2`  xl md:pt-0 lg:pt-0  pt-14 flex justify-center items-center text-center dark:text-white px-4 sm:px-6">
          From developers and innovators to thought leaders in the Web3 space, our graduates are transforming the future of technology.
        </p>
      </section><div className="px-4 md:px-8 lg:px-16 py-10">
      <h1 className="flex justify-center items-center text-3xl dark:text-white font-bold">Our Alumni</h1>
      <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center items-center">
        <a href="/OurAlumni" className="w-full md:w-[48%] lg:w-[45%] xl:w-[48%] border shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-4">
            <img src={alumni1} alt="Alumni 1" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </a>
        <a href="" className="w-full md:w-[48%] lg:w-[45%] xl:w-[48%] border shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-4">
            <img src={alumni2} alt="Alumni 2" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </a>
      </div>
    </div>

    </div>
  );
};

export default Alumni;
