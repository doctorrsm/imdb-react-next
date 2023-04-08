export default function Results({results}) {
  return (
    <ul>
    { results.map(movie => (
      <li key={movie.kinopoiskId}>
        <h3>{movie.nameRu}</h3>
        <p>{movie.year}</p>
        {/* <p>{movie.genres.join(', ')}</p> */}
        <img src={movie.posterUrl} alt={movie.nameRu} />
      </li>
    ))}
  </ul>
   
  )
}
