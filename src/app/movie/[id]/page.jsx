import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function MoviePage({params}) {
    const movieId = params.id;
    console.log(movieId)
    const fetchUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${movieId}`;
    const res = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
        next: { revalidate: 60000 },
      });
    const movie = await res.json();
    
  return (
    <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image src={movie.posterUrl} alt={movie.nameRu} width={500} height={300}
        className="rounded-lg"
        style={{
            maxWidth: "100%",
            height: "100%",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        ></Image>
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.nameRu}</h2>
            <p className="text-lg mb-3"><span className="font-semibold mr-1">Overview:</span>
            {movie.description}
            </p>
            <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span> {movie.year}</p>
            <p className="mb-3"><span className="font-semibold mr-1">Rating:</span> {movie.ratingKinopoisk || movie.ratingImdb}</p>
        </div>
        </div>
      
    </div>
  )
}
