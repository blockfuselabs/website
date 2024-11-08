import React from "react";
import { Link } from "react-router-dom"; 
import { images } from "../utils/TeamData";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="mx-10 md:mx-10 lg:mx-10">
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src="/src/assets/svgs/circles.svg"
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
            loading="lazy"
            className="w-full h-auto max-w-[800px]"
          />
        </div>
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-5xl  md:text-5xl dark:text-white">
              Meet Our Team{" "}
              <span className="text-purple-500 font-bold">At Blockfuselabs</span>
            </h1>
          </header>
          <div className="-space-y-1">
            <p className="mt-4 text-lg md:text-xl w-full md:w-3/4  mx-auto dark:text-gray-300">
            Discover the bright minds shaping the blockchain space! Our Team are pioneers, creators, and leaders who drive innovation and inspire the next generation in the world of decentralized technology.Blockfuse Labs team  continue to drive the future of decentralized technology across the globe.
            </p>
          </div>

        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-slate-500 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 mx-10">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.image}
              alt={image.name}
              className=" object-cover "
            />
            <div className="text-center mt-2 pb-12">
              <Link to={`/teamdetails/${image.id}`} className="font-semibold hover:text-blue-500">
                {image.name}
              </Link>
              <p className="text-sm text-gray-500">{image.stack}</p>
              <div className="flex gap-8 mt-2">
                {image.twitter && (
                  <a href={image.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaTwitter size={20} />
                  </a>
                )}
                {image.github && (
                  <a href={image.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaGithub size={20} />
                  </a>
                )}
                {image.linkdin && (
                  <a href={image.linkdin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800">
                    <FaLinkedin size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
