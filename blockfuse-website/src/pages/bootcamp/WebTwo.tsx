import { Linkedin } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const WebTwo = () => {

  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [file, setFile] = useState(null);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://dev.basicpayng.com/api/applications/web2', data);
      
      if (response.status === 200) {
        setFormData({});
        setCurrentStep(1);
      } else {
        console.error('Server error:', response.statusText);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit. Please try again later.');
    }

  }

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };  
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const BioForm = ({register, errors}) => (
    <div className="w-full max-w-5xl mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your Bio</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Name (Full name or Alias)
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input type="hidden"
              {...register("application_type")} />
            <input
              type="text"
              {...register('fullname', { required: 'Fulname is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}
          </div>
          <div className="space-y-1">
          <label className="dark:text-white text-lg flex">
            Email
            <span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Invalid email address'
              }
            })}
            className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Gender
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register('gender', { required: 'Gender is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Residential Address
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('lName', { required: 'Residential Address is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.residential_address && <p className="text-red-500">{errors.residential_address.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Country
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('country', { required: 'Country is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.country && <p className="text-red-500">{errors.country.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              State
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('state', { required: 'State is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
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
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^\+?[1-9]\d{1,14}$/,
                  message: 'Invalid phone number'
                }
              })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Github
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="url"
              {...register('github_link', {
                required: 'GitHub profile is required',
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?github\.com\/[A-z0-9_-]+\/?$/,
                  message: 'Invalid GitHub URL'
                }
              })}
              placeholder="https://github.com/username"
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.github_link && <p className="text-red-500">{errors.github_link.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Are you available for full-time study?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register('full_time', { required: 'This field is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.full_time && <p className="text-red-500">{errors.full_time.message}</p>}
          </div>
        </div>

        <div className="flex justify-between items-center mt-8">
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
  );

  const ExperienceForm = ({register, errors}) => (
    <div className="w-full max-w-5xl mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8 rounded-lg">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your experience information</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-7">
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              Do you have any history with programming or writing code?
            </label>
            <input
              type="text"
              {...register('code_experience', { required: 'History is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.code_experience && <p className="text-red-500">{errors.code_experience.message}</p>}
          </div>
         
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              What programming language(s) are you familiar with?
            </label>
            <input
              type="text"
              {...register('programming_language', { required: 'Programming language is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.language && <p className="text-red-500">{errors.programming_language.message}</p>}
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How much time (daily) are you willing to dedicate to this program?
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register('time_dedication', { required: 'Time dedication is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            >
              <option value="">Select time dedication</option>
              <option value="1-2">1-2 hours</option>
              <option value="3-4">3-4 hours</option>
              <option value="5">5+ hours</option>
            </select>
            {errors.time_dedication && <p className="text-red-500">{errors.time_dedication.message}</p>}
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How did you find out about Blockfuse Labs
              <span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register('referral_source', { required: 'Source is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            >
              <option value="">Select source</option>
              <option value="social">Social Media</option>
              <option value="Referral">Referral</option>
              <option value="Advertisement">Advertisement</option>
              <option value="other">Other</option>
            </select>
            {errors.referral_source && <p className="text-red-500">{errors.referral_source.message}</p>}
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
            Submit →
          </button>
        </div>
      </form>
    </div>
  );

  const PaymentForm = () => (
    <div className="w-full max-w-5xl mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8">
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

      <form onSubmit={handleSubmit(onSubmit)}>
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

      {currentStep === 1 && <BioForm register={register} errors={errors} />}
      {currentStep === 2 && <ExperienceForm register={register} errors={errors} />}
      {currentStep === 3 && <PaymentForm />}
    </div>
  );
};

export default WebTwo;