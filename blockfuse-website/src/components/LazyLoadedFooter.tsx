import React, { useEffect, useState } from 'react';

const LazyLoadedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  // This hook sets up the IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();  // Stop observing after the component is in view
        }
      },
      {
        threshold: 0.1,  // Trigger when 10% of the element is in the viewport
      }
    );

    const element = document.getElementById('footer-links');
    if (element) observer.observe(element);

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <div
      id="footer-links"
      className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {isVisible && (
        <div className="flex flex-col sm:flex-row items-center gap-4 px-6 text-sm">
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-400">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-purple-400">
              Terms & Conditions
            </a>
          </div>
          <span className="dark:text-gray-500">
            All Copyright (C) 2024 Reserved
          </span>
        </div>
      )}
    </div>
  );
};

export default LazyLoadedFooter;
