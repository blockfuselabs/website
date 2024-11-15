import React from "react";
import Alumnicohorts from "../components/Alumnicohorts";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - About Us</title>
        <meta
          name="description"
          content="Blockfuse Labs is a leading blockchain innovation hub focused on creating decentralized solutions for the future. Our mission is to empower individuals, businesses, and developers through cutting-edge blockchain technology and open-source projects."
        />
        <meta
          property="og:title"
          content="About Blockfuse Labs - Innovating with Blockchain"
        />
        <meta
          property="og:description"
          content="Blockfuse Labs is at the forefront of blockchain innovation, developing decentralized applications and offering resources for businesses and developers to succeed in the Web3 space. Learn more about our mission, values, and how we're shaping the future of blockchain."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="px-6 h-auto py-36 dark:text-white sm:px-8 md:px-16 lg:px-24">
        <div className="flex items-center justify-center relative mb-8">
          <div className="relative text-center z-10">
            <header>
              <h1 className="text-5xl md:text-7xl dark:text-white">
                About <span className="text-purple-500 font-bold">Blockfuse Labs</span>
              </h1>
            </header>
            <p className="mt-4 text-lg md:text-xl w-full md:w-3/4 mx-auto dark:text-gray-300">
              At Blockfuse Labs, we provide expert training and resources to
              advance blockchain education. Since our founding, Blockfuse Labs
              has grown into a leading educational platform, trusted by
              developers and enthusiasts alike. Today, we're proud to be driving
              blockchain education and innovation across Africa, helping
              learners at all levels build their skills and confidence.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-14 mb-14 space-y-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">In the Beginning</h2>
            <p className="dark:text-gray-300 text-justify">
              Blockfuse Labs is a rapidly-growing Web3 community founded in 2024 on a selfless code of conduct:
              to equip developers with trendsetting Web3 knowledge that transforms them into daredevil
              changemakers who will drive a sustainable Web3 Economy in Africa.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Our Current State of Mind</h2>
            <p className="dark:text-gray-300 text-justify">
              In just 5 months, Blockfuse Labs has trained 65 students directly and indirectly through our Web3
              and Web2 to Web3 Preparatory Bootcamps. At Blockfuse Labs, our mission is clear: to bridge the gap
              between learning and real-world application, creating a pipeline for job-ready talent. Our
              state-of-the-art facility, equipped with high-speed internet, provides a supportive environment
              for onsite learners. Every program, every resource, and every connection we build is geared towards
              fostering skills that translate into job opportunities and career growth in the blockchain space.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Where We Are Going</h2>
            <p className="dark:text-gray-300 text-justify">
              By 2028, our goal is to empower over 1000 developers annually through expanded programs and
              strategic partnerships. We aim to be the cornerstone of blockchain growth in Africa, turning aspiring
              learners into world-class innovators and fostering job creation across the continent. We won’t stop
              until Africa becomes the pulse of the global blockchain landscape, showcasing its unparalleled talent
              and creativity.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">What Makes Us Different? It’s Our DNA</h2>
            <p className="dark:text-gray-300 text-justify">
              Our team is an army of cross-functional innovators. We are a blend of technical and non-technical
              experts who share comprehensive, challenge-tested insights that simplify blockchain’s complexities,
              be it development, strategy, or design. We are laser-focused on equipping you with practical, real-world
              skills for seamless adaptation and transitioning to achieve your goals.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Why Join Us?</h2>
            <p className="dark:text-gray-300 text-justify">
              We don’t just sit through training, we dive into action. Blockfuse Labs is where hands-on learning
              is the livewire. We are the place where skills don’t stay on paper—they are transformed into careers.
              Networking? We've got those too—the kind that opens doors and pushes you forward. Your success is our pleasure.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Ready For Transformation?</h2>
            <p className="dark:text-gray-300 text-justify">
              Join Blockfuse Labs to transform your skills into real-world impact. Learn, innovate, and disrupt
              alongside a community pushing the boundaries of tech.
            </p>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-14 mt-14">
          <div className="p-8 border border-purple-500 dark:bg-black">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-semibold dark:text-white">Vision</h3>
            </div>
            <p className="dark:text-gray-300 text-justify text-m">
              To be the leading global hub for blockchain innovation, where creativity, knowledge, and technology
              intersect to create solutions that change the world.
            </p>
          </div>
          <div className="p-8 border border-purple-500 dark:bg-black">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <h3 className="text-xl font-semibold dark:text-white">Mission</h3>
            </div>
            <p className="dark:text-gray-300 text-justify text-m">
              To cultivate a thriving community of skilled blockchain developers and pioneers in Nigeria, equipped
              to drive the future of technology in our region and beyond.
            </p>
          </div>
        </div>

        <div className="mx-2">
          <Alumnicohorts />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
