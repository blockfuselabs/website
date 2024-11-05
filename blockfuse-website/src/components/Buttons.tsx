import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`
        bg-gradient-to-r from-purple-600 to-purple-400
        hover:from-purple-700 hover:to-purple-500
        text-white
        py-3 px-6
        w-72
        transition-colors
        duration-300
        ease-in-out
        flex 
        gap-3
        items-center
        justify-center
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;