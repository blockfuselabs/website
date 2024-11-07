


import React from "react";
import {images} from "../utils/AlumniData"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const AlGallery = () => {


  return (
    <div className=" dark:text-white mx-6 md:mx-8">
      <h1 className="text-3xl md:text-5xl flex justify-center items-center py-8">Face of Our Alumni</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.image}
              alt={image.name}
              className="w-full object-cover"
            />
             <div className="text-center mt-2 pb-12">
              <Link to={`/person/${image.name}`} className="font-semibold hover:text-blue-500">
                {image.name}
              </Link>
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

export default AlGallery;
