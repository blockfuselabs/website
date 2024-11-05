

import React from 'react';

const NewsLetters = () => {
  return (
    <div className='lg:max-w-[816px] pb-10 mt-32 w-full flex flex-col justify-center mx-auto gap-20 items-center px-4'>
      <h2 className='text-4xl leading-tight font-semibold text-center dark:text-white'>Subscribe to Our Newsletter</h2>
      <p className='text-xl leading-relaxed text-center dark:text-white'>
        Stay ahead in the world of blockchain! Get the latest updates, insights, and exclusive resources from Blockfuse Labs delivered straight to your inbox. Don’t miss out—subscribe today!
      </p>
      <div className='flex flex-col gap-4 w-full max-w-[816px]'>
        <input 
          type="email" 
          placeholder='Enter your Email here' 
          className='placeholder:text-center border h-16 border-primary-100 w-full px-3' 
        />
        <button className='bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500  h-16 text-white w-full'>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetters;
