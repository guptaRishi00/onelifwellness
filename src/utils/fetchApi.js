export async function fetchAPI(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_STRAPI_TOKEN}`,
      },
    });

    const contentType = response.headers.get("content-type");
    if (
      contentType &&
      contentType.includes("application/json") &&
      response.ok
    ) {
      const data = await response.json();
      return data.data;
    } else {
      return { status: response.status, statusText: response.statusText };
    }
  } catch (error) {
    console.error("Error GET data:", error);
    throw error;
  }
}
