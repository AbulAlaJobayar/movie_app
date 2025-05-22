export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_API_KEY,
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
};

export const fetchMovie = async ({ query }: { query: string }) => {
  console.log({query})
  const endPoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?api_key=${TMDB_CONFIG.API_KEY}&query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/movie/popular?api_key=${TMDB_CONFIG.API_KEY}`;

   console.log({endPoint}) 
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
