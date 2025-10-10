import React from "react";

const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="grid container lg:mt-7 mx-auto grid-cols-1 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-3.5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex  flex-col gap-3">
          <div className="skeleton h-50 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
