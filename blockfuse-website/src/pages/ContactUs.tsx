import axios from "axios";
import Logo from "../assets/images/blockfuse-logo.png";
import Buttons from "../components/Buttons";
import BaseUrl from "../../services/http";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await BaseUrl.httpPostContactUs(data);
      if (response.status === 200 || response.status === 201) {
        reset();
        toast.success("Your message has been sent successfully.");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Blockfuse Labs to learn more about our blockchain projects, partnerships, and open-source initiatives. We’re here to answer your questions and discuss collaboration opportunities."
        />
        <meta property="og:title" content="Contact Blockfuse Labs" />
        <meta
          property="og:description"
          content="Reach out to Blockfuse Labs to connect with our team. Whether you have questions, feedback, or partnership ideas, we’d love to hear from you!"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="h-full flex flex-col items-center justify-center px-4 py-32 relative">
        <ToastContainer />

        {/* Preloader */}
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="loader bg-white p-5 rounded-full flex space-x-3">
              <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce delay-200"></div>
              <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce delay-400"></div>
            </div>
          </div>
        )}

        {/* Page Header */}
        <div className="text-center z-10">
          <header>
            <h1 className="text-4xl sm:text-5xl dark:text-white">
              Contact{" "}
              <span className="text-purple-500 font-bold">Blockfuse Labs</span>
            </h1>
          </header>
        </div>

        {/* Main Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mb-10 mt-10 gap-10">
          {/* Contact Info Section - Shown on top in mobile view */}
          <div className="block md:hidden dark:bg-[#1A1A1A] bg-gray-100 w-full border border-purple-500 p-6 mb-10 md:mb-0 space-y-6">
            <h1 className="text-xl md:text-2xl dark:text-white text-center">
              Contact Info
            </h1>
            <div className="flex justify-center">
              <img src={Logo} alt="Blockfuse Logo" className="w-16 md:w-20" />
            </div>
            <div className="flex flex-col text-center dark:text-white space-y-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Address:</span>
                <p>Blockfuse Labs, Rhomat Plaza Rayfield, Jos</p>
              </h3>
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Phone:</span>
                <p>
                  <a href="tel:+2348025463838">+234-802-546-3838</a>
                </p>
              </h3>
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">E-mail:</span>
                <p>
                  <a href="mailto:support@blockfuselabs.com">
                    support@blockfuselabs.com
                  </a>
                </p>
              </h3>
            </div>
          </div>

          {/* Contact Info Section - Hidden in mobile view */}
          <div className="hidden md:block absolute -left-[32%] z-1 dark:bg-[#1A1A1A] bg-gray-100 w-full md:w-[330px] border border-purple-500 p-6 md:p-10 mb-10 md:mb-0 space-y-6">
            <h1 className="text-xl md:text-2xl dark:text-white text-center">
              Contact Info
            </h1>
            <div className="flex justify-center">
              <img src={Logo} alt="Blockfuse Logo" className="w-16 md:w-20" />
            </div>
            <div className="flex flex-col text-center md:text-left dark:text-white space-y-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Address:</span>
                <p>Blockfuse Labs, Rhomat Plaza Rayfield, Jos</p>
              </h3>
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Phone:</span>
                <p>
                  <a href="tel:+2348025463838">+234-802-546-3838</a>
                </p>
              </h3>
              <h3 className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-semibold">E-mail:</span>
                <p>
                  <a href="mailto:support@blockfuselabs.com">
                    support@blockfuselabs.com
                  </a>
                </p>
              </h3>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="dark:bg-[#1A1A1A] z-20 bg-gray-100 border border-purple-500 w-full md:w-[600px] lg:w-[890px] shadow-lg flex flex-col justify-center items-center p-6 space-y-7">
            <form
              className="w-full space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 py-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name should contain only letters",
                    },
                  })}
                  className="w-full p-3 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
                  placeholder="Your full name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 py-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="w-full p-3 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
                  placeholder="Your email address"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 py-2">
                  Subject
                </label>
                <input
                  type="text"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 3,
                      message: "Subject should be at least 3 characters long",
                    },
                  })}
                  className="w-full p-3 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
                  placeholder="Message subject"
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm text-gray-600 dark:text-gray-300 py-2">
                  Message
                </label>
                <textarea
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters long",
                    },
                  })}
                  className="w-full p-3 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100 h-32"
                  placeholder="Your message"
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full md:w-2/3 bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 px-6 mx-auto"
                  disabled={isLoading}
                >
                  Submit →
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Newsletter and Cohort Section */}
        <div className="flex flex-col items-center p-8 dark:text-white space-y-8">
          <div className="text-center w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Join the Next Cohort
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Step into the future of blockchain with Blockfuse Labs! Our
              upcoming cohort offers hands-on training, expert mentorship, and a
              vibrant community. Secure your spot today!
            </p>
            <a href="/bootcamp/">
              <Buttons className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 px-6">
                Apply Now →
              </Buttons>
            </a>
          </div>
          <div className="text-center w-full md:w-2/3">
            <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Stay ahead in the world of blockchain! Subscribe for updates.
            </p>
            <form className="flex flex-col items-center space-y-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full md:w-2/3 p-3 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
                required
              />
              <Buttons className="bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white py-3 px-6">
                Subscribe →
              </Buttons>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
