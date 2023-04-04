export default function ChosenMovieInformations({ movie }) {
  return (
    <>
      <img src={movie.Poster} alt="movie.poster.png" />

      <h1>{movie.Title}</h1>
      <h2>{movie.Year}</h2>
      <h2>Director: {movie.Director}</h2>
      <h5>Plot: {movie.Plot}</h5>
    </>
  );
}
