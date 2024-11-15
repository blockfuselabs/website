"use client";
import React, { Suspense, lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import useTeamQuery from "../../hooks/use-team.guery";
import { Helmet } from 'react-helmet';

// Lazy load individual team members component for code-splitting
const TeamMemberCard = lazy(() => import("../components/TeamMemberCard"));



// Skeleton loader for team member cards
const TeamMemberSkeleton = () => (
  <div className="bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse">
    <div className="h-48 bg-gray-300 dark:bg-gray-600 rounded-t-lg"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-4"></div>
      <div className="flex justify-between">
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
        <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const { getAllTeamData, getAllTeamError, isGetAllTeamloading } =
    useTeamQuery();
  const navigate = useNavigate();

  if (isGetAllTeamloading) return <p>Loading...</p>;
  if (getAllTeamError) return <p>Error loading team data</p>;

  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 dark:text-slate-500">
       <Helmet>
        <html lang="en" />
        <title>Blockfuse Labs - Team Members</title>
        <meta name="description" content="Meet the team behind Blockfuse Labs, pioneers in the blockchain space." />
        <meta property="og:title" content="Blockfuse Labs Team Members" />
        <meta property="og:description" content="Discover the bright minds shaping the blockchain space at Blockfuse Labs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <section className="relative flex items-center justify-center h-[50vh] lg:h-[60vh] px-4 py-20 sm:px-6 md:px-12 lg:px-16">
       
        <div className="relative text-center z-10">
          <header>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl dark:text-white mt-12">
              Meet Our Team{" "}
              <span className="text-purple-500 font-bold">
                At Blockfuse Labs
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
      <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 px-4 sm:px-8 md:px-10 lg:px-12">
        {getAllTeamData?.teams?.map((member: any) => (
          <Suspense fallback={<TeamMemberSkeleton />} key={member.id}>
            <TeamMemberCard member={member} navigate={navigate} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Team;
