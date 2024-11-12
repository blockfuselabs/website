import { Linkedin } from 'lucide-react';
import React, { useState } from 'react';

const WebTwo = () => {

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    linkedIn: '',
    gender: '',
    time: '',
    fullTime: '',
    history: '',
    language: '',
    source: '',

  });

  
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);
  
  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log("File to be submitted:", file);
    } else {
      alert("Please upload a receipt.");
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const BioForm = () => (
    <>
    <div className="w-[1200px] bg-gray-200 dark:bg-[#1d1d1d] border border-purple-500 p-4 text-center text-xl text-red-500 space-y-1 mb-8">
        <p>* This bootcamp is not free; the program fee is <span className="text-red-500 font-bold">₦50,000 (NON-REFUNDABLE)</span>.</p>
        <p>* The payment is required to secure your spot in the bootcamp.</p>
        <p>* The bootcamp duration is 5 months.</p>
      </div>
    <div className="w-[1200px] mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your Bio</h3>
      
      <form className="space-y-7">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              First name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text"
              name='fName'
              value={formData.fName} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)}  required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Last name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='lName'
              value={formData.lName}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)}  required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Email
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="email" 
              name='email'
              value={formData.email}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Gender
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='gender'
              value={formData.gender}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Country
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text"
              name='country'
              value={formData.country} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              State
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='state'
              value={formData.state}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Phone number
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="tel"
              name='phone'
              value={formData.phone}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              LinkedIn
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='linkedIn'
              value={formData.linkedIn}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Are you available for full time study?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text"
              name='fullTime'
              value={formData.fullTime}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required />
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <div></div>
          <p className="dark:text-gray-400 text-lg">Page 1 of 3</p>
          <button
            type="button"
            onClick={nextStep}
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Continue →
          </button>
        </div>
      </form>
    </div>
    </>
  );

  const ExperienceForm = () => (
    <div className="w-[1200px] mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8 rounded-lg">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your experience information</h3>
      
      <form className="space-y-6">
        <div className="space-y-7">
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              Do you have any history with programming or writing code?
            </label>
            <input 
              type="text"
              name='history'
              value={formData.history}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              What programming language(s) are you familiar with?
            </label>
            <input 
              type="text"
              name='language'
              value={formData.language}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)} />
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How much time (daily) are you willing to dedicate to this program?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select 
              name='time'
              value={formData.time}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)}>
              <option>1-2 hours</option>
              <option>3-4 hours</option>
              <option>5+ hours</option>
            </select>
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How did you find out about Blockfuse Labs
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select 
              name='source'
              value={formData.source}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)}>
              <option>Social Media</option>
              <option>Referral</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={prevStep}
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Previous
          </button>
          <p className="dark:text-gray-400 text-lg">Page 2 of 3</p>
          <button
            type="button"
            onClick={nextStep}
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Proceed to payment →
          </button>
        </div>
      </form>
    </div>
  );

  const PaymentForm = () => (
    <div className="w-[1200px] mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8">
      <h2 className="text-2xl dark:text-white text-center mb-8">Use the following details to make payment</h2>
      
      <div className="space-y-4 text-center dark:text-white mb-8">
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

      <form onSubmit={handleSubmit}>
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
            onClick={prevStep}
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Previous
          </button>
          <p className="dark:text-gray-400 text-lg">Page 3 of 3</p>
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Submit Receipt →
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center">
      <div className="flex flex-col items-center text-center dark:text-white mb-8">
        <header>
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Apply to the{" "}
              <span className="text-purple-500 font-bold">Web2 Bootcamp</span>
            </h1>
          </header>
        <p className="text-2xl font-semibold mt-4">
          Cohort 2 commences on-
        </p>
        <p className="text-5xl font-bold mb-4">
          02.Jan.2024
        </p>
        <p className="text-xl max-w-4xl">
          Welcome to the WEB2 FOR WEB3 DEVELOPERS PREPARATORY BOOTCAMP application form. This bootcamp is designed to take you from a complete beginner with no coding experience to being a developer that is well-prepared to dive into blockchain programming bootcamp.
        </p>
      </div>

      {currentStep === 1 && <BioForm />}
      {currentStep === 2 && <ExperienceForm />}
      {currentStep === 3 && <PaymentForm />}
    </div>
  );
};

export default WebTwo;