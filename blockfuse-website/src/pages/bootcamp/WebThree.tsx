import React, { useState } from 'react';
<<<<<<< HEAD
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const WebThree = () => {

  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  const { register, handleSubmit,reset, formState: { errors } } = useForm({
    defaultValues: {
      application_type: "web3"
    }
  
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true); 
    setSubmissionError(null);

    try {
      const response = await axios.post('https://dev.basicpayng.com/api/applications/web3', data);

      if (response.status === 200 || response.status === 201) {
        setFormData({});
        reset();
        toast.success('Apllication successful!');
        setCurrentStep(1);
      } else {
        console.error('Server error:', response.statusText);
        toast.error('Application was not submitted!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to submit application. Please try again!');
    }
  };
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
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
              {...register('fullname', { required: 'Fullname is required' })}
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
              {...register('gender', { required: 'gender is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
=======
import axios from 'axios';

const WebTwo = () => {

  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    github: '',
    gender: '',
    time: '',
    fullTime: '',
    history: '',
    language: '',
    source: '',

  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post('https://example.com/api/submitForm', formData);
    //   alert('Form submitted successfully:', response.data);
    //   // Handle success (e.g., clear form, show a success message)
    // } catch (error) {
    //   alert('Error submitting form:', error.response ? error.response.data : error.message);
    //   // Handle errors (e.g., show error message)
    // }
  
  };


  const BioForm = () => (
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
            <input type="text" name='lName' value={formData.lName} className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" required />
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
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white "
              onChange={(e) => handleChange(e.target.name, e.target.value)} required
            />
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
<<<<<<< HEAD
              Residential Address
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('residential_address', { required: 'Residential Address is required' })}
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
=======
              Gender
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='gender' 
              value={formData.gender} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
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
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
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
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
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
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
          </div>
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              Github
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input 
              type="text" 
              name='github' 
              value={formData.github} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" 
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
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
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
          </div>
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
        </div>

        <div className="flex justify-between items-center mt-8">
          <p className="dark:text-gray-400 text-lg">Page 1 of 2</p>
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

<<<<<<< HEAD
  const ExperienceForm = ({register, errors}) => (
    <div className="w-full max-w-5xl mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8 rounded-lg">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your experience information</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
=======
  const ExperienceForm = () => (
    <div className="w-[1200px] mx-auto dark:bg-[#1d1d1d] border border-purple-500 p-8 rounded-lg">
      <h2 className="text-2xl dark:text-white text-center mb-8">Fill the form to complete your application</h2>
      <h3 className="text-xl dark:text-white text-center mb-6">Complete your experience information</h3>
      
      <form className="space-y-6">
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
        <div className="space-y-7">
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              Do you have any history with programming or writing code?
            </label>
<<<<<<< HEAD
            <input
              type="text"
              {...register('code_experience', { required: 'Programming History is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.code_experience && <p className="text-red-500">{errors.code_experience.message}</p>}
          </div>
         
=======
            <input 
              type="text" 
              name='history' 
              value={formData.history} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
              onChange={(e) => handleChange(e.target.name, e.target.value)} required 
            />
          </div>
          
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
          <div className="space-y-1">
            <label className="dark:text-white text-lg">
              What programming language(s) are you familiar with?
            </label>
<<<<<<< HEAD
            <input
              type="text"
              {...register('programming_language', { required: 'Programming language is required' })}
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white"
            />
            {errors.language && <p className="text-red-500">{errors.programming_language.message}</p>}
=======
            <input 
              type="text" 
              name='language' 
              value={formData.language} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white" required 
            />
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How much time (daily) are you willing to dedicate to this program?
              <span className="text-red-500 ml-1">*</span>
            </label>
<<<<<<< HEAD
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
=======
            <select 
              name='time' 
              value={formData.time} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white">
              <option>1-2 hours</option>
              <option>3-4 hours</option>
              <option>5+ hours</option>
            </select>
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
          </div>
          
          <div className="space-y-1">
            <label className="dark:text-white text-lg flex">
              How did you find out about Blockfuse Labs
              <span className="text-red-500 ml-1">*</span>
            </label>
<<<<<<< HEAD
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
=======
            <select 
              name='source' 
              value={formData.source} 
              className="w-full dark:bg-[#2b2b2b] border border-purple-500 rounded p-2 dark:text-white">
              <option>Social Media</option>
              <option>Referral</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
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
          <p className="dark:text-gray-400 text-lg">Page 2 of 2</p>
          <button
            type="submit"
<<<<<<< HEAD
=======
            onClick={handleSubmit}
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
            className="bg-purple-600 text-white px-6 py-2 hover:bg-purple-700"
          >
            Submit →
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center">
<<<<<<< HEAD
      <ToastContainer />
=======
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
      <div className="flex flex-col items-center text-center dark:text-white mb-8">
        <header>
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Apply to the{" "}
              <span className="text-purple-500 font-bold">Web3 Bootcamp</span>
            </h1>
          </header>
        <p className="text-2xl font-semibold mt-4">
          Cohort 2 commences on-
        </p>
        <p className="text-5xl font-bold mb-4">
          02.Jan.2024
        </p>
        <p className="text-xl max-w-4xl">
          Welcome to the WEB3 DEVELOPERS BOOTCAMP application form. This bootcamp is designed to take you from a Web2 developer with coding experienced that is well-prepared to dive into blockchain programming bootcamp.
        </p>
      </div>

<<<<<<< HEAD
      {currentStep === 1 && <BioForm register={register} errors={errors}/>}
      {currentStep === 2 && <ExperienceForm register={register} errors={errors} />}
=======
      {currentStep === 1 && <BioForm />}
      {currentStep === 2 && <ExperienceForm />}
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
    </div>
  );
};

<<<<<<< HEAD
export default WebThree;
=======
export default WebTwo;
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
