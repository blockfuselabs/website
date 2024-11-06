
import React from "react";
import { images } from "../utils/TeamData"; 
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; 

const Gallery = () => {
  return (
    <div className="mt-20 mx-10 md:mx-10 lg:mx-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-slate-500 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-0">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.image} 
              alt={image.name}
              className="w-full object-cover md:w-[80%]"
            />
            <div className="text-center mt-2 pb-2">
              <p className="font-semibold">{image.name}</p>
              <p className="text-sm text-gray-500">{image.stack}</p> 
              <div className="flex gap-2  items-center">
              <p className="text-sm text-gray-500">{image.twitter}</p>
              <p className="text-sm text-gray-500">{image.github}</p>
              <p className="text-sm text-gray-500">{image.linkdin}</p> 

              </div>
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
