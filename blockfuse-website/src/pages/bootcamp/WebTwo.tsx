import React from 'react'

const WebTwo = () => {
  return (
    <div className="white:text-black px-6 py-36 h-full sm:px-8 md:px-16 lg:px-24">
      <div className="flex flex-col items-center text-center dark:text-white py-10 px-4">
        <h1 className="text-3xl font-bold">
          Apply to the <span className="text-purple-500">web2 bootcamp</span>
        </h1>

        <p className="text-2xl font-semibold">
          Cohort 2 commences on-
        </p>
        <p className="text-5xl font-bold mb-4 dark:text-white">
          02.Jan.2024
        </p>

        <p className="text-sm leading-relaxed max-w-xl mx-auto">
          Welcome to the WEB2 FOR WEB3 DEVELOPERS PREPARATORY BOOTCAMP application form. This bootcamp is designed to take you from a complete beginner with no coding experience to being a developer that is well-prepared to dive into blockchain programming bootcamp.
        </p>
      </div>

        <div className="max-w-5xl w-full bg-[#4b0000] p-4 rounded-md text-center text-sm text-red-400 space-y-1">
        <p>* This bootcamp is not free; the program fee is <span className="text-red-500 font-bold">₦50,000 (NON-REFUNDABLE)</span>.</p>
        <p>* The payment is required to secure your spot in the bootcamp.</p>
        <p>* The bootcamp duration is 5 months.</p>
      </div>

      <div className='max-w-5xl text-white w-full bg-[#1d1d1d] p-8 mt-4 rounded-md'>
        <h2 className="text-2xl font-medium mb-6 text-center">Fill the form to complete your application</h2>
        <form action="">
          <div className='flex gap-20 text-center'>
            <div className='text-left'>
              <label htmlFor="firstName">First name</label> <br />
              <input type="text" id="firstName" name="firstName" className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required />
            </div>
            <div className='text-left'>
              <label htmlFor="lastName">Last name</label><br />
              <input type="text" id='lastName' name='lastName' className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
            <div className='text-left'>
              <label htmlFor="phoneNumber">Phone number</label><br />
              <input type="tel" className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
          </div>

          <div className='flex gap-20 text-center'>
            <div className='text-left'>
              <label htmlFor="email">Email Address</label> <br />
              <input type="email" id="email" name="email" className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required />
            </div>
            <div className='text-left'>
              <label htmlFor="country">Country</label><br />
              <input type="text" id='country' name='country' className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
            <div className='text-left'>
              <label htmlFor="state">State</label><br />
              <input type="text" id='state' name='state' className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
          </div>
          <div className='flex gap-20 text-center'>
            <div className='text-left'>
              <label htmlFor="firstName">Gender</label> <br />
              <input type="text" id="gender" name="gender" className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required />
            </div>
            <div className='text-left'>
              <label htmlFor="lastName">LinkedIn</label><br />
              <input type="text" id='linkedin' name='linkedin' className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
            <div className='text-left'>
              <label htmlFor="phoneNumber">Are you available in full time</label><br />
              <input type="text" className='w-full bg-[#2b2b2b] border border-[#4e2ef5] text-sm p-1 rounded-md outline-none focus:ring-2 focus:ring-[#4e2ef5]' required/>
            </div>
          </div>
          <button className="text-white text-left py-2 px-4 bg-gradient-to-r from-[#bf64e7] to-[#4e2ef5] rounded mt-8 font-normal">
            Continue →
          </button>
        </form>
      </div>

    </div>
  )
}

export default WebTwo