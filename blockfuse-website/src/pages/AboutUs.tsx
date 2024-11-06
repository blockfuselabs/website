import React from 'react'
import Alumnicohorts from '../components/Alumnicohorts'

const AboutUs = () => {
  return (
  <div className="px-6 py-10 h-auto dark:text-white sm:px-8 md:px-16 lg:px-24">
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
  {/* Text Content */}
  <div className="text-center max-w-2xl p-6 relative z-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 whitespace-nowrap">
          Welcome to <span className="text-purple-500">Blockchain</span>
        </h1>

        {/* Paragraphs */}
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          At Blockfuse Labs, we provide expert training and resources to advance blockchain education.
        </p>
        <p className="text-lg md:text-xl lg:text-2xl">
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