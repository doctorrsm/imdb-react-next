import Card from './Card';
export default function Results({results}) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cold-5 max-w-6xl mx-auto py-4">
      {results.map(movie => (
         <Card key={movie.kinopoiskId} result={movie} /> 
      ))}
    </div>

  
  //   <ul>
  //   { results.map(movie => (
  //     <li key={movie.kinopoiskId}>
  //       <h3>{movie.nameRu}</h3>
  //       <p>{movie.year}</p>
  //       {/* <p>{movie.genres.join(', ')}</p> */}
  //       <img src={movie.posterUrl} alt={movie.nameRu} />
  //     </li>
  //   ))}
  // </ul>
   
  )
}
