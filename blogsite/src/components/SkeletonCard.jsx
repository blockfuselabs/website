import React from "react";

const SkeletonCard = () => (
  <div className="overflow-hidden py-32 bg-gray-800 animate-pulse rounded-md p-6">
    <div className="h-48 bg-gray-700 mb-4 rounded"></div>
    <div className="h-6 bg-gray-700 w-1/2 mb-2 rounded"></div>
    <div className="h-4 bg-gray-700 w-1/3 mb-4 rounded"></div>
    <div className="h-4 bg-gray-700 w-full mb-2 rounded"></div>
    <div className="h-4 bg-gray-700 w-4/5 mb-2 rounded"></div>
    <div className="h-4 bg-gray-700 w-2/3 rounded"></div>
  </div>
);

export default SkeletonCard;