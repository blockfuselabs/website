import React from 'react';
import alumni1 from "../assets/images/alumni.png";
import alumni2 from "../assets/images/alumni1.png";

const OurAlumni = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
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
  );
};

export default OurAlumni;
