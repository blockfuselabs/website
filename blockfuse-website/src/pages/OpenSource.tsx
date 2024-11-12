import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import SkeletonCard from "../components/Skeleton";
import { GithubRepository } from "../../types/generated";

const ITEMS_PER_PAGE = 6;

const OpenSource = () => {
  const [projects, setProjects] = useState<GithubRepository[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const truncateDescription = (
    description: string | null | undefined,
    maxLength: number = 200
  ) => {
    if (!description) return "";
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength).trim() + "...";
  };

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/blockfuselabs/repos?per_page=100"
        );
        const repos = await response.json();
        setProjects(repos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repositories:", error);
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const handlePreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <>
      <Helmet>
        <title>Open Source | Your Blog Name</title>
        <meta
          name="description"
          content="Explore open-source projects from our community."
        />
        <meta property="og:title" content="Open Source | Your Blog Name" />
        <meta
          property="og:description"
          content="Discover and contribute to open-source projects."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="min-h-screen dark:text-white">
        <div className="px-4 py-8 sm:px-6 md:px-16 lg:px-24 lg:py-32">
          <h1 className="text-3xl md:text-4xl text-purple-500 text-center mb-12 lg:mb-16">
            Open Source
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {loading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : currentProjects.map((project) => (
                  <div
                    key={project.id}
                    className="dark:bg-gray-800 border border-purple-400 overflow-hidden hover:bg-gray-750 transition-colors relative h-[200px]" // Fixed height for uniform card size
                  >
                    <div className="flex">
                      <div className="w-28 ml-5 flex items-center justify-center">
                      <img
  src={project.owner.avatar_url}
  alt={project.name}
  className="w-28 h-28 object-center object-contain"
  loading="lazy"
/>

                      </div>
                      <div className="w-2/3 p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-2 sm:mb-4">
                          <div>
                            <h3 className="text-md text-wrap sm:text-xl font-semibold break-words">
                              {project.name}
                            </h3>
                            <div className="flex items-center text-sm dark:text-gray-400 space-x-2 sm:space-x-4">
                              <span className="flex items-center">
                                <Users size={14} className="mr-1" />
                                {project.owner.login}
                              </span>
                              <span className="flex items-center">
                                <Star
                                  size={14}
                                  className="mr-1"
                                  fill="currentColor"
                                />
                                {project.stargazers_count}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm sm:text-base dark:text-gray-300 mb-2 sm:mb-4 line-clamp-3">
                          {truncateDescription(project.description ?? "")}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.topics.map((tag, index) => (
                            <button
                              key={index}
                              className="px-2 py-1 text-xs sm:text-sm bg-purple-600 hover:bg-purple-700 flex items-center"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Position the buttons at the bottom-right */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
                      >
                        <LuGithub size={18} />
                      </a>
                      {project.homepage && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-purple-600 hover:bg-purple-700 rounded text-white"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                ))}
          </div>
          <div className="flex justify-between items-center mt-6 sm:mt-8 max-w-7xl mx-auto">
            <div>
              {currentPage > 1 && (
                <button
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 flex items-center"
                  onClick={handlePreviousPage}
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Previous
                </button>
              )}
            </div>
            <span className="text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenSource;
