import React from "react";
import BootcampCard from "/src/components/BootcampCards";
import { Helmet } from "react-helmet";

const AboutBootcamp = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Blockfuse Labs - Bootcamp</title>
        <meta
          name="description"
          content="Join Blockfuse Labs Bootcamp to learn the latest in blockchain technology and Web3 development. Our program equips developers with the skills to build decentralized applications, smart contracts, and more."
        />
        <meta
          property="og:title"
          content="Blockfuse Labs Bootcamp - Learn Blockchain & Web3"
        />
        <meta
          property="og:description"
          content="Blockfuse Labs Bootcamp is designed to help aspiring blockchain developers master Web3 technologies, smart contract development, and decentralized applications (dApps). Join us today and transform your career in the blockchain industry."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="px-6 h-auto py-36 dark:text-white sm:px-8 md:px-16 lg:px-24 dark:text-white px-6 py-32 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
        <div className="w-full max-w-[1040px] h-auto mb-16 text-center">
          <h1 className="font-space-grotesk text-2xl font-normal leading-[38.28px]">
            Where Future <span className="font-bold">Blockchain</span> Leaders
            Are Made
          </h1>
          <p className="w-full max-w-[819px] mx-auto font-space-grotesk text-[30px] font-light leading-[38.28px]">
            Unlock the skills to lead in Web2 and Web3 development through
            hands-on training, mentorship, and real-world projects.
          </p>
        </div>

        <div className=" w-full flex justify-center">
          <BootcampCard />
        </div>
      </div>
    </>
  );
};

export default AboutBootcamp;
