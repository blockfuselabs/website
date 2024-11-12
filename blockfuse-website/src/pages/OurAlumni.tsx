"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useAlumniQuery from "../../hooks/use-alumni.guery";
import { Alumni } from "../../types/generated";

const OurAlumni: React.FC = () => {
  const location = useLocation();
  const cohortData = location.state?.cohort;
  
  const {
    data: getAllAlumniData,
    error: getAllAlumniError,
    isLoading: isGetAllAlumniloading,
  } = useAlumniQuery(cohortData?.id); 

  if (isGetAllAlumniloading) return <p>Loading...</p>;
  if (getAllAlumniError) return <p>Error loading alumni data</p>;

  return (
    <div className="dark:text-white mx-4 sm:mx-6 md:mx-8">
      <h2 className="text-3xl md:text-5xl py-8 text-center dark:text-gray-300">
        {cohortData?.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {getAllAlumniData?.alumnis.rows.map((alumni: Alumni) => (
          <div 
            key={alumni.id} 
            className="relative flex flex-col items-center overflow-hidden rounded-lg shadow-lg pb-4"
          >
            {/* Image container with responsive sizing */}
            <div className="w-full h-64 md:h-56 lg:h-64 xl:h-72">
              <img 
                src={alumni.image} 
                alt={alumni.fullname} 
                className="w-full h-full object-cover rounded-t-lg" 
              />
            </div>

            {/* Overlay section */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
              <Link to={`/alumni/${alumni.id}`} className="text-lg font-semibold hover:text-blue-400 text-center">
                {alumni.fullname}
              </Link>
              <div className="flex gap-4 mt-2">
                {alumni.twitter_link && (
                  <a 
                    href={alumni.twitter_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-200 hover:text-white"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {alumni.github_link && (
                  <a 
                    href={alumni.github_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-200 hover:text-white"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {alumni.linkedin_link && (
                  <a 
                    href={alumni.linkedin_link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-200 hover:text-white"
                  >
                    <FaLinkedin size={24} />
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

export default OurAlumni;
