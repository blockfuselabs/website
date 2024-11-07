import React from 'react';
import BootcampCard from '/src/components/BootcampCards';

const AboutBootcamp = () => {
  return (
    <div className="dark:text-white px-6 py-36 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
      <div className="w-full max-w-[1040px] h-auto mb-16 text-center">
        <h1 className="font-space-grotesk text-[70px] font-normal leading-[89.32px]">
          Where Future <span className="font-bold">Blockchain</span> Leaders Are Made
        </h1>
        <p className="w-full max-w-[819px] mx-auto font-space-grotesk text-[30px] font-light leading-[38.28px]">
          Unlock the skills to lead in Web2 and Web3 development through hands-on training, mentorship, and real-world projects.
        </p>
      </div>

      <div className=" w-full flex justify-center">
        <BootcampCard />
      </div>
    </div>
  );
};

export default AboutBootcamp;
