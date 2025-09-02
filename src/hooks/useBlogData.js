import { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";

// Simple in-memory cache
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, { data, timestamp: Date.now() });
};

const getAllBlogPost = async (page, pageSize) => {
  const cacheKey = `all-blogs-${page}-${pageSize}`;
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const response = await axios.get(
    `${
      import.meta.env.VITE_API_STRAPI
    }/api/pages?populate[picture][fields][0]=url&populate[picture][fields][1]=alternativeText&populate[category][fields][0]=name&sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  );
  
  setCachedData(cacheKey, response.data);
  return response.data;
};

const getBlogPostsByCategory = async (category, page, pageSize) => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_STRAPI
    }/api/pages?populate[picture][fields][0]=url&populate[picture][fields][1]=alternativeText&populate[category][fields][0]=name&filters[category][name][$eq]=${category}&sort[0]=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  );
  return response.data;
};

const getCategories = async () => {
  const cacheKey = 'categories';
  const cachedData = getCachedData(cacheKey);
  
  if (cachedData) {
    return cachedData;
  }

  const response = await axios.get(
    `${import.meta.env.VITE_API_STRAPI}/api/categories?fields=name`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    }
  );
  
  setCachedData(cacheKey, response.data);
  return response.data;
};

export const useBlogData = (page, selectedCategory = null) => {
  const [blogPost, setBlogPost] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      let blogPostResponse;
      
      if (selectedCategory) {
        // Fetch posts filtered by category
        blogPostResponse = await getBlogPostsByCategory(selectedCategory, page, 6);
      } else {
        // Fetch all posts
        blogPostResponse = await getAllBlogPost(page, 6);
      }

      // Always fetch categories to ensure we have the latest data
      const categoriesResponse = await getCategories();

      setBlogPost(blogPostResponse.data || []);
      setPageCount(blogPostResponse.meta?.pagination?.pageCount || 1);
      setCategories(categoriesResponse.data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error("Error fetching blog data:", err);
    } finally {
      setIsLoading(false);
    }
  }, [page, selectedCategory, refreshTrigger]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Function to manually refresh data
  const refreshData = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  }, []);

  const latestPost = useMemo(() => {
    if (!Array.isArray(blogPost) || blogPost.length === 0) return null;

    const sorted = [...blogPost].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
    return sorted[0] || blogPost[0];
  }, [blogPost]);

  const getFilteredPosts = useCallback(
    (category) => {
      if (!category || !Array.isArray(blogPost)) return blogPost;

      const categoryString =
        typeof category === "string"
          ? category
          : String(category);

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
    refreshData,
  };
};
