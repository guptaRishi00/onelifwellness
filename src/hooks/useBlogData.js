import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

const getAllBlogPost = async (page, pageSize) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_STRAPI
    }/api/pages?populate[picture][fields][0]=url&populate[picture][fields][1]=alternativeText&populate[category][fields][0]=name&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  );
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_STRAPI}/api/categories?fields=name`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  );
  return response.data;
};

export const useBlogData = (page) => {
  const [blogPost, setBlogPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const [blogPostResponse, categoriesResponse] = await Promise.all([
        getAllBlogPost(page, 6),
        categories.length > 0
          ? Promise.resolve({ data: categories })
          : getCategories(),
      ]);

      setBlogPost(blogPostResponse.data || []);
      setPageCount(blogPostResponse.meta?.pagination?.pageCount || 1);

      if (categories.length === 0) {
        setCategories(categoriesResponse.data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching blog data:", err);
    } finally {
      setIsLoading(false);
    }
  }, [page, categories.length]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const latestPost = useMemo(() => {
    if (!Array.isArray(blogPost) || blogPost.length === 0) return null;

    const sorted = [...blogPost].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return sorted[0] || blogPost[0];
  }, [blogPost]);

  const getFilteredPosts = useCallback(
    (selectedCategory) => {
      if (!selectedCategory || !Array.isArray(blogPost)) return blogPost;

      const categoryString =
        typeof selectedCategory === "string"
          ? selectedCategory
          : String(selectedCategory);

      return blogPost.filter(
        (blog) =>
          blog?.category?.name?.toLowerCase().trim() ===
          categoryString.toLowerCase().trim()
      );
    },
    [blogPost]
  );

  return {
    blogPost,
    categories,
    pageCount,
    isLoading,
    error,
    latestPost,
    getFilteredPosts,
  };
};
