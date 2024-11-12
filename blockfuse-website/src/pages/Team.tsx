"use client";
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl dark:text-white">
              Meet Our Team{" "}
              <span className="text-purple-500 font-bold">
                At Blockfuselabs
              </span>
            </h1>
          </header>
          <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto dark:text-gray-300">
            Discover the bright minds shaping the blockchain space! Our Team are
            pioneers, creators, and leaders who drive innovation and inspire the
            next generation in the world of decentralized technology. Blockfuse
            Labs team continues to drive the future of decentralized technology
            across the globe.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-10 lg:px-12">
        {getAllTeamData?.teams?.map((member: any) => (
          <Suspense fallback={<p>Loading team members...</p>} key={member.id}>
            <TeamMemberCard member={member} navigate={navigate} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Team;
