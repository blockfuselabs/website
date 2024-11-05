import React, { useState } from "react";
import Button from "../components/Buttons";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Imageone from "../assets/images/Frame-10.png";
import Box1 from "../assets/svgs/box1.svg";
import BootcampCard from "../components/BootcampCards";
import Frameone from "../assets/svgs/Frame-3704.svg";
import Frametwo from "../assets/svgs/Frame-3703.svg";
import Framethree from "../assets/svgs/Frame-3702.svg";
import Framefour from "../assets/svgs/Frame-3701.svg";
import Diamond from "../assets/svgs/diamond.svg";
import Testimonial from "../assets/images/Frame-3676.png";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscription submitted:", email);
    setEmail("");
  };
  return (
    <main className="h-full">
      <section className="flex items-center justify-center h-screen  px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        <div className="text-center">
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
          <div className="mt-12 flex justify-center">
            <img
              src="https://via.placeholder.com/800x400"
              alt="Illustration representing blockchain technology"
              className="shadow-lg"
              width="800"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section
        className="space-y-5 h-auto px-6 py-20 sm:px-8 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
        <div className="flex px-80 justify-end">
          <p className="mt-4 dark:text-gray-300 text-left break-words">
            At Blockfuse Labs, we see education as a journey.
            <br />
            Whether you're new to blockchain or an experienced developer,
            <br />
            we offer resources, expert instructors,
            <br />
            and tools for every stage of your growth.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Imageone at the top */}
            <div className="flex justify-center">
              <img src={Imageone} alt="Main Image" className="relative z-10" />
            </div>

            {/* Box1 behind Imageone */}
            <img
              src={Box1}
              alt="Secondary Image"
              className="absolute top-0 left-0 z-0"
              style={{ transform: "translate(-20%, -20%)" }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Bootcamp */}
      <section
        className="px-6 py-20 h-auto sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="services"
      >
        <header id="services" className="text-center">
          <h2 className="text-3xl font-semibold text-white">Our Bootcamps</h2>
        </header>

        <div className="your-container-class">
          <BootcampCard />
        </div>
      </section>
      {/* Why Choose Us */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 dark:bg-[#131316]"
        role="region"
        aria-labelledby="why-choose-us"
      >
        <header id="why-choose-us" className="text-center">
          <h2 className="text-3xl font-semibold dark:text-white">
            More Than Just the Basics
          </h2>
        </header>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {/* Card 1 */}
            <div className="flex items-start">
              <img src={Frameone} alt="Icon" className="text-purple-500" />
              <div className="ml-4">
                <h3 className="text-xl font-bold dark:text-white">
                  REAL WORLD EXPERIENCE
                </h3>
                <div className="flex items-center space-x-3 mt-2">
                  <p className="dark:text-gray-300">
                    Apply your skills to solve real-world problems and see
                    immediate results.
                  </p>
                  <img src={Diamond} alt="Diamond" />
                </div>
                <div className="h-1 w-[600px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-start">
              <img src={Frametwo} alt="Icon" className="text-purple-500" />
              <div className="ml-4">
                <h3 className="text-xl font-bold dark:text-white">
                  HANDS-ON LEARNING
                </h3>
                <div className="flex items-center space-x-16 mt-2">
                  <p className="dark:text-gray-300">
                    Dive into projects and learn by doing, transforming theory
                    into practice.
                  </p>
                  <img src={Diamond} alt="Diamond" />
                </div>
                <div className="h-1 w-[650px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-start">
              <img src={Framethree} alt="Icon" className="text-purple-500" />
              <div className="ml-4">
                <h3 className="text-xl font-bold dark:text-white">
                  INTERACTIVE LEARNING
                </h3>
                <div className="flex items-center space-x-12 mt-2">
                  <p className="dark:text-gray-300">
                    Engage actively with hands-on activities that bring concepts
                    to life.
                  </p>
                  <img src={Diamond} alt="Diamond" />
                </div>
                <div className="h-1 w-[600px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex items-start">
              <img src={Framefour} alt="Icon" className="text-purple-500" />
              <div className="ml-4">
                <h3 className="text-xl font-bold dark:text-white">
                  COLLABORATIVE LEARNING
                </h3>
                <div className="flex items-center space-x-4 mt-2">
                  <p className="dark:text-gray-300">
                    Collaborate with peers to share insights, tackle challenges,
                    and grow together.
                  </p>
                  <img src={Diamond} alt="Diamond" />
                </div>
                <div className="h-1 w-[650px] bg-gradient-to-r from-purple-500 to-pink-500 mt-2"></div>
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
              <h3 className="text-xl font-semibold dark:text-white">
                The Leap
              </h3>
            </div>
            <p className="dark:text-gray-300 text-sm">
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
              <h3 className="text-xl font-semibold dark:text-white">
                Our today
              </h3>
            </div>
            <p className="dark:text-gray-300 text-sm">
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
              <h3 className="text-xl font-semibold dark:text-white">
                Our tomorrow
              </h3>
            </div>
            <p className="dark:text-gray-300 text-sm">
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
            <Button>
              Join our Community
              <MoveRight />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 "
        role="region"
        aria-labelledby="testimonials"
      >
        <header id="testimonials" className="text-center mb-12">
          <h2 className="text-3xl font-semibold dark:text-white">
            Testimonials
          </h2>
        </header>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 bg-purple-600 p-2 rounded-full">
            <ChevronLeft className="dark:text-white" size={24} />
          </button>

          {/* Testimonial Card */}
          <div className="dark:bg-black h-60 border border-purple-500 mx-12">
            <div className="flex gap-6 relative">
              <div className="w-52 h-[14.8rem] flex-shrink-0">
                <img
                  src={Testimonial}
                  alt="Testimonial"
                  className="w-full h-full object-cover relative z-10"
                />
                {/* Box1 behind Imageone */}
                <img
                  src={Box1}
                  alt="Secondary Image"
                  className="absolute w-56 h-60 -top-10 left-0 z-0"
                  style={{ transform: "translate(-20%, -20%)" }}
                />
              </div>
              <div className="p-3">
                <p className="text-sm dark:text-gray-400 mb-2">May 8, 2023</p>
                <h3 className="text-xl font-semibold dark:text-white mb-4">
                  Person's Full name
                </h3>
                <p className="dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  nisl mauris, nec turpis orci lectus maecenas. Suspendisse sed
                  magna eget nibh in turpis. Consequat duis diam lacus arcu.
                </p>
              </div>
            </div>
          </div>

          <button className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 bg-purple-600 p-2 rounded-full">
            <ChevronRight className="dark:text-white" size={24} />
          </button>

          {/* Testimonial Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-purple-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
          </div>
        </div>
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
          <p className="mt-2 dark:text-gray-400">
            Everything you need to know about Blockfuse Labs! Can’t find the
            answer you’re looking for?
          </p>
          <p className="mt-2 dark:text-gray-400">
            Please chat with our friendly team, or{" "}
            <a href="#" className="text-purple-700 underline">
              reach out to us on our Telegram channel here.
            </a>
          </p>
        </header>

        <div className="space-y-4">
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
      <section className="w-full flex justify-center items-center dark:text-white h-96 mx-auto p-6 dark:bg-[#1F1E23] ">
        <div className="space-y-7">
          <h2 className="text-2xl font-semibold text-white text-center">
            Subscribe to Our Newsletter
          </h2>
          <div className="-space-y-1">
          <p className="text-gray-300 text-center text-sm">
            Stay ahead in the world of blockchain! Get the latest updates,
            insights, 
          </p>
          <p className="text-gray-300 text-center text-sm">
          and exclusive resources from BlockTate Labs delivered
          straight to your inbox. Don't miss out—subscribe today!
          </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 ">
            <div className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email here"
                className="w-[800px] px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" style={{ width: "800px" }}>
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
