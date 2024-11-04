import React from "react";
import Button from "../components/Buttons";
import { MoveRight } from "lucide-react";
import Imageone from "../assets/images/Frame-10.png"
import Box1 from "../assets/svgs/box1.svg"

const Hero = () => {
  return (
    <main className="h-full">
      {/* Section 1: Hero */}
      <section
        className="px-6 py-36 h-full sm:px-8 md:px-16 lg:px-24"
        role="banner"
      >
        <div className="flex flex-col items-center">
          <header>
            <h1 className="text-4xl font-bold text-white">
              Unlock the Future with Blockchain
            </h1>
          </header>
          <p className="mt-4 text-lg text-gray-300" aria-label="description">
            Transform your skills and career with comprehensive training
            designed to lead the digital revolution
          </p>
          <div className="mt-8">
            <Button aria-label="Explore our bootcamps">
              Explore our bootcamps
              <MoveRight />
            </Button>
          </div>
          <div className="mt-12 relative">
            <img
              src="team-image.jpg"
              alt="The Blockfuse Labs team posing together"
              className="rounded-lg shadow-lg"
              width="800"
              height="400"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section
        className="space-y-5 px-6 py-20 sm:px-8 md:px-16 lg:px-24 dark:text-white"
        role="region"
        aria-labelledby="about-us"
      >
        <div className="flex px-80 justify-end">
          <p className="mt-4 text-gray-300 text-left break-words">
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
    style={{ transform: 'translate(-20%, -20%)' }} 
  />
</div>
</div>
      </section>

      {/* Section 3: Services */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="services"
      >
        <header id="services">
          <h2 className="text-3xl font-semibold text-white">Our Services</h2>
        </header>
        <ul className="mt-4 space-y-4">
          <li className="text-gray-300">Blockchain Bootcamps</li>
          <li className="text-gray-300">Consulting & Training</li>
          <li className="text-gray-300">Community Building</li>
        </ul>
      </section>

      {/* Section 4: Why Choose Us */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 bg-gray-700"
        role="region"
        aria-labelledby="why-choose-us"
      >
        <header id="why-choose-us" className="text-center">
          <h2 className="text-3xl font-semibold text-white">Why Choose Us?</h2>
        </header>
        <p className="mt-4 text-gray-300 text-center">
          Our expert trainers and hands-on approach make learning effective and
          impactful.
        </p>
      </section>

      {/* Section 5: Team */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="team"
      >
        <header id="team">
          <h2 className="text-3xl font-semibold text-white">Meet Our Team</h2>
        </header>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div
            className="w-40 h-40 rounded-full bg-gray-600"
            aria-label="Team member photo"
          ></div>
          <div
            className="w-40 h-40 rounded-full bg-gray-600"
            aria-label="Team member photo"
          ></div>
          <div
            className="w-40 h-40 rounded-full bg-gray-600"
            aria-label="Team member photo"
          ></div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 bg-gray-800"
        role="region"
        aria-labelledby="testimonials"
      >
        <header id="testimonials">
          <h2 className="text-3xl font-semibold text-white">
            What Our Students Say
          </h2>
        </header>
        <p className="mt-4 text-gray-300">
          "The training was insightful and changed my career path!" - Student
        </p>
      </section>

      {/* Section 7: Upcoming Events */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24"
        role="region"
        aria-labelledby="upcoming-events"
      >
        <header id="upcoming-events">
          <h2 className="text-3xl font-semibold text-white">Upcoming Events</h2>
        </header>
        <p className="mt-4 text-gray-300">
          Join our next webinar on blockchain trends.
        </p>
      </section>

      {/* Section 8: Contact */}
      <section
        className="px-6 py-20 sm:px-8 md:px-16 lg:px-24 bg-gray-700"
        role="region"
        aria-labelledby="contact"
      >
        <header id="contact">
          <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
        </header>
        <p className="mt-4 text-gray-300">Email: block.hustle@gmail.com</p>
      </section>

      {/* Section 9: Footer */}
      <footer
        className="px-6 py-10 sm:px-8 md:px-16 lg:px-24 bg-gray-900"
        role="contentinfo"
      >
        <p className="text-center text-gray-500">
          © 2024 Blockfuse Labs. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

export default Hero;
