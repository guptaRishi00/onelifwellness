export function getStrapiURL() {
  return import.meta.env.VITE_API_STRAPI || "http://127.0.0.1:1337";
}
