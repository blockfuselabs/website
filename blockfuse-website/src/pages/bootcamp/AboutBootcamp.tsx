import React from 'react';
import BootcampCard from '/src/components/BootcampCards'

const AboutBootcamp = () => {
  return (
    <div className="dark:text-white text-center px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        <div className='w-[1040px] flex flex-col justify-center items-center h-auto absolute mb-16'>
            <h1 className='h-[178px] font-space-grotesk text-[70px] font-normal leading-[89.32px] text-center'>Where Future <span className='font-space-grotesk text-[70px] font-bold leading-[89.32px] text-center'>Blockchain</span> Leaders Are Made</h1>
            <p className='w-[819px] h-[114px] font-space-grotesk text-[30px] ml-[100px] font-light leading-[38.28px] text-center'>Unlock the skills to lead in Web2 and Web3 development through hands-on training, mentorship, and real-world projects.</p>
        </div>

        <div className='mt-[310px]'>
            <BootcampCard/>
        </div>
    </div>
  )
}

export default AboutBootcamp
