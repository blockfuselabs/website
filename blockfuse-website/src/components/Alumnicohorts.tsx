import React from "react";
import Box1 from "../assets/svgs/box1.svg";
import Imageone from "../assets/images/Frame-10-1.png";

const Alumnicohorts = () => {
  return (
    <div>
      <section
        className="space-y-5 h-auto px-4 py-10 sm:px-6 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
       
        <p className="dark:text-gray-300 text-xl pl-14 pb-10 md:pb-0 lg:pb-0 leading-[26px] font-light sm:w-[90%] md:w-[700px] mx-auto text-center md:text-left md:ml-[290px]">
          As we look to the future, we're committed to expanding our impact,adapting to new technological trends and continously enhancing our programs to meet the needs of a rapidly changing industry.
        </p>
        
        {/* Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="flex justify-center">
              <img src={Imageone} alt="Main Image" className="relative z-10 w-[90%] sm:w-full md:w-full" />
            </div>
            <img
              src={Box1}
              alt="Secondary Image"
              className="absolute top-0 left-0 z-0 h-[250px] sm:h-[350px] md:h-[450px]"
              style={{ transform: "translate(-20%, -20%)" }}
            />
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-xl md:text-2`  xl md:pt-0 lg:pt-0  pt-14 flex justify-center items-center text-center dark:text-white px-4 sm:px-6">
          We provide comprehensive training programs, bridging the gap between beginner enthusiasts and seasoned developers.Our approach goes beyond traditional education, focusing on hands-on learning,mentorship and a community-driven environment that inspires growth.
        </p>
      </section>
    </div>
  );
};

export default Alumnicohorts;
