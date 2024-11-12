import React, { useState } from "react";
import Button from "../components/Buttons";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Imageone from "../assets/images/Frame-10.png";
import Box1 from "../assets/svgs/box1.svg";
import BootcampCard from "../components/BootcampCards";
import  Frameone from "../assets/svgs/Frame-3704.svg";
import Frametwo from "../assets/svgs/Frame-3703.svg";
import Framethree from "../assets/svgs/Frame-3702.svg";
import Framefour from "../assets/svgs/Frame-3701.svg";
import Diamond from "../assets/svgs/diamond.svg";
import Testimonial from "../assets/images/Frame-3676.png";
import TestimonialsSection from "../components/TestimonialCarousel";
import Zigzag from "../assets/svgs/zigzag.svg"
import useFAQSQuery from '../../hooks/useFaqsQuery';

const Hero = () => {
  const [email, setEmail] = useState("");
  const { FAQS, FAQSError, isFAQSLoading, isFAQSSuccess } = useFAQSQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscription submitted:", email);
    setEmail("");
  };
  return (
    <main className="h-full">
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src={Zigzag}
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
            loading="lazy"
            className="w-full h-auto max-w-[800px]"
          />
        </div>

        {/* Text Content */}
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl md:text-6xl dark:text-white">
              Unlock the Future with{" "}
              <span className="text-purple-500 font-bold">Blockchain</span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              Transform your skills and career with comprehensive
            </p>
            <p className="mt-4 text-lg md:text-xl dark:text-gray-300">
              training designed to lead the digital revolution
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Button>
              Explore our bootcamps
              <MoveRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section
        className="space-y-5 h-auto px-4 py-20 sm:px-6 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
        {/* Text Section */}
        <div className="flex justify-center md:justify-end md:px-80">
          <p className="mt-4 text-xl text-center md:text-left dark:text-gray-300 break-words max-w-xs md:max-w-none">
            At Blockfuse Labs, we see education as a journey.
            <br />
            Whether you're new to blockchain or an experienced developer,
            <br />
            we offer resources, expert instructors,and tools for every stage of your growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-full">
            {/* Main Image */}
            <div className="flex justify-center">
              <img
                src={Imageone}
                alt="Main Image"
                className="relative z-10 w-full max-w-[300px] sm:max-w-full lg:max-w-[1400px]"
              />
            </div>

            {/* Box1 behind Main Image */}
            <img
              src={Box1}
              alt="Secondary Image"
              className="absolute top-0 left-0 md:top-0 md:left-10 z-0 w-20 h-20 sm:w-48 sm:h-48 md:w-72 md:h-72"
              style={{ transform: "translate(-20%, -20%)" }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Bootcamp */}
      <section
        className="px-6 space-y-10 py-20 h-auto sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="services"
      >
        <header id="services" className="text-center">
          <h2 className="text-3xl font-semibold dark:text-white">
            Our Bootcamps
          </h2>
        </header>

        <div className="your-container-class">
          <BootcampCard />
        </div>
      </section>
      {/* Why Choose Us */}
      <section
        className="px-10 py-10 sm:px-8 md:px-16 lg:px-24 dark:bg-[#131316]"
        role="region"
        aria-labelledby="why-choose-us"
      >
        <header id="why-choose-us" className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold dark:text-white">
            More Than Just the Basics
          </h2>
        </header>
        <div className="flex justify-center mt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 mt-8">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row items-start">
              <img
                src={Frameone}
                alt="Icon"
                className="text-purple-500 w-10 h-10 sm:w-auto sm:h-auto"
              />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-bold dark:text-white">
                  REAL WORLD EXPERIENCE
                </h3>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-3 mt-2">
                  <p className="dark:text-gray-300 text-xl sm:text-base">
                    Apply your skills to solve real-world problems and see
                    immediate results.
                  </p>
                  <img
                    src={Diamond}
                    alt="Diamond"
                    className="w-5 h-5 sm:w-auto sm:h-auto"
                  />
                </div>
                <div className="h-[1px] w-full sm:w-[600px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row items-start">
              <img
                src={Frametwo}
                alt="Icon"
                className="text-purple-500 w-10 h-10 sm:w-auto sm:h-auto"
              />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-bold dark:text-white">
                  HANDS-ON LEARNING
                </h3>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-16 mt-2">
                  <p className="dark:text-gray-300 text-xl sm:text-base">
                    Dive into projects and learn by doing, transforming theory
                    into practice.
                  </p>
                  <img
                    src={Diamond}
                    alt="Diamond"
                    className="w-5 h-5 sm:w-auto sm:h-auto"
                  />
                </div>
                <div className="h-[1px] w-full sm:w-[650px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row items-start">
              <img
                src={Framethree}
                alt="Icon"
                className="text-purple-500 w-10 h-10 sm:w-auto sm:h-auto"
              />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-bold dark:text-white">
                  INTERACTIVE LEARNING
                </h3>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-12 mt-2">
                  <p className="dark:text-gray-300 text-xl sm:text-base">
                    Engage actively with hands-on activities that bring concepts
                    to life.
                  </p>
                  <img
                    src={Diamond}
                    alt="Diamond"
                    className="w-5 h-5 sm:w-auto sm:h-auto"
                  />
                </div>
                <div className="h-[1px] w-full sm:w-[600px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col sm:flex-row items-start">
              <img
                src={Framefour}
                alt="Icon"
                className="text-purple-500 w-10 h-10 sm:w-auto sm:h-auto"
              />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h3 className="text-lg sm:text-2xl font-bold dark:text-white">
                  COLLABORATIVE LEARNING
                </h3>
                <div className="flex items-start sm:items-center space-x-2 sm:space-x-4 mt-2">
                  <p className="dark:text-gray-300 text-xl sm:text-base">
                    Collaborate with peers to share insights, tackle challenges,
                    and grow together.
                  </p>
                  <img
                    src={Diamond}
                    alt="Diamond"
                    className="w-5 h-5 sm:w-auto sm:h-auto"
                  />
                </div>
                <div className="h-[1px] w-full sm:w-[650px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 dark:bg-[#201F24] "
        role="region"
        aria-labelledby="our-journey"
      >
        <header id="our-journey" className="text-center mb-12">
          <h2 className="text-3xl font-semibold dark:text-white">
            Our Journey
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* The Leap Card */}
          <div className="p-6 border border-purple-500 dark:bg-black">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold dark:text-white">
                The Leap
              </h3>
            </div>
            <p className="dark:text-gray-300 text-xl">
              Blockfuse Labs was established with a mission to empower
              developers through both remote and onsite training. Our primary
              agenda is to build a sustainable blockchain economy by fostering
              innovation, technical expertise, and community development across
              Africa and beyond
            </p>
          </div>

          {/* Our Today Card */}
          <div className="p-6 border border-purple-500 dark:bg-black">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold dark:text-white">
                Our today
              </h3>
            </div>
            <p className="dark:text-gray-300 text-xl">
              Today, Blockfuse Labs stands as a beacon of blockchain education,
              offering cutting-edge courses that cover everything from basic
              blockchain principles to advanced development, helping learners
              master the future of technology.
            </p>
          </div>

          {/* Our Tomorrow Card */}
          <div className="p-6 border border-purple-500 dark:bg-black">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-2xl font-semibold dark:text-white">
                Our tomorrow
              </h3>
            </div>
            <p className="dark:text-gray-300 text-xl">
              As we look to the future, we aim to expand our reach and impact,
              continually adapting to the evolving needs of the blockchain
              ecosystem. Our commitment is to provide unmatched training and
              comprehensive support across to blockchain enthusiasts across
              Africa and beyond.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h4 className="text-white mb-4">Start Your Journey Today</h4>
          <div className="flex justify-center">
            <a href="https://t.me/blockfuselabs" target="_blank" rel="noopener noreferrer">
            <Button>
              Join our Community
              <MoveRight />
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="testimonials"
      >
              <TestimonialsSection Testimonial={Testimonial} Box1={Box1} />

      </section>

      {/* Section 7: Next Cohort */}
      <section
        className=" px-6 py-20 sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="next-cohort"
      >
        <header id="next-cohort" className="flex justify-center">
          <h2 className="text-3xl font-semibold dark:text-white">
            Join the next cohort
          </h2>
        </header>
        <div className="-space-y-1">
          <p className="mt-4 mx-20 text-center text-wrap dark:text-gray-300">
            Step into the future of blockchain with Blockfuse Labs! Our upcoming
            cohort offers hands-on training, expert mentorship, and
          </p>
          <p className="mt-4 mx-20 text-center text-wrap dark:text-gray-300">
            a vibrant community to help you build and thrive in Web3. Secure
            your spot and start your journey today!
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <p className=" text-center mt-4 dark:text-gray-300">
            Start Your Journey Today
          </p>
          <div className="flex justify-center items-center">
            <Button>
              Apply now
              <MoveRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="faq"
      >
        <header id="faq" className="text-center mb-8">
          <h2 className="text-3xl font-semibold">FAQ’s</h2>
          <p className="mt-2 text-lg dark:text-gray-400">
            Everything you need to know about Blockfuse Labs! Can’t find the
            answer you’re looking for?
          </p>
          <p className="mt-2 text-lg dark:text-gray-400">
            Please chat with our friendly team, or{" "}
            <a href="https://t.me/blockfuselabs" target="_blank" className="text-purple-700 underline">
              reach out to us on our Telegram channel here.
            </a>
          </p>
        </header>

        <div className="space-y-4 text-lg">
          {[
            {
              question: "What is Blockfuse Labs?",
              answer:
                "Blockfuse Labs is a platform dedicated to revolutionizing blockchain education in Africa and beyond, offering comprehensive training programs for developers and blockchain enthusiasts.",
            },
            {
              question: "Who can join Blockfuse Labs Cohort?",
              answer:
                "Anyone interested in learning blockchain technology can join.",
            },
            {
              question: "What programs does Blockfuse Labs offer?",
              answer:
                "Blockfuse Labs offers various programs focused on blockchain development, smart contract coding, and more.",
            },
            {
              question: "How do I enroll in a Blockfuse Labs cohort?",
              answer:
                "Enrollment can be done through our official website by following the application process.",
            },
            {
              question: "How can Blockfuse Labs help with my career?",
              answer:
                "Blockfuse Labs provides hands-on experience and industry mentorship to boost your blockchain skills and career opportunities.",
            },
            {
              question: "Is there a community I can join?",
              answer:
                "Yes, Blockfuse Labs has an active community where learners and professionals collaborate.",
            },
          ].map((item, index) => (
            <div key={index} className="relative pb-4">
              <button
                onClick={() => {
                  const content = document.getElementById(
                    `faq-content-${index}`
                  );
                  content.classList.toggle("hidden");
                }}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <span className="font-semibold hover:text-purple-400">
                  {item.question}
                </span>
                <span className="text-xl">+</span>
              </button>
              <div
                id={`faq-content-${index}`}
                className="hidden transition-all duration-300 dark:text-gray-300 pl-4"
              >
                {item.answer}
              </div>
              {/* Gradient border bottom */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 8: Subscribe */}
      <section className="w-full flex justify-center items-center dark:text-white h-auto sm:h-96 mx-auto p-4 sm:p-6 dark:bg-[#1F1E23]">
        <div className="space-y-5 sm:space-y-7 max-w-lg sm:max-w-none">
          <h2 className="text-xl sm:text-2xl font-semibold dark:text-white text-center">
            Subscribe to Our Newsletter
          </h2>
          <div className="-space-y-1">
            <p className="dark:text-gray-300 text-center text-lg">
              Stay ahead in the world of blockchain! Get the latest updates,
              insights,
            </p>
            <p className="dark:text-gray-300 text-center text-lg">
              and exclusive resources from BlockTate Labs delivered straight to
              your inbox. Don't miss out—subscribe today!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email here"
                className="w-full sm:w-[800px] px-4 py-2 dark:bg-gray-800 border border-gray-700 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                }}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Hero;
