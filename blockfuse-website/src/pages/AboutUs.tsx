import React from 'react'
import Alumnicohorts from '../components/Alumnicohorts'

const AboutUs = () => {
  return (
    <div className="px-6 h-auto dark:text-white sm:px-8 md:px-16 lg:px-24">
      <div className="flex items-center justify-center relative mb-8"> {/* Added margin-bottom */}
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-7xl dark:text-white">
              About {" "}
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-14 mt-14"> {/* Added margin-bottom */}
        {/* Vision Card */}
        <div className="p-8 border border-purple-500 dark:bg-black"> {/* Increased padding */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <h3 className="text-xl font-semibold dark:text-white">
              Vision
            </h3>
          </div>
          <p className="dark:text-gray-300 text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Our Today Card */}
        <div className="p-8 border border-purple-500 dark:bg-black"> {/* Increased padding */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <h3 className="text-xl font-semibold dark:text-white">
              Mission
            </h3>
          </div>
          <p className="dark:text-gray-300 text-m">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      
      <Alumnicohorts />
    </div>
  )
}

export default AboutUs