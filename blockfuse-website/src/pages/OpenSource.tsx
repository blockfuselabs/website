import React, { useState, useEffect } from 'react';
import { fetchRepos } from '../../apis/ githubApi';
import { Users, Star, ChevronLeft, ChevronRight} from 'lucide-react';
import { LuGithub } from "react-icons/lu";
import SkeletonCard from '../components/Skeleton';

const ITEMS_PER_PAGE = 6;

const OpenSource = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    const loadRepos = async () => {
      const repos = await fetchRepos();
      setProjects(repos);
      setLoading(false);
    };

    loadRepos();
  }, []);

  const handlePreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="min-h-screen dark:text-white">
      <div className="px-6 py-12 h-full sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl text-purple-500 text-center mb-16">Open Source</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {loading ? (
            // Display 6 skeleton cards while loading
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : (
            // Display actual project cards when data is loaded
            currentProjects.map((project) => (
              <div key={project.id} className="dark:bg-gray-800 border border-purple-400 overflow-hidden hover:bg-gray-750 transition-colors">
                <div className="flex">
                  <div className="w-1/3">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-2/3 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <div className="flex items-center text-sm dark:text-gray-400 space-x-4">
                          <span className="flex items-center">
                            <Users size={16} className="mr-1" />
                            {project.contributors}
                          </span>
                          <span className="flex items-center">
                            <Star size={16} className="mr-1" fill="currentColor" />
                            {project.stars}
                          </span>
                        </div>
                      </div>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <LuGithub size={20} className="text-gray-500 hover:text-white transition-colors" />
                      </a>
                    </div>
                    <p className="text-sm dark:text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <button
                          key={index}
                          className="px-2 py-1 text-sm bg-purple-600 hover:bg-purple-700 flex items-center"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex justify-between items-center mt-8 max-w-7xl mx-auto">
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
  );
};

export default OpenSource;
