import React from 'react'
import Alumnicohorts from '../components/Alumnicohorts'

const AboutUs = () => {
  return (
  <div className="px-6 h-auto dark:text-white sm:px-8 md:px-16 lg:px-24">
    <div className="flex items-center justify-center min-h-screen relative">
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
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-7xl dark:text-white">
              Welcome to{" "}
              <span className="text-purple-500 font-bold">
                Blockfuselabs
              </span>
            </h1>
          </header>
          <p className="mt-4 text-lg md:text-xl w-full md:w-3/4 mx-auto dark:text-gray-300">
          At Blockfuse Labs, we provide expert training and resources to advance blockchain education.
          Since our founding, Blockfuse Labs has grown into a leading educational platform, trusted by
          developers and enthusiasts alike. Today, we're proud to be driving blockchain education and
          innovation across Africa, helping learners at all levels build their skills and confidence.
          </p>
        </div>
</div>
<Alumnicohorts/>
</div>
 )
}

export default AboutUs