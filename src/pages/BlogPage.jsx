import React, { useEffect, useMemo, useCallback, useState } from "react";
import bgLogo from "../assets/images/blog/bg-logo.png";
import { CirclePlus, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// import { getAllBlogPost, getAllBlogs, getCategories } from "../data/loader";
// import LazyImage from "../components/LazyImage";

import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogData } from "../hooks/useBlogData";

const BlogCard = React.memo(({ blog, index }) => (
  <motion.div
    className="shadow-md rounded-2xl !p-4 sm:!p-5 bg-white flex flex-col gap-4 lg:gap-8"
    whileHover={{
      y: -5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex  sm:flex-row lg:flex-row items-center lg:items-center gap-2 sm:gap-5">
      <motion.button
        className="!px-3 !py-1 lg:!p-2 border border-black !text-xs !font-medium rounded self-start"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {blog.organType}
      </motion.button>
      <p className="!text-xs text-gray-500 !font-medium lg:!mt-2">
        {new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-base sm:!text-lg !font-bold">{blog.title}</h3>
      <p className="text-gray-400 font-medium text-sm">
        {(blog.content ?? "").split(" ").slice(0, 15).join(" ") + "..."}
      </p>
      <Link to={`/blog-detail/${blog.slug}`}>
        <motion.p
          className="text-blue-500 underline cursor-pointer !text-sm"
          whileHover={{ scale: 1.02, x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Continue reading{">>"}
        </motion.p>
      </Link>
    </div>
  </motion.div>
));

function BlogPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const organTypeParam = queryParams.get("organType");

  useEffect(() => {
    if (organTypeParam) {
      setSelectedCategory(organTypeParam);
    }
  }, [organTypeParam]);

  // console.log("organTypeParam: ", organTypeParam);

  const [showAllCategories, setShowAllCategories] = useState(false);

  const {
    blogPost,

    categories,
    pageCount,
    isLoading,
    error,
    latestPost,
    getFilteredPosts,
  } = useBlogData(page);

  // Memoize filtered posts to prevent unnecessary recalculations
  const filteredBlogPost = useMemo(
    () => getFilteredPosts(selectedCategory),
    [getFilteredPosts, selectedCategory]
  );

  // Memoize date calculations
  const { dayOfWeek, formattedDate } = useMemo(() => {
    const today = new Date();
    return {
      dayOfWeek: today.toLocaleDateString("en-US", { weekday: "long" }),
      formattedDate: today.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  }, []);

  // Memoize category display logic
  const { categoriesToShow, hasMoreCategories } = useMemo(
    () => ({
      categoriesToShow: showAllCategories ? categories : categories.slice(0, 7),
      hasMoreCategories: categories.length > 7,
    }),
    [categories, showAllCategories]
  );

  // Show skeleton while loading
  if (isLoading) {
    return <BlogSkeleton />;
  }

  // Show error state
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show empty state
  if (!latestPost || !Array.isArray(blogPost) || blogPost.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
          <p className="text-gray-600">Check back later for new content!</p>
        </div>
      </div>
    );
  }

  console.log("latestPost: ", latestPost.title);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="!flex !flex-col !h-screen lg:!mb-[550px] !mb-[1900px]">
      {/* Hero Section with Background */}
      <div
        className="!relative !min-h-screen !bg-cover !bg-center !bg-no-repeat"
        style={{
          backgroundImage: `url(${bgLogo})`,
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Content Container */}
        <motion.div
          className="!absolute !inset-0 !pt-16 sm:!pt-20 md:!pt-24 !pb-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header with Categories */}
          <motion.div
            className="!px-4 sm:!px-6 lg:!px-10 !py-4 sm:!py-6"
            variants={itemVariants}
          >
            {/* Mobile Layout */}
            <div className="!block lg:!hidden !space-y-4">
              {/* Date */}
              <div className="!text-[#022759] !font-medium">
                <p className="!font-bold !text-base sm:!text-lg">{dayOfWeek}</p>
                <p className="!font-medium !text-xs">{formattedDate}</p>
              </div>

              {/* Categories - Mobile Scroll */}
              <div className="!flex !items-center !justify-between">
                <div className="!flex !overflow-x-auto !space-x-4 !pb-2 !flex-1">
                  <motion.button
                    className="!text-sm sm:!text-base !whitespace-nowrap !cursor-pointer hover:!border-b hover:!border-blue-900 !transition-all !font-medium"
                    onClick={() => setSelectedCategory(null)}
                    whileHover={{ scale: 1.05 }}
                  >
                    All
                  </motion.button>
                  {categoriesToShow?.map((item, index) => (
                    <motion.button
                      className="!text-sm sm:!text-base !whitespace-nowrap !cursor-pointer hover:!border-b hover:!border-blue-900 !transition-all !font-medium"
                      key={index}
                      onClick={() => setSelectedCategory(item.name)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>

                {/* Add Button */}
                {hasMoreCategories && (
                  <motion.button
                    className="!ml-4 !flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAllCategories(!showAllCategories)}
                  >
                    <CirclePlus className="!text-white !bg-[#022759] !w-8 !h-8 sm:!w-10 sm:!h-10 !p-2 !rounded-lg" />
                  </motion.button>
                )}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="!hidden lg:!flex lg:!items-center lg:!justify-between !gap-12">
              {/* Date */}
              <div className="!text-[#022759] !font-medium !flex-shrink-0">
                <p className="!font-bold !text-lg">{dayOfWeek}</p>
                <p className="!font-medium !text-xs">{formattedDate}</p>
              </div>

              {/* Categories */}
              <div className="!flex !items-center !justify-center gap-10 !space-x-8 !flex-1">
                <motion.button
                  className="!text-lg shadow-sm !cursor-pointer hover:!border-b !bg-gray-100 !py-2 !px-4 rounded-xl hover:!border-blue-900 !transition-all !font-medium"
                  onClick={() => setSelectedCategory(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  All
                </motion.button>
                {categoriesToShow?.map((item, index) => (
                  <motion.button
                    className="!text-lg !cursor-pointer hover:!border-b !bg-gray-100 !py-2 !px-4 rounded-xl shadow-sm hover:!border-blue-900 !transition-all !font-medium"
                    key={index}
                    onClick={() => setSelectedCategory(item.name)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>

              {/* Add Button */}
              {hasMoreCategories && (
                <motion.button
                  className="!flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowAllCategories(!showAllCategories)}
                >
                  <CirclePlus className="!text-white !bg-[#022759] !w-10 !h-10 !p-2 !rounded-lg" />
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            className="!px-4 sm:!px-6 lg:!px-10 !mt-6 sm:!mt-8 lg:!mt-10"
            variants={containerVariants}
          >
            {/* Mobile Layout */}
            <div className="!block lg:!hidden !space-y-8">
              {/* Latest Post - Mobile */}
              <motion.div
                className="!w-full !overflow-hidden !flex !flex-col !gap-4"
                variants={itemVariants}
              >
                {/* Header */}
                <div className="!flex !flex-col sm:!flex-row sm:!items-center sm:!justify-between !gap-3">
                  <motion.h1
                    className="!flex !items-center !gap-2 !font-bold !text-lg sm:!text-xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {latestPost.organType}
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        className="!text-white !bg-gray-400 !p-1 !rounded-full"
                        size={18}
                      />
                    </motion.div>
                  </motion.h1>
                </div>

                {/* Image */}
                <motion.div
                  className="!w-full !h-48 sm:!h-64 md:!h-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={latestPost.picture.url}
                    alt=""
                    className="!object-cover !rounded-2xl !w-full !h-full"
                  />
                  <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                    {new Date(latestPost.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </p>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="!text-lg sm:!text-xl lg:!text-lg xl:!text-xl !font-bold text-gray-900 lg:text-gray-900">
                    {latestPost.topic}
                  </h1>
                  <p className="!text-sm !font-medium !mt-2">
                    {latestPost.content?.split(" ").slice(0, 40).join(" ") +
                      "..."}
                  </p>
                  <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                    {formattedDate}
                  </p>
                </motion.div>

                {/* Related Images */}
                <motion.div
                  className=" !items-center !gap-3 !overflow-x-auto !pb-2 hidden"
                  whileInView={{
                    transition: { staggerChildren: 0.1 },
                  }}
                >
                  {[1, 2, 3].map((_, index) => (
                    <motion.img
                      key={index}
                      src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
                      alt=""
                      className="!rounded-xl hidden !w-24 sm:!w-32 !h-16 sm:!h-20 !object-cover !flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    />
                  ))}
                </motion.div>

                <Link to={`/blog-detail/${latestPost.slug}`}>
                  <motion.p
                    className="!text-blue-500 !underline !cursor-pointer !text-sm"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Continue reading{">>"}
                  </motion.p>
                </Link>
              </motion.div>

              {/* Blog Cards - Mobile */}
              <div className="!space-y-6">
                <motion.h2
                  className="!flex !items-center !gap-2 !font-bold !text-lg sm:!text-xl"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Latest Blogs
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className="!text-white !bg-gray-400 !p-1 !rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h2>

                <div className="!grid !grid-cols-1 sm:!grid-cols-2 !gap-4 sm:!gap-6">
                  {filteredBlogPost.slice(0, 6).map((blog, index) => (
                    <motion.div
                      key={index}
                      className="!shadow-md !rounded-2xl !p-4 sm:!p-5 !bg-white !flex !flex-col !gap-4"
                      variants={itemVariants}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="!flex !flex-col sm:!flex-row sm:!items-center !gap-2 sm:!gap-5">
                        <motion.button
                          className="!px-3 !py-1 !border !border-black !text-xs !font-medium !rounded !self-start"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {blog.organType}
                        </motion.button>
                        <p className="!text-xs !text-gray-500 !font-medium">
                          {new Date(blog.createdAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <div className="!flex !flex-col !gap-2">
                        <h3 className="!text-base sm:!text-lg !font-bold">
                          {blog.title}
                        </h3>
                        <p className="!text-gray-400 !font-medium !text-sm">
                          {(blog.content ?? "")
                            .split(" ")
                            .slice(0, 15)
                            .join(" ") + "..."}
                        </p>
                        <Link to={`/blog-detail/${blog.slug}`}>
                          <motion.p
                            className="!text-blue-500 !underline !cursor-pointer !text-sm"
                            whileHover={{ scale: 1.02, x: 5 }}
                          >
                            Continue reading{">>"}
                          </motion.p>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="!hidden lg:!grid lg:!grid-cols-3 !gap-8">
              {/* Latest Post - Desktop */}
              <motion.div
                className="!w-full !overflow-hidden !flex !flex-col !gap-5"
                variants={itemVariants}
              >
                <div className="!flex !items-center !justify-between">
                  <motion.h1
                    className="!flex !items-center !gap-2 !font-bold !text-xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {latestPost.organType}
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        className="!text-white !bg-gray-400 !p-1 !rounded-full"
                        size={18}
                      />
                    </motion.div>
                  </motion.h1>
                  {/* <div className="!flex !items-center !gap-5">
                    {["Lorem", "Lorem", "Lorem"].map((text, index) => (
                      <motion.p
                        key={index}
                        className="hover:!font-medium hover:!underline !cursor-pointer !font-medium !text-xs !text-gray-500 hover:!text-black"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div> */}
                </div>
                <motion.div
                  className="!w-full !max-w-[453px] !h-[330px] !mx-auto lg:!mx-0 !mb-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={latestPost.picture.url}
                    alt=""
                    className="!object-cover !rounded-2xl !w-full !h-full"
                    loading="lazy"
                  />
                  <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                    {new Date(latestPost.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="!text-xl !font-bold !mt-20">
                    {latestPost.topic}
                  </h1>
                  <p className="!text-sm !font-medium !mt-2">
                    {latestPost.content?.split(" ").slice(0, 80).join(" ") +
                      "..."}
                  </p>
                  <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                    {formattedDate}
                  </p>
                </motion.div>
                <motion.div
                  className=" !items-center !gap-5 hidden"
                  whileInView={{
                    transition: { staggerChildren: 0.1 },
                  }}
                >
                  {[1, 2, 3].map((_, index) => (
                    <motion.img
                      key={index}
                      src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
                      alt=""
                      className="!rounded-xl !w-35 hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      loading="lazy"
                    />
                  ))}
                </motion.div>
                <Link to={`/blog-detail/${latestPost.slug}`}>
                  <motion.p
                    className="!text-blue-500 !underline !cursor-pointer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Continue reading{">>"}
                  </motion.p>
                </Link>
              </motion.div>

              {/* Second Column - Desktop */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-col gap-5">
                  <motion.h1
                    className="!flex !items-center !gap-2 !font-bold !text-xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    Blogs
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        className="text-white bg-gray-400 p-1 rounded-full"
                        size={18}
                      />
                    </motion.div>
                  </motion.h1>
                  {filteredBlogPost.slice(0, 3).map((blog, index) => (
                    <BlogCard
                      key={`col2-${blog.id}-${index}`}
                      blog={blog}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Third Column - Desktop */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-col gap-5">
                  <motion.h1
                    className="!flex !items-center !gap-2 !font-bold !text-xl"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Blogs
                    <motion.div
                      whileHover={{ rotate: 180, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight
                        className="text-white bg-gray-400 p-1 rounded-full"
                        size={18}
                      />
                    </motion.div>
                  </motion.h1>
                  {filteredBlogPost.slice(3, 6).map((blog, index) => (
                    <BlogCard
                      key={`col3-${blog.id}-${index}`}
                      blog={blog}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Pagination */}
          <div className="!flex !items-center !justify-center !gap-2 !mt-8 lg:!mt-12 !px-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`!flex !items-center !gap-1.5 !px-3 sm:!px-4 !py-2 sm:!py-2.5 !rounded-lg !font-medium !text-sm !transition-all !duration-200 ${
                page === 1
                  ? "!bg-gray-50 !text-gray-400 !cursor-not-allowed !opacity-60"
                  : "!bg-white !text-gray-700 !border !border-gray-200 hover:!bg-gray-50 hover:!border-gray-300"
              }`}
            >
              <svg
                className="!w-4 !h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
              <span className="!hidden sm:!inline">Previous</span>
            </button>

            <div className="!flex !items-center !gap-2 sm:!gap-3 !px-2 sm:!px-4 !py-2 sm:!py-2.5 !mx-1 sm:!mx-2">
              <span className="!text-sm !text-gray-500 !hidden sm:!inline">
                Page
              </span>
              <div className="!flex !items-center !gap-1">
                <span className="!font-semibold !text-gray-900 !text-base !min-w-[1ch] !text-center">
                  {page}
                </span>
                <span className="!text-gray-400 !text-sm">/</span>
                <span className="!text-gray-600 !text-sm !font-medium">
                  {pageCount}
                </span>
              </div>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
              disabled={page === pageCount}
              className={`!flex !items-center !gap-1.5 !px-3 sm:!px-4 !py-2 sm:!py-2.5 !rounded-lg !font-medium !text-sm !transition-all !duration-200 ${
                page === pageCount
                  ? "!bg-gray-50 !text-gray-400 !cursor-not-allowed !opacity-60"
                  : "!bg-white !text-gray-700 !border !border-gray-200 hover:!bg-gray-50 hover:!border-gray-300 !shadow-sm hover:!shadow"
              }`}
            >
              <span className="!hidden sm:!inline">Next</span>
              <svg
                className="!w-4 !h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;
