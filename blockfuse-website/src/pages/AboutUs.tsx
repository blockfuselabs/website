import React from 'react'

const AboutUs = () => {
  return (
  <div className="px-6 py-10 h-auto dark:text-white sm:px-8 md:px-16 lg:px-24">
    <div className="flex items-center justify-center min-h-screen relative">
  {/* Background Gradient Circle */}
  <div className="absolute w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 blur-2xl"></div>

  {/* Text Content */}
  <div className="text-center max-w-md p-6 relative z-10">
    <h1 className="text-4xl dark:text-white mb-4">
    Welcome to <span className="text-purple-600 font-bold">Blockchain </span>
    </h1>
    <p className="dark:text-white text-sm mb-4">
      At Blockfuse Labs, we provide expert training and resources to advance blockchain education.
    </p>
    <p className="dark:text-white text-sm">
      Since our founding, Blockfuse Labs has grown into a leading educational platform, trusted by
      developers and enthusiasts alike. Today, we’re proud to be driving blockchain education and
      innovation across Africa, helping learners at all levels build their skills and confidence.
    </p>
  </div>
</div>
</div>

  )
}

export default AboutUs