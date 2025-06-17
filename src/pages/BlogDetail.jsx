import React, { useEffect, useState } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getAllBlogs, getBlog, getCategories } from "../data/loader";

function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [category, setCategory] = useState([]);

  const [randomBlog, setRandomBlog] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await getBlog(slug);

      if (!response) return null;
      setBlog(response.data[0]);

      const res = await getAllBlogs();

      if (res.length > 0) {
        const random = res[Math.floor(Math.random() * res.length)];
        setRandomBlog(random);
      }
    };

    if (slug) fetchBlog();
  }, []);

  console.log("random", randomBlog);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await getCategories();
        setCategory(categoryResponse.data);
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };
    fetchCategories();
  }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }

  console.log("single blog: ", blog);
  console.log(
    "blog pic link: ",
    `${import.meta.env.VITE_API_STRAPI}${blog.picture?.url}`
  );

  const today = new Date();

  const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const lorem = ["Heart", "Brain", "Bladder", "Muscle"];

  console.log(category);

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

  return (
    <motion.div
      className="!mb-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* header */}
      <motion.div
        className="flex items-center justify-between !px-10 gap-12 !py-5 w-full h-full !mt-24"
        variants={headerVariants}
      >
        <span className="!text-[#022759] !font-medium">
          <p className="!font-bold !text-lg">{dayOfWeek}</p>
          <p className="!font-medium !text-xs">{formattedDate}</p>
        </span>

        <Link to={"/blog-page"}>
          <motion.button
            whileHover="hover"
            whileTap="tap"
            className="!text-white bg-[#022759] w-20 flex items-center gap-2 h-10 !p-2 rounded-lg"
          >
            <ArrowUpLeft className="" />
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
            className="!text-3xl !font-bold !text-black text-center"
            variants={textRevealVariants}
          >
            {blog.title}
          </motion.h1>
          <motion.p
            className="!text-xs !font-medium !text-[#8d8d8d] text-center !px-50"
            variants={textRevealVariants}
          >
            {blog.subtitle}
          </motion.p>
        </motion.div>

        <div className="">
          <motion.div
            className="h-full flex items-center justify-center gap-5 !px-10 !py-5 w-full overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={blog.picture.url}
              alt=""
              className="rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
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
                className="!text-xl md:!text-4xl !font-bold !text-gray-800 !mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {blog.topic}
              </motion.h2>
              <motion.p
                className="text-justify max-w-none !text-gray-700 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {blog.content}
              </motion.p>
            </motion.div>
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
                    className="!p-2 border border-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {randomBlog.organType}
                  </motion.button>
                  <p className="!text-xs !text-gray-500 !font-medium !mt-2">
                    {formattedDate}
                  </p>
                </div>
                <div className="flex flex-col gap-2 ">
                  <h3 className="!text-lg !font-bold">{randomBlog.topic}</h3>
                  <p className="!text-gray-400 !font-medium !text-sm">
                    {randomBlog.content?.split(" ").slice(0, 40).join(" ") +
                      "..."}
                  </p>
                  <Link to={`/blog-detail/${randomBlog.slug}`}>
                    <motion.p
                      className="!text-blue-500 !underline !cursor-pointer !text-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      Continue reading{">>"}
                    </motion.p>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default BlogDetail;
