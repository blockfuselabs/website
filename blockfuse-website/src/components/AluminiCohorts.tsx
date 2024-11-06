import { MoveRight } from "lucide-react";
import React from "react";
import Button from "./Buttons";
const AluminiCohorts = () => {
  return (
    <div>
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        {/* Background Image */}
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
    </div>
  );
};

export default AluminiCohorts;
