import React from 'react'

const ContactUs = () => {
  return (
 <div className="px-6 h-full sm:px-8 md:px-16 lg:px-24">
  <div className="flex flex-col md:flex-row gap-8 p-6 dark:text-white  rounded-lg shadow-md">
  {/* Contact Info */}
  <div className="flex flex-col items-start p-4 dark:text-white rounded-md">
    <div className="flex items-center mb-4">
      <div className="bg-purple-500 p-2 rounded-full">
        {/* Placeholder for Logo */}
        <span className="text-white font-bold">Logo here</span>
      </div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
      <span className="font-semibold">Address:</span> Rhomat plaza jos
    </p>
    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
      <span className="font-semibold">Phone:</span> +234 -000-000-000
    </p>
    {/* Social Media Icons */}
    <div className="flex space-x-4 text-purple-500 dark:text-purple-400">
      {/* Placeholder for icons */}
      <span>🔗</span>
      <span>🔗</span>
      <span>🔗</span>
      <span>🔗</span>
    </div>
  </div>

  {/* Contact Form */}
  <div className="w-full md:w-2/3">
        <form className="space-y-4">
      <div>
        <label htmlFor="lastName" className="text-sm text-gray-600 dark:text-gray-300">Name</label>
        <input type="text" id="lastName" className="w-full p-2 border border-purple-300  dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100" required />
      </div>
      <div>
        <label htmlFor="email" className="text-sm text-gray-600 dark:text-gray-300">Email</label>
        <input type="email" id="email" className="w-full p-2 border border-purple-300  dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100" required />
      </div>
      <div>
        <label htmlFor="country" className="text-sm text-gray-600 dark:text-gray-300">Message</label>
        <input type="text" id="country" className="w-full p-2 border border-purple-300  dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100" required />
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold  dark:from-purple-700 dark:to-pink-700">
        Submit →
      </button>
    </form>
  </div>
  </div>

  

<div className="flex flex-col items-center p-8 dark:text-white  rounded-lg shadow-md space-y-8">
  {/* Join the Next Cohort */}
  <div className="text-center">
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Join the next cohort</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      Step into the future of blockchain with Blockfuse Labs! Our upcoming cohort offers hands-on training, expert mentorship, and a vibrant community to help you build and thrive in Web3. Secure your spot and start your journey today!
    </p>
    <button className="py-2 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold  dark:from-purple-700 dark:to-pink-700">
      Apply now →
    </button>
  </div>

  {/* Newsletter Subscription */}
  <div className="w-full md:w-2/3 text-center" >
    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Subscribe to Our Newsletter</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      Stay ahead in the world of blockchain! Get the latest updates, insights, and exclusive resources from Blockfuse Labs delivered straight to your inbox. Don’t miss out—subscribe today!
    </p>
    <form className="flex flex-col items-center space-y-4">
      <input type="email" placeholder="Enter your Email here" className="w-full p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100" required />
      <button type="submit" className="py-2 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold dark:from-purple-700 dark:to-pink-700">
        Subscribe
      </button>
    </form>
  </div>
</div>

      </div>
  )
}

export default ContactUs