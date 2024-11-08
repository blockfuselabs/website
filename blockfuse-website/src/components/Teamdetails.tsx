import React from "react";
import { useParams } from "react-router-dom";
import { images } from "../utils/TeamData";

const Teamdetails = () => {
  const { id } = useParams();
  const member = images.find((image) => image.id === id);

  if (!member) {
    return <p className="text-center mt-10 dark:text-white">Team member not found</p>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen  dark:text-white bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl w-full  shadow-lg p-6 md:p-10 bg-white dark:bg-gray-900">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-2xl font-bold">{member.name}</h1>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{member.stack}</p>
          <p className="text-base text-gray-700 dark:text-gray-400 max-w-md">{member.des}</p>
          
          <div className="flex gap-4 mt-4">
            <a 
              href={member.linkdin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              LinkedIn
            </a>
            <a 
              href={member.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:underline dark:text-gray-400"
            >
              GitHub
            </a>
          </div>
        </div>
        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 md:w-60 md:h-60  object-cover border-2 border-gray-300"
        />
      </div>
    </div>
  );
};

export default Teamdetails;
