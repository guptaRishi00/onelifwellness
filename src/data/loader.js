import qs from "qs";
import { getStrapiURL } from "../utils/getStrapiUrl";
import { fetchAPI } from "../utils/fetchApi";
import axios from "axios";
// import { X } from "lucide-react";

const blogQuery = qs.stringify({
  populate: {
    picture: {
      fields: ["url", "alternativeText"],
    },
    category: {
      fields: ["name"],
    },
  },
});

export async function getAllBlogs() {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);

  url.search = blogQuery;

  return await fetchAPI(url.href);
}

export async function getBlog(slug) {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_API_STRAPI
      }/api/pages?filters[slug][$eq]=${slug}&populate=*`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
        },
      }
    );

    const post = response.data;
    if (!post) return null;

    return post;
  } catch (error) {
    console.error("Error fetching post by slug:", err);
    return null;
  }
}

export const getAllBlogPost = async (page, pageSize) => {
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

export const getCategories = async () => {
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
