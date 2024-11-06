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
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Unlock the Future with{" "}
              <span className="text-purple-500 font-bold">Blockchain</span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              Transform your skills and career with comprehensive
            </p>
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              training designed to lead the digital revolution
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button>
              Explore our bootcamps
              <MoveRight />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AluminiCohorts;
