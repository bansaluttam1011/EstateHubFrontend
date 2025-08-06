import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-yellow-400 rounded-full opacity-30 animate-float-medium"></div>
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-25 animate-float-fast"></div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-purple-400 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-4 h-4 bg-pink-400 rounded-full opacity-30 animate-float-medium"></div>
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-blue-300 opacity-15 rotate-45 animate-float-reverse"></div>
      <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-indigo-300 opacity-20 rotate-12 animate-float-slow"></div>
    </div>
  );
};

export default FloatingElements;