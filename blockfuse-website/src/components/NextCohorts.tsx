

import React from 'react';
import { GoArrowRight } from "react-icons/go";

const NextCohorts = () => {
  return (
    <div className='max-w-[1240px] mt-32 w-full h-auto flex flex-col gap-12 justify-center items-center p-4'>
      <h1 className='text-4xl leading-tight font-medium text-center dark:text-white'>Join the next cohort</h1>
      <p className='text-xl leading-relaxed text-center dark:text-white'>
        Step into the future of blockchain with Blockfuse Labs! Our upcoming cohort offers hands-on training, expert mentorship, and a vibrant community to help you build and thrive in Web3. Secure your spot and start your journey today!
      </p>
      <div className='w-full max-w-[245px] flex flex-col gap-5'>
        <h3 className='font-medium text-xl leading-6 text-center dark:text-white'>Start Your Journey Today</h3>
        <button className='border bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 flex justify-center items-center gap-1 text-white py-2 cursor-pointer text-xl w-full'>
          Apply now <GoArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default NextCohorts;
