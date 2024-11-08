import React from "react";
import { useParams, Link } from "react-router-dom";
import { images } from "../utils/TeamData";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Teamdetails = () => {
  const { id } = useParams();
  const member = images.find((image) => image.id === id);

  if (!member) {
    return (
      <p className="text-center mt-10 dark:text-white">Team member not found</p>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen py-10 dark:text-white bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl w-full p-6 md:p-10 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <Link
          to="/team"
          className="flex items-center  mr-20 text-xs border border-slate-600 bg-slate-600 rounded-lg text-black dark:text-white hover:underline hover:bg-slate-400"
        >
          <FaLongArrowAltLeft size={20} />
          <span className="text-xs p-1"> Team</span>
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-2xl font-bold">{member.name}</h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {member.stack}
            </p>
            <p className="text-base text-gray-700 dark:text-gray-400 max-w-md">
              {member.des}
            </p>

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
            className="w-48 h-48 md:w-80 md:h-80 object-cover border-2 border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Teamdetails;
