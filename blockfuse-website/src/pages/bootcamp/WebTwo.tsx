import React,{useState}  from 'react';

const WebTwo = () => {

    const [file, setFile] = useState(null);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (file) {
        console.log("File to be submitted:", file);
        // Add your file submission logic here (e.g., upload to server)
      } else {
        alert("Please upload a receipt.");
      }
    };
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

      <div className='max-w-5xl text-white text-center w-full bg-[#1d1d1d] p-8 mt-4 rounded-md'>
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


      <div className="w-full max-w-5xl min-h-screen mt-8 items-center text-gray-300  p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Fill the form to complete your application</h2>
        <h3 className="text-center text-xl font-medium mb-8">Complete your experience information</h3>

        <form className="space-y-6">
          <div>
              <label className="block text-sm mb-1">Do you have any history with programming or writing code?</label>
              <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Describe your experience"
              />
          </div>

          <div>
              <label className="block text-sm mb-1">What programming language(s) are you familiar with?</label>
              <input
              type="text"
              className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="List programming languages"
              />
          </div>

          <div>
              <label className="block text-sm mb-1">How much time (daily) are you willing to dedicate to this program?</label>
              <select
              className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
              <option>Two-to-Three hours</option>
              <option>Two-to-Five hours</option>
              <option>five-to-Ten hours</option>
              <option>Totally commited</option>
              </select>
          </div>

          <div>
              <label className="block text-sm mb-1">How did you find out about Blockfuse Labs?</label>
              <select
              className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
              <option>Select one or more options</option>
              </select>
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
            type="button"
            className="text-sm text-gray-400 hover:text-gray-300"
            >
            Previous
            </button>
            <p className="text-sm text-gray-400">Page 2 of 3</p>
            <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
            Proceed to payment
            </button>
          </div>
        </form>
      </div>
      

      <div className="w-full max-w-5xl text-gray-300  items-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-6">Use the following details to make payment</h2>

        <div className="space-y-4 text-center">
          <p className="text-lg">
            Account Name: <span className="font-bold">BLOCKFUSE LABS LTD</span>
          </p>
          <p className="text-lg">
            Account Number: <span className="font-bold">9064240437</span>
          </p>
          <p className="text-lg">
            Bank Name: <span className="font-bold">Moniepoint MFB</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="p-6 bg-gray-700 border border-purple-500 rounded-lg text-center">
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-4xl text-purple-500 mb-4">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <p>Drag your file(s) or <span className="text-purple-400 underline">browse</span></p>
              <p className="text-sm text-gray-400">Max 10 MB files are allowed</p>
              <p className="text-sm text-gray-400">JPEG, PNG</p>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/jpeg, image/png"
              className="hidden"
              onChange={handleFileChange}
            />
            {file && <p className="text-sm text-green-500 mt-2">{file.name}</p>}
          </div>

          <div className="flex justify-between items-center mt-8">
            <button
              type="button"
              className="text-sm text-gray-400 hover:text-gray-300"
              onClick={() => alert('Navigate to previous page')}
            >
              Previous
            </button>
            <p className="text-sm text-gray-400">Page 3 of 3</p>
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
            >
              Submit Receipt
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default WebTwo