import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="!min-h-screen !bg-gray-50 !animate-pulse">
      {/* Header Skeleton */}
      <div className="!px-4 !sm:px-6 !lg:px-10 !py-4 !sm:py-6">
        <div className="!block !lg:hidden !space-y-4">
          <div className="!space-y-2">
            <div className="!h-5 !bg-gray-200 !rounded !w-20"></div>
            <div className="!h-3 !bg-gray-200 !rounded !w-16"></div>
          </div>
          <div className="!flex !space-x-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="!h-8 !bg-gray-200 !rounded !w-16"
              ></div>
            ))}
          </div>
        </div>

        <div className="!hidden !lg:flex !lg:items-center !lg:justify-between !gap-12">
          <div className="!space-y-2">
            <div className="!h-5 !bg-gray-200 !rounded !w-20"></div>
            <div className="!h-3 !bg-gray-200 !rounded !w-16"></div>
          </div>
          <div className="!flex !space-x-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="!h-10 !bg-gray-200 !rounded-xl !w-24"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="!px-4 !sm:px-6 !lg:px-10 !mt-6">
        {/* Mobile Layout Skeleton */}
        <div className="!block !lg:hidden !space-y-8">
          {/* Main post skeleton */}
          <div className="!space-y-4">
            <div className="!h-6 !bg-gray-200 !rounded !w-32"></div>
            <div className="!h-48 !bg-gray-200 !rounded-2xl"></div>
            <div className="!space-y-2">
              <div className="!h-5 !bg-gray-200 !rounded !w-3/4"></div>
              <div className="!h-4 !bg-gray-200 !rounded !w-full"></div>
              <div className="!h-4 !bg-gray-200 !rounded !w-2/3"></div>
            </div>
          </div>

          {/* Blog cards skeleton */}
          <div className="!grid !grid-cols-1 !sm:grid-cols-2 !gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="!bg-white !rounded-2xl !p-4 !space-y-3"
              >
                <div className="!h-4 !bg-gray-200 !rounded !w-20"></div>
                <div className="!h-5 !bg-gray-200 !rounded !w-3/4"></div>
                <div className="!h-4 !bg-gray-200 !rounded !w-full"></div>
                <div className="!h-4 !bg-gray-200 !rounded !w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout Skeleton */}
        <div className="!hidden !lg:grid !lg:grid-cols-3 !gap-8">
          {/* First column */}
          <div className="!space-y-5">
            <div className="!h-6 !bg-gray-200 !rounded !w-32"></div>
            <div className="!h-80 !bg-gray-200 !rounded-2xl"></div>
            <div className="!space-y-2">
              <div className="!h-5 !bg-gray-200 !rounded !w-3/4"></div>
              <div className="!h-4 !bg-gray-200 !rounded !w-full"></div>
              <div className="!h-4 !bg-gray-200 !rounded !w-2/3"></div>
            </div>
          </div>

          {/* Second and third columns */}
          {[...Array(2)].map((_, colIndex) => (
            <div key={colIndex} className="!space-y-5">
              <div className="!h-6 !bg-gray-200 !rounded !w-20"></div>
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="!bg-white !rounded-2xl !p-5 !space-y-3"
                >
                  <div className="!h-4 !bg-gray-200 !rounded !w-20"></div>
                  <div className="!h-5 !bg-gray-200 !rounded !w-3/4"></div>
                  <div className="!h-4 !bg-gray-200 !rounded !w-full"></div>
                  <div className="!h-4 !bg-gray-200 !rounded !w-1/2"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;