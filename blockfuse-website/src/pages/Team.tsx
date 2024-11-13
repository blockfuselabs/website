"use client";
<<<<<<< HEAD
import React, { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useTeamQuery from "../../hooks/use-team.guery";

// Lazy load individual team members component for code-splitting
const TeamMemberCard = React.lazy(() => import("../components/TeamMemberCard"));

const Team: React.FC = () => {
  const { getAllTeamData, getAllTeamError, isGetAllTeamloading } =
    useTeamQuery();

  const navigate = useNavigate();

  if (isGetAllTeamloading) return <p>Loading...</p>;
  if (getAllTeamError) return <p>Error loading team data</p>;

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 dark:text-slate-500">
      <section className="relative flex items-center justify-center h-[50vh] lg:h-[60vh] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
=======
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useTeamQuery from "../../hooks/use-team.guery";

const Team = () => {
  const { getAllTeamData, getAllTeamError, isGetAllTeamloading } =
    useTeamQuery();

    const navigate = useNavigate();
  console.log(getAllTeamData);

  if (isGetAllTeamloading) return <p>Loading...</p>;
  if (getAllTeamError) return <p>Error loading team data</p>;

  return (
    <div className="mx-10 md:mx-10 lg:mx-10">
      <section className="relative flex items-center justify-center h-screen px-6 py-36 sm:px-8 md:px-16 lg:px-24">
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20">
          <img
            src="/src/assets/svgs/circles.svg"
            alt="Background illustration representing blockchain technology"
            width="800"
            height="400"
<<<<<<< HEAD
            loading="lazy" 
=======
            loading="lazy"
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
            className="w-full h-auto max-w-[800px]"
          />
        </div>
        <div className="relative text-center z-10">
          <header>
<<<<<<< HEAD
            <h1 className="text-4xl sm:text-5xl lg:text-6xl dark:text-white">
=======
            <h1 className="text-5xl md:text-5xl dark:text-white">
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
              Meet Our Team{" "}
              <span className="text-purple-500 font-bold">
                At Blockfuselabs
              </span>
            </h1>
          </header>
<<<<<<< HEAD
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto dark:text-gray-300">
=======
          <p className="mt-4 text-lg md:text-xl w-full md:w-3/4 mx-auto dark:text-gray-300">
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
            Discover the bright minds shaping the blockchain space! Our Team are
            pioneers, creators, and leaders who drive innovation and inspire the
            next generation in the world of decentralized technology. Blockfuse
            Labs team continues to drive the future of decentralized technology
            across the globe.
          </p>
        </div>
      </section>
<<<<<<< HEAD
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-10 lg:px-12">
        {getAllTeamData?.teams?.map((member: any) => (
          <Suspense fallback={<p>Loading team members...</p>} key={member.id}>
            <TeamMemberCard member={member} navigate={navigate} />
          </Suspense>
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 dark:text-slate-500 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-6 mx-10">
        {getAllTeamData?.teams?.map((member: any) => (
          <div
            key={member.id}
            onClick={() => navigate(`/teamdetails/${member.slug}`, { state: { member } })}
            className="flex flex-col items-center cursor-pointer"
          >
            <div className="w-full h-[400px] overflow-hidden">
              <img src={member.image} alt={member.name} className="object-cover h-full w-full" />
            </div>
            <div className="text-center mt-2 pb-12">
              <p className="font-semibold hover:text-blue-500">{member.fullname}</p>
              <p className="text-sm text-gray-500">{member.position}</p>
              <div className="flex gap-8 mt-2">
            
              </div>
            </div>
          </div>
>>>>>>> 94d37b2366336f4c7cd841075f8a0067919e3294
        ))}
      </div>
    </div>
  );
};

export default Team;
