import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;

export default async function SearchPage({params}) {
    
    const fetchUrl =
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${params.searchTerm}&page=1`;
    
    const res = await fetch(fetchUrl, {
        method: "GET",
        headers: {
          "X-API-KEY": API_KEY,
          "Content-Type": "application/json",
        },
        next: { revalidate: 60000 },
      });

     if(!res.ok)  {
        throw new Error("Error fetching data");
     }

     const data = await res.json();

     const results = data;
     
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}

      {results && <Results results={results.films}/>}
    </div>
  )
}
