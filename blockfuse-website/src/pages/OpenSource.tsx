import React, { useState } from 'react';
import { Users, Star, ChevronLeft, ChevronRight, Newspaper, Github, Book, Globe } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

const projects = [
  {
    id: 1,
    title: 'Foundry',
    contributors: '5,123',
    stars: '300',
    description: 'Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend eleifend massa fitus voit dignissim. In sit gravida condimentum ultricorper aliquat et vitae augue. Nunc gravida amet quis efficitur dolor consequat felis. Tellus imperdiet est felis et purus non senean in quam.',
    image: '/src/assets/images/Frame-3869.png',
    tags: ['Blog', 'Github', 'Docs', 'Website']
  },
].concat(Array(6).fill(0).map((_, index) => ({
  id: index + 2,
  title: 'Foundry',
  contributors: '5,123',
  stars: '300',
  description: 'Lorem ipsum dolor sit amet consectetur. Faucibus enim eleifend eleifend massa fitus voit dignissim. In sit gravida condimentum ultricorper aliquat et vitae augue. Nunc gravida amet quis efficitur dolor consequat felis. Tellus imperdiet est felis et purus non senean in quam.',
  image: '/src/assets/images/Frame-3869.png',
  tags: ['Blog', 'Github', 'Docs', 'Website']
})));

const getIcon = (tag) => {
  switch (tag.toLowerCase()) {
    case 'blog':
      return <Newspaper size={16} className="mr-1" />;
    case 'github':
      return <Github size={16} className="mr-1" />;
    case 'docs':
      return <Book size={16} className="mr-1" />;
    case 'website':
      return <Globe size={16} className="mr-1" />;
    default:
      return null;
  }
};

const OpenSource = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="min-h-screen dark:text-white">
      <div className="px-6 py-36 h-full sm:px-8 md:px-16 lg:px-24">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-16">Open source</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {currentProjects.map((project) => (
            <div key={project.id} className="dark:bg-gray-800 border border-purple-400 overflow-hidden hover:bg-gray-750 transition-colors">
              <div className="flex">
             
                <div className="w-1/3">
                  <img
                    src="/src/assets/images/Frame-3869.png"
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Project Details */}
                <div className="w-2/3 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <div className="flex items-center text-sm text-gray-400 space-x-4">
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
                  </div>

                  <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="px-2 py-1 text-sm bg-purple-600 hover:bg-purple-700 flex items-center transition-colors"
                      >
                        {getIcon(tag)}
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8 max-w-7xl mx-auto">
          <div>
            {currentPage > 1 && (
              <button 
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 flex items-center transition-colors"
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
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 flex items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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