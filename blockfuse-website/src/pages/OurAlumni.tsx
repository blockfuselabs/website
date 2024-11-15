"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import useAlumniQuery from "../../hooks/use-alumni.guery";
import { Helmet } from "react-helmet";

const OurAlumni = () => {
  const { id } = useParams();
  const location = useLocation();
  const cohortData = location.state?.cohort;

  const { getAllAlumniData, getAllAlumniError, isGetAllAlumniloading } =
    useAlumniQuery();
  console.log(getAllAlumniData);
  if (isGetAllAlumniloading) return <p>Loading...</p>;
  if (getAllAlumniError) return <p>Error loading alumni data</p>;

  return (
    <>
      <Helmet>
        <title>Blockfuse Labs - Our Alumni</title>
        <meta
          name="description"
          content="Meet the talented alumni of Blockfuse Labs. Discover their achievements, contributions, and how they are shaping the future of blockchain and Web3 technology across the globe."
        />
        <meta
          property="og:title"
          content="Blockfuse Labs - Our Alumni Network"
        />
        <meta
          property="og:description"
          content="Explore the journeys of Blockfuse Labs alumni and see how they’re innovating in the blockchain industry. Learn about our graduates' successes and contributions to decentralized technology."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div>
        <div className="px-6 h-auto py-36 dark:text-white mx-6 md:mx-8 sm:px-8 md:px-16 lg:px-24">
          <h1 className="text-3xl md:text-5xl flex justify-center items-center py-8 pb-2">
            Meet Our
          </h1>
          <h2 className="text-xl text-center dark:text-gray-300 pb-8">
             {cohortData?.name} Alumni
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getAllAlumniData?.alumnis.rows.map(
              (alumni: any, index: number) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center border rounded-lg overflow-hidden"
                >
                  <img
                    src={alumni.image}
                    alt={alumni.fullname}
                    className="w-full h-52 object-cover md:w-4/4 md:h-52"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
                    <Link
                      to={`/alumni/${alumni.fullname}`}
                      className="text-lg font-semibold hover:text-blue-400"
                    >
                      {alumni.fullname}
                    </Link>
                    <div className="flex gap-4 mt-2">
                      {alumni.twitter && (
                        <a
                          href={alumni.twitter}
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
                      {alumni.linkedin && (
                        <a
                          href={alumni.linkedin}
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
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurAlumni;
