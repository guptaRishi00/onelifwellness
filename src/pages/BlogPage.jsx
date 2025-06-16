import React, { useEffect, useState } from "react";
import bgLogo from "../assets/images/blog/bg-logo.png";
import { CirclePlus, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllBlogPost, getAllBlogs, getCategories } from "../data/loader";

function BlogPage() {
  const [blogs, setBlogs] = useState();

  const [blogPost, setBlogPost] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const [category, setCategory] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  console.log("blogPost:", blogPost);

  useEffect(() => {
    const fetchBlogsAndCategories = async () => {
      try {
        const response = await getAllBlogPost(page, 6);
        setBlogPost(response.data);
        setPageCount(response.meta.pagination.pageCount);

        const categoryResponse = await getCategories();
        setCategory(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching blogs or categories:", error);
      }
    };

    fetchBlogsAndCategories();
  }, [page]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await getAllBlogs();
      setBlogs(blogs);
    };

    fetchBlogs();
  }, []);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(blogPost) || blogPost.length === 0) {
    return <div>Loading blog posts...</div>;
  }

  const sorted = [...blogPost].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latestPost = sorted[sorted.length - 1];

  console.log("category: ", category);

  const today = new Date();

  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const filteredBlogPost = selectedCategory
    ? blogPost.filter((blog) => blog.category.name === selectedCategory)
    : blogPost;

  // const category = ["Heart", "Brain", "Bladder", "Muscle"];

  console.log("filteredBlogPost: ", filteredBlogPost);

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

  const buttonVariants = {
    hover: { scale: 1.1, rotate: 90, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  const cardVariants = {
    hover: {
      y: -5,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex flex-col gap-90 !mb-90">
      <div
        className="bg-cover bg-no-repeat h-screen relative"
        style={{ backgroundImage: `url(${bgLogo})`, backgroundSize: "100%" }}
      >
        <motion.div
          className="absolute top-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* categories */}
          <motion.div
            className="lg:flex lg:items-center lg:justify-between !px-10 gap-12 !py-5 w-full h-full"
            variants={headerVariants}
          >
            <span className="!text-[#022759] !font-medium">
              <p className="!font-bold !text-lg">{dayOfWeek}</p>
              <p className="!font-medium !text-xs">{formattedDate}</p>
            </span>

            <div className="lg:flex lg:items-center lg:justify-between w-[70%] ">
              <motion.p
                className="!text-lg cursor-pointer hover:border-b hover:border-blue-900 transition-all !font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </motion.p>
              {category.map((item, index) => (
                <motion.p
                  className="!text-lg cursor-pointer hover:border-b hover:border-blue-900 transition-all !font-medium"
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => setSelectedCategory(item.name)}
                >
                  {item.name}
                </motion.p>
              ))}
            </div>
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <CirclePlus className="!text-white bg-[#022759] w-10 h-10 !p-2 rounded-lg" />
            </motion.button>
          </motion.div>
          <motion.div
            className="!px-10 !mt-10 grid grid-cols-1 md:grid md:grid-cols-3 gap-5"
            variants={containerVariants}
          >
            {/* Latest Post */}
            <motion.div
              className="w-full overflow-hidden flex flex-col gap-5"
              variants={itemVariants}
            >
              <div className="flex items-center justify-between">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
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
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                <div className="flex items-center gap-5">
                  {["Lorem", "Lorem", "Lorem"].map((text, index) => (
                    <motion.p
                      key={index}
                      className="hover:!font-medium hover:underline cursor-pointer !font-medium !text-xs !text-gray-500 hover:!text-black"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
              <motion.div
                className="w-[453px] h-[330px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={latestPost.picture.url}
                  alt=""
                  className="!object-cover rounded-2xl"
                />
                <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                  {new Date(latestPost.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                </p>
              </motion.div>
              <motion.div
                className=""
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="!text-xl !font-bold mt-20">
                  {latestPost.topic}
                </h1>
                <p className="!text-sm !font-medium !mt-2">
                  {latestPost.content.split(" ").slice(0, 80).join(" ") + "..."}
                </p>
                <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                  {formattedDate}
                </p>
              </motion.div>
              <motion.div
                className="flex items-center gap-5"
                whileInView={{
                  transition: { staggerChildren: 0.1 },
                }}
              >
                {[1, 2, 3].map((_, index) => (
                  <motion.img
                    key={index}
                    src="https://plus.unsplash.com/premium_photo-1691223733678-095fee90a0a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3BhcGVyfGVufDB8fDB8fHww"
                    alt=""
                    className="rounded-xl w-35"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  />
                ))}
              </motion.div>
              <Link to={`/blog-detail/${latestPost.slug}`}>
                <motion.p
                  className="!text-blue-500 underline cursor-pointer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Continue reading{">>"}
                </motion.p>
              </Link>
            </motion.div>
            {/* Second Column */}
            <motion.div className="" variants={itemVariants}>
              <div className="flex flex-col gap-5">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
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
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                {filteredBlogPost.slice(0, 3).map((blog, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-8"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-5">
                      <motion.button
                        className="!p-2 border border-black"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {blog.organType}
                      </motion.button>
                      <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h3 className="!text-lg !font-bold">{blog.title}</h3>
                      <p className="!text-gray-400 !font-medium !text-sm">
                        {blog.content.split(" ").slice(0, 20).join(" ") + "..."}
                      </p>
                      <Link to={`/blog-detail/${blog.slug}`}>
                        <motion.p
                          className="!text-blue-500 underline cursor-pointer !text-sm"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          Continue reading{">>"}
                        </motion.p>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Third Column */}
            <motion.div className="" variants={itemVariants}>
              <div className="flex flex-col gap-5">
                <motion.h1
                  className="flex items-center gap-2 !font-bold !text-xl"
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
                      className="!text-white bg-gray-400 !p-1 rounded-full"
                      size={18}
                    />
                  </motion.div>
                </motion.h1>
                {filteredBlogPost.slice(3, 6).map((blog, index) => (
                  <motion.div
                    key={index}
                    className="shadow-md rounded-2xl !p-5 bg-white flex flex-col gap-8"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-5">
                      <motion.button
                        className="!p-2 border border-black"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {blog.organType}
                      </motion.button>
                      <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                        {new Date(blog.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 ">
                      <h3 className="!text-lg !font-bold">{blog.title}</h3>
                      <p className="!text-gray-400 !font-medium !text-sm">
                        {blog.content.split(" ").slice(0, 20).join(" ") + "..."}
                      </p>
                      <Link to={`/blog-detail/${blog.slug}`}>
                        <motion.p
                          className="!text-blue-500 underline cursor-pointer !text-sm"
                          whileHover={{ scale: 1.02, x: 5 }}
                        >
                          Continue reading{">>"}
                        </motion.p>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* end */}
          </motion.div>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
              className={`flex items-center gap-1.5 !px-4 !py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                page === 1
                  ? "bg-gray-50 text-gray-400 cursor-not-allowed opacity-60"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow"
              }`}
            >
              <svg
                className="w-4 h-4"
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
              Previous
            </button>

            <div className="flex items-center gap-3 !px-4 !py-2.5 !mx-2">
              <span className="text-sm text-gray-500">Page</span>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-900 text-base !min-w-[1ch] text-center">
                  {page}
                </span>
                <span className="text-gray-400 !text-sm">/</span>
                <span className="text-gray-600 !text-sm font-medium">
                  {pageCount}
                </span>
              </div>
            </div>

            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, pageCount))}
              disabled={page === pageCount}
              className={`flex items-center gap-1.5 !px-4 !py-2.5 rounded-lg !font-medium !text-sm transition-all duration-200 ${
                page === pageCount
                  ? "bg-gray-50 text-gray-400 cursor-not-allowed opacity-60"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm hover:shadow"
              }`}
            >
              Next
              <svg
                className="w-4 h-4"
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
