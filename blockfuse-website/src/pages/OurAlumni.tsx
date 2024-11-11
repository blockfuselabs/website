"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import useAlumniQuery from "../../hooks/use-alumni.guery";

const OurAlumni = () => {
  const { id } = useParams();
  const location = useLocation();
  const cohortData = location.state?.cohort;

  const { getAllAlumniData, getAllAlumniError, isGetAllAlumniloading } = useAlumniQuery();
  console.log(getAllAlumniData);
  if (isGetAllAlumniloading) return <p>Loading...</p>;
  if (getAllAlumniError) return <p>Error loading alumni data</p>;

  return (
    <div>
    <div className="dark:text-white mx-6 md:mx-8">
      <h1 className="text-3xl md:text-5xl flex justify-center items-center py-8">
        Face of Our Alumni
      </h1>
      <h2 className="text-xl text-center dark:text-gray-300">{cohortData?.name}</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {getAllAlumniData?.alumnis.rows.map((alumni: any, index:number) => (
          <div key={index} className="relative flex flex-col items-center border rounded-lg overflow-hidden">
            <img src={alumni.image} alt={alumni.fullname} className="w-full object-cover" />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-20 text-white p-4 flex flex-col items-center">
              <Link to={`/alumni/${alumni.fullname}`} className="text-lg font-semibold hover:text-blue-400">
                {alumni.fullname}
              </Link>
              <div className="flex gap-4 mt-2">
                {alumni.twitter && (
                  <a href={alumni.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                    <FaTwitter size={24} />
                  </a>
                )}
                {alumni.github_link && (
                  <a href={alumni.github_link} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                    <FaGithub size={24} />
                  </a>
                )}
                {alumni.linkedin && (
                  <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white">
                    <FaLinkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default OurAlumni;
