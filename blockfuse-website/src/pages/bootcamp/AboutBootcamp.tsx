import React from 'react';
import BootcampCard from '/src/components/BootcampCards'

const AboutBootcamp = () => {
  return (
    <div className="dark:text-white text-center min-h-screen px-6 py-20 sm:px-8 md:px-16 lg:px-24">
        <div className='relative flex items-center justify-center mb-20 h-auto px-6 py-32 sm:px-8 md:px-16 lg:px-24'>

            <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
            <img
                src="/src/assets/svgs/circles.svg"
                alt="Background illustration representing blockchain technology"
                width="300"
                height="200"
                loading="lazy"
                className="w-full h-auto max-w-[500px]"
            />
            </div>
            <div className='w-[1040px] flex flex-col justify-center items-center h-auto absolute'>
                <h1 className='h-[178px] font-space-grotesk text-[70px] font-normal leading-[89.32px] text-center'>Where Future <span className='font-space-grotesk text-[70px] font-bold leading-[89.32px] text-center'>Blockchain</span> Leaders Are Made</h1>
                <p className='w-[819px] h-[114px] font-space-grotesk text-[30px] ml-[100px] font-light leading-[38.28px] text-center'>Unlock the skills to lead in Web2 and Web3 development through hands-on training, mentorship, and real-world projects.</p>
            </div>
        </div>

        <div className='mt-[010px]'>
            <BootcampCard/>
        </div>
    </div>
  )
}

export default AboutBootcamp
