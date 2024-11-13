
import React from 'react';

const SkeletonCard = () => (
  <div className="animate-pulse dark:bg-gray-800 border border-purple-400 overflow-hidden">
    <div className="flex">
      <div className="w-1/3 h-full bg-gray-700"></div>
      <div className="w-2/3 p-6 space-y-4">
        <div className="h-6 bg-gray-600 rounded w-3/4"></div>
        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
        <div className="flex space-x-4">
          <div className="h-4 bg-gray-500 rounded w-10"></div>
          <div className="h-4 bg-gray-500 rounded w-10"></div>
        </div>
        <div className="h-3 bg-gray-500 rounded w-full"></div>
        <div className="h-3 bg-gray-500 rounded w-full"></div>
        <div className="h-3 bg-gray-500 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

export default SkeletonCard;
