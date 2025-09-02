import React, { useEffect, useState, useMemo } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { getAllBlogs, getBlog, getCategories } from "../data/loader";

// Loading skeleton component
const BlogSkeleton = () => (
  <div className="!animate-pulse">
    <div className="!flex !items-center !justify-between !px-6 !md:!px-10 !gap-6 !md:!gap-12 !py-6 !w-full !h-full !mt-20 !md:!mt-24">
      <div className="!space-y-3">
        <div className="!h-6 !bg-gray-200 !rounded !w-24"></div>
        <div className="!h-4 !bg-gray-200 !rounded !w-20"></div>
      </div>
      <div className="!h-10 !bg-gray-200 !rounded-lg !w-20"></div>
    </div>

    <div className="!flex !flex-col !items-center !justify-center !gap-8 !px-6 !md:!px-10 !py-8 !w-full !h-full">
      <div className="!flex !flex-col !items-center !justify-center !gap-6 !px-6 !md:!px-10 !py-8 !w-full !h-full !mt-16 !md:!mt-24">
        <div className="!h-8 !bg-gray-200 !rounded !w-3/4"></div>
        <div className="!h-4 !bg-gray-200 !rounded !w-1/2"></div>
      </div>

      <div className="!w-full">
        <div className="!h-64 !md:!h-80 !bg-gray-200 !rounded-xl !mx-6 !md:!mx-10 !mb-8"></div>
        <div className="!grid !grid-cols-1 !lg:!grid-cols-6 !px-6 !md:!px-10 !gap-8">
          <div className="!lg:!col-span-4 !space-y-6">
            <div className="!h-8 !bg-gray-200 !rounded !w-3/4"></div>
            <div className="!space-y-3">
              <div className="!h-4 !bg-gray-200 !rounded"></div>
              <div className="!h-4 !bg-gray-200 !rounded"></div>
              <div className="!h-4 !bg-gray-200 !rounded !w-5/6"></div>
            </div>
          </div>
          <div className="!lg:!col-span-2">
            <div className="!shadow-md !rounded-2xl !p-6 !bg-white">
              <div className="!flex !items-center !gap-4 !mb-6">
                <div className="!h-8 !bg-gray-200 !rounded !w-16"></div>
                <div className="!h-4 !bg-gray-200 !rounded !w-20"></div>
              </div>
              <div className="!space-y-3">
                <div className="!h-6 !bg-gray-200 !rounded !w-full"></div>
                <div className="!h-4 !bg-gray-200 !rounded"></div>
                <div className="!h-4 !bg-gray-200 !rounded !w-3/4"></div>
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
        const [blogResponse, allBlogsResponse, categoriesResponse] =
          await Promise.all([getBlog(slug), getAllBlogs(), getCategories()]);

        if (!blogResponse?.data?.[0]) {
          throw new Error("Blog not found");
        }
        setBlog(blogResponse.data[0]);

        if (allBlogsResponse?.length > 0) {
          const otherBlogs = allBlogsResponse.filter((b) => b.slug !== slug);
          if (otherBlogs.length > 0) {
            const randomIndex = Math.floor(Math.random() * otherBlogs.length);
            setRandomBlog(otherBlogs[randomIndex]);
          }
        }

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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      <div className="!min-h-screen !flex !items-center !justify-center !px-6">
        <div className="!text-center !space-y-6">
          <h2 className="!text-2xl !md:!text-3xl !font-bold !text-red-600">
            Error
          </h2>
          <p className="!text-gray-600 !text-lg">{error}</p>
          <Link
            to="/blog-page"
            className="!inline-block !text-blue-500 hover:!underline !font-medium"
          >
            Back to Blog Page
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="!min-h-screen !flex !items-center !justify-center !px-6">
        <div className="!text-center !space-y-6">
          <h2 className="!text-2xl !md:!text-3xl !font-bold !text-gray-800">
            Blog Not Found
          </h2>
          <Link
            to="/blog-page"
            className="!inline-block !text-blue-500 hover:!underline !font-medium"
          >
            Back to Blog Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="!mb-16 !md:!mb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div
        className="!flex !items-center !justify-between !px-6 !md:!px-10 !lg:!px-12 !gap-6 !md:!gap-12 !py-6 !md:!py-8 !w-full !h-full !mt-20 !md:!mt-24"
        variants={headerVariants}
      >
        <span className="!text-[#022759] !font-medium">
          <p className="!font-bold !text-lg !md:!text-xl">{dayOfWeek}</p>
          <p className="!font-medium !text-xs !md:!text-sm !mt-1">
            {formattedDate}
          </p>
        </span>

        <Link to="/blog-page">
          <motion.button className="!text-white !bg-[#022759] !w-20 !md:!w-24 !flex !items-center !justify-center !gap-2 !h-10 !md:!h-12 !p-2 !md:!p-3 !rounded-lg !font-medium !text-sm !md:!text-base hover:!bg-[#033a6b] !transition-colors">
            <ArrowUpLeft className="!w-4 !h-4" />
            Back
          </motion.button>
        </Link>
      </motion.div>

      <div className="!flex !flex-col !items-center !justify-center !gap-8 !md:!gap-12 !px-6 !md:!px-10 !lg:!px-12 !py-8 !md:!py-12 !w-full !h-full">
        <motion.div
          className="!flex !flex-col !items-center !justify-center !gap-6 !md:!gap-8 !px-6 !md:!px-10 !py-8 !md:!py-12 !w-full !h-full !mt-16 !md:!mt-24"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="!text-2xl !md:!text-3xl !lg:!text-4xl !font-bold !text-black !text-center !leading-tight !max-w-4xl"
            variants={textRevealVariants}
          >
            {blog.title}
          </motion.h1>
          <motion.p
            className="!text-sm !md:!text-base !font-medium !text-[#8d8d8d] !text-center !max-w-3xl !leading-relaxed"
            variants={textRevealVariants}
          >
            {blog.subtitle}
          </motion.p>
        </motion.div>

        <div className="!w-full">
          <motion.div
            className="!h-full !flex !items-center !justify-center !gap-6 !md:!gap-8 !px-6 !md:!px-10 !py-6 !md:!py-8 !w-full !overflow-hidden"
            variants={imageVariants}
          >
            <motion.img
              src={blog.picture?.url || "/placeholder.svg"}
              alt={blog.title}
              className="!rounded-xl !md:!rounded-2xl !max-w-full !h-auto !shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="!grid !grid-cols-1 !lg:!grid-cols-6 !px-6 !md:!px-10 !gap-8 !md:!gap-10 !lg:!gap-12 !mt-8 !md:!mt-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="!lg:!col-span-4 !flex !flex-col !space-y-6 !md:!space-y-8"
              variants={itemVariants}
            >
              <motion.h2
                className="!text-xl !md:!text-2xl !lg:!text-3xl !xl:!text-4xl !font-bold !text-gray-800 !leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {blog.topic}
              </motion.h2>
              <motion.div
                className="!prose !prose-sm !md:!prose-base !lg:!prose-lg !max-w-none !text-justify !text-gray-700 !leading-relaxed !space-y-4 !prose-headings:!text-[#022759] !prose-headings:!font-bold !prose-a:!text-blue-600 !prose-a:!no-underline hover:!prose-a:!underline !prose-strong:!text-[#022759] !prose-code:!bg-gray-100 !prose-code:!px-2 !prose-code:!py-1 !prose-code:!rounded !prose-blockquote:!border-l-4 !prose-blockquote:!border-[#ADFB49] !prose-blockquote:!bg-gray-50 !prose-blockquote:!pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ReactMarkdown
                  components={{
                    // Custom heading renderer
                    h1: ({ children }) => (
                      <h1 className="!text-2xl !md:!text-3xl !font-bold !text-[#022759] !mt-8 !mb-4 !leading-tight">
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 className="!text-xl !md:!text-2xl !font-bold !text-[#022759] !mt-6 !mb-3 !leading-tight">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="!text-lg !md:!text-xl !font-bold !text-[#022759] !mt-5 !mb-2 !leading-tight">
                        {children}
                      </h3>
                    ),
                    // Custom paragraph renderer
                    p: ({ children }) => (
                      <p className="!mb-4 !leading-relaxed !text-gray-700">
                        {children}
                      </p>
                    ),
                    // Custom list renderers
                    ul: ({ children }) => (
                      <ul className="!list-disc !list-inside !space-y-2 !mb-4 !ml-4">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="!list-decimal !list-inside !space-y-2 !mb-4 !ml-4">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="!text-gray-700 !leading-relaxed">
                        {children}
                      </li>
                    ),
                    // Custom blockquote renderer
                    blockquote: ({ children }) => (
                      <blockquote className="!border-l-4 !border-[#ADFB49] !bg-gray-50 !pl-4 !py-2 !my-4 !italic !text-gray-600">
                        {children}
                      </blockquote>
                    ),
                    // Custom code renderer
                    code: ({ children, className }) => {
                      const isInline = !className;
                      return isInline ? (
                        <code className="!bg-gray-100 !px-2 !py-1 !rounded !text-sm !font-mono !text-gray-800">
                          {children}
                        </code>
                      ) : (
                        <pre className="!bg-gray-100 !p-4 !rounded-lg !overflow-x-auto !mb-4">
                          <code className="!text-sm !font-mono !text-gray-800">
                            {children}
                          </code>
                        </pre>
                      );
                    },
                    // Custom link renderer
                    a: ({ href, children }) => (
                      <a
                        href={href}
                        className="!text-blue-600 !no-underline hover:!underline !font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                    // Custom strong/bold renderer
                    strong: ({ children }) => (
                      <strong className="!font-bold !text-[#022759]">
                        {children}
                      </strong>
                    ),
                    // Custom emphasis/italic renderer
                    em: ({ children }) => (
                      <em className="!italic !text-gray-600">
                        {children}
                      </em>
                    ),
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </motion.div>
            </motion.div>

            {randomBlog && (
              <motion.div
                className="!lg:!col-span-2 !mt-8 !lg:!mt-0"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <motion.div
                  className="!shadow-md !hover:!shadow-lg !rounded-2xl !p-6 !md:!p-7 !bg-white !flex !flex-col !gap-5 !md:!gap-6 !border !border-gray-100 !transition-shadow !duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="!flex !items-center !gap-4 !md:!gap-5">
                    <motion.button
                      className="!px-3 !py-2 !border !border-gray-300 !text-xs !md:!text-sm !rounded-md !font-medium !text-gray-700 !bg-gray-50 hover:!bg-gray-100 !transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {randomBlog.organType || "Article"}
                    </motion.button>
                    <p className="!text-xs !md:!text-sm !text-gray-500 !font-medium">
                      {formattedDate}
                    </p>
                  </div>
                  <div className="!flex !flex-col !gap-3 !md:!gap-4">
                    <h3 className="!text-lg !md:!text-xl !font-bold !text-gray-800 !leading-tight">
                      {randomBlog.topic}
                    </h3>
                    <p className="!text-gray-600 !font-medium !text-sm !md:!text-base !leading-relaxed">
                      {randomBlog.content?.split(" ").slice(0, 40).join(" ") +
                        "..."}
                    </p>
                    <Link to={`/blog-detail/${randomBlog.slug}`}>
                      <motion.p
                        className="!text-blue-500 !underline !cursor-pointer !text-sm !md:!text-base !font-medium hover:!text-blue-600 !transition-colors"
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
