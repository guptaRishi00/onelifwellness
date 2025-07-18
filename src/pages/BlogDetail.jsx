import React, { useEffect, useState, useMemo } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllBlogs, getBlog, getCategories } from "../data/loader";

// Loading skeleton component
const BlogSkeleton = () => (
  <div className="animate-pulse">
    <div className="flex items-center justify-between px-10 gap-12 py-5 w-full h-full mt-24">
      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded w-24"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="h-10 bg-gray-200 rounded-lg w-20"></div>
    </div>

    <div className="flex flex-col items-center justify-center gap-5 px-10 py-5 w-full h-full">
      <div className="flex flex-col items-center justify-center gap-5 px-10 py-5 w-full h-full mt-24">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>

      <div className="w-full">
        <div className="h-64 bg-gray-200 rounded-xl mx-10 mb-5"></div>
        <div className="grid grid-cols-6 px-10 gap-5">
          <div className="col-span-4 space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="shadow-md rounded-2xl p-5 bg-white">
              <div className="flex items-center gap-5 mb-5">
                <div className="h-8 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [randomBlog, setRandomBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { slug } = useParams();

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

  useEffect(() => {
    const fetchAllData = async () => {
      if (!slug) return;

      setLoading(true);
      setError(null);

      try {
        // Fetch all data in parallel for better performance
        const [blogResponse, allBlogsResponse, categoriesResponse] =
          await Promise.all([getBlog(slug), getAllBlogs(), getCategories()]);

        // Handle blog data
        if (!blogResponse?.data?.[0]) {
          throw new Error("Blog not found");
        }
        setBlog(blogResponse.data[0]);

        // Handle random blog selection
        if (allBlogsResponse?.length > 0) {
          // Filter out current blog from random selection
          const otherBlogs = allBlogsResponse.filter((b) => b.slug !== slug);
          if (otherBlogs.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherBlogs.length);
            setRandomBlog(otherBlogs[randomIndex]);
          }
        }

        // Handle categories
        if (categoriesResponse?.data) {
          setCategories(categoriesResponse.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message || "Failed to load blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [slug]);

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

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  if (loading) {
    return <BlogSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link to="/blog-page" className="text-blue-500 hover:underline">
            Back to Blog Page
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog Not Found
          </h2>
          <Link to="/blog-page" className="text-blue-500 hover:underline">
            Back to Blog Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="mb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="flex items-center justify-between !px-10 gap-12 !py-5 w-full h-full !mt-24"
        variants={headerVariants}
      >
        <span className="text-[#022759] font-medium">
          <p className="font-bold text-lg">{dayOfWeek}</p>
          <p className="font-medium text-xs">{formattedDate}</p>
        </span>

        <Link to="/blog-page">
          <motion.button className="!text-white bg-[#022759] w-20 flex items-center gap-2 h-10 !p-2 rounded-lg">
            <ArrowUpLeft />
            Back
          </motion.button>
        </Link>
      </motion.div>

      <div className="flex flex-col items-center justify-center gap-5 !px-10 !py-5 w-full h-full">
        <motion.div
          className="flex flex-col items-center justify-center gap-5 !px-10 !py-5 w-full h-full !mt-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-bold text-black text-center"
            variants={textRevealVariants}
          >
            {blog.title}
          </motion.h1>
          <motion.p
            className="text-xs font-medium text-[#8d8d8d] text-center !px-50"
            variants={textRevealVariants}
          >
            {blog.subtitle}
          </motion.p>
        </motion.div>

        <div className="w-full">
          <motion.div
            className="h-full flex items-center justify-center gap-5 !px-10 !py-5 w-full overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={blog.picture?.url || "/placeholder.svg"}
              alt={blog.title}
              className="rounded-xl max-w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-6 !px-10 gap-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="col-span-4 flex flex-col"
              variants={itemVariants}
            >
              <motion.h2
                className="text-xl md:text-4xl font-bold text-gray-800 !mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {blog.topic}
              </motion.h2>
              <motion.p
                className="text-justify max-w-none text-gray-700 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {blog.content}
              </motion.p>
            </motion.div>

            {randomBlog && (
              <motion.div
                className="col-span-2"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div
                  className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-5"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-center gap-5">
                    <motion.button
                      className="!p-2 border border-black !text-xs"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {randomBlog.organType || "Article"}
                    </motion.button>
                    <p className="!text-xs text-gray-500 font-medium !mt-2">
                      {formattedDate}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="!text-lg font-bold">{randomBlog.topic}</h3>
                    <p className="!text-gray-400 !font-medium !text-sm">
                      {randomBlog.content?.split(" ").slice(0, 40).join(" ") +
                        "..."}
                    </p>
                    <Link to={`/blog-detail/${randomBlog.slug}`}>
                      <motion.p
                        className="text-blue-500 underline cursor-pointer text-sm"
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        Continue reading {">>"}
                      </motion.p>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogDetail;
