export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchMovie = async ({ query }: { query: string }) => {
  const endPoint = query
    ? `${TMDB_CONFIG.BASE_URL}/discover/movie?query=${encodeURIComponent(
        query
      )}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
  const response = await fetch(endPoint, {
    method: "GET",
    headers: TMDB_CONFIG.Headers,
  });
  if (!response.ok) {
    throw new Error("Failed to fetch movies ");
  }
  const data = await response.json();
  return data.results;
};
