import axios from "axios";
import Logo from "../assets/images/blockfuse-logo.png";
import Circles from "../assets/svgs/circles.svg";
import Buttons from "../components/Buttons";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        "https://dev.basicpayng.com/api/contact-us",
        data
      );

      if (response.status == 200 || response.status == 201) {
        reset();
        toast.success("Your message has been sent successfully.");
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      toast.error("Failed to send message");
      console.log(error);
    }
  };

  const ContactForm = ({ register, errors }) => (
    <div className="w-full  px-8">
      <form className="space-y-10 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <label
            htmlFor="name"
            className="block text-sm text-gray-600 dark:text-gray-300 py-2"
          >
            Full Name
          </label>
          <input
            type="text"
            {...register('name', {required: 'Name is required'})}
            className="w-full p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm text-gray-600 dark:text-gray-300  py-2"
          >
            Email
          </label>
          <input
            type="email"
            {...register('email', {required: 'Email is required'})}
            className="w-full p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="subject"
            className="block text-sm text-gray-600 dark:text-gray-300 py-2"
          >
            Subject
          </label>
          <input
            type="text"
            {...register('subject', {required: 'Subject is required'})}
            className="w-full p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
            required
          />
        </div>

        <div className="w-full">
          <label
            htmlFor="message"
            className="block text-sm text-gray-600 dark:text-gray-300  py-2"
          >
            Message
          </label>
          <textarea
            {...register('message', {required: 'Message is required'})}
            className="w-full p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100 h-32"
            required
          />
        </div>
        <button
          type="submit"
          className="w-2/3 flex items-center justify-center mx-auto bg-gradient-to-r from-purple-600 to-purple-400  hover:from-purple-700 hover:to-purple-500  text-white py-3 px-6"
        >
          Submit →
        </button>
      </form>
    </div>
  );

  return (
    <div className="h-full py-32 flex flex-col items-center justify-center px-4  relative">
      <ToastContainer />
      <div className="relative text-center z-10">
        <header>
          <h1 className="text-5xl md:text-5xl dark:text-white">
            Contact{" "}
            <span className="text-purple-500 font-bold">Blockfuse Labs</span>
          </h1>
        </header>
      </div>
      <div className="relative flex items-center justify-center mb-2 mt-10 ml-40">
        <div className="absolute -left-64 z-0 dark:bg-[#1A1A1A] bg-gray-100 w-[330px] h-[80%] border border-purple-500 flex flex-col items-center justify-center space-y-10 p-10">
          <h1 className="text-2x1 md:text-2xl dark:text-white mr-14">
            Contact Info
          </h1>

          {/* Centered Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Blockfuse Logo" className="w-20 mr-14" />
          </div>

          {/* Address and Phone Number */}
          <div className="flex flex-col items-start w-full dark:text-white">
            <h3 className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-semibold">Address:</span>
              <p>Blockfuse Labs, Rhomat Plaza Rayfield,Jos.</p>
            </h3>

            <h3 className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-semibold">Phone:</span>
              <p><a href="tel:+2348025463838">+234-802-546-3838</a></p>
            </h3>

            <h3 className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              <span className="font-semibold">E-mail:</span>
              <p><a href="mailto:support@blockfuselabs.com">support@blockfuselabs.com</a></p>
            </h3>
          </div>
        </div>

        <div className="relative z-10 dark:bg-[#1A1A1A] bg-gray-100 border border-purple-500 w-[890px] h-[700px] shadow-lg flex flex-col justify-center items-center space-y-7">
          {/* Contact Form */}
          <ContactForm register={register} errors={errors} />
        </div>
      </div>

      <div className="flex flex-col items-center p-8 dark:text-white  rounded-lg shadow-md space-y-8">
        {/* Join the Next Cohort */}
        <div className="text-center w-full md:w-2/3 py-10">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Join the next cohort
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Step into the future of blockchain with Blockfuse Labs! Our upcoming
            cohort offers hands-on training, expert mentorship,and a vibrant
            community to help you build and thrive in Web3. Secure your spot and
            start your journey today!
          </p>

          <a href="/bootcamp/"><Buttons
            type="submit"
            className="w-2/2 flex items-center justify-center mx-auto bg-gradient-to-r from-purple-600 to-purple-400  hover:from-purple-700 hover:to-purple-500  text-white py-3 px-6"
          >
            Apply Now →
          </Buttons>
          </a>
        </div>

        {/* Newsletter Subscription */}
        <div className=" md:w-2/3 text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Stay ahead in the world of blockchain! Get the latest updates,
            insights, and exclusive resources from Blockfuse Labs delivered
            straight to your inbox. Don’t miss out—subscribe today!
          </p>
          <form className="flex flex-col items-center space-y-4">
            <input
              type="email"
              placeholder="Enter your Email here"
              className=" md:w-2/3 p-2 border border-purple-300 dark:bg-gray-700 dark:border-purple-500 dark:text-gray-100"
              required
            />
            <Buttons
              type="submit"
              className="w-2/2 flex items-center justify-center mx-auto bg-gradient-to-r from-purple-600 to-purple-400  hover:from-purple-700 hover:to-purple-500  text-white py-3 px-6"
            >
              Subscribe →
            </Buttons>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
