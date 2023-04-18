export const dynamic = "force-dynamic";

const API_KEY = process.env.API_KEY;

import Results from "@/components/Results";

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  let fetchUrl = null;
  if (genre === "fetchTrending") {
    fetchUrl =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
  }

  if (genre === "fetchTopRated") {
    fetchUrl =
      "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1";
  }

  if (!fetchUrl) {
    return null;
  }

  const res = await fetch(fetchUrl, {
    method: "GET",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60000 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  let movies = data.films;
  if (genre === "fetchTopRated") {
    movies = data.films;
  }
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <Results results={movies} />
    </>
  );
}
