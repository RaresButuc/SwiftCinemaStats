export default function ChosenMovieInformations({ movie }) {
  return (
    <div className="searchedMovie">
      <h1>{movie.Title}</h1>
      <img className="myimg" src={movie.Poster} alt="movie.poster.png" />
      <br></br>
      <h3 className="movieCategTag">Release Date:</h3>
      <h3>{movie.Released}</h3>

      <h3 className="movieCategTag">Directed by:</h3>
      <h3>{movie.Director}</h3>

      <h3 className="movieCategTag">Screenwriting by:</h3>
      <h3>{movie.Writer}</h3>

      <h3 className="movieCategTag">Actors:</h3>
      <h3>{movie.Actors}</h3>

      <h3 className="movieCategTag">Genres: </h3>
      <h3>{movie.Genre}</h3>

      <h3 className="movieCategTag">Plot:</h3>
      <h3>{movie.Plot}</h3>

      <h3 className="movieCategTag">Ratings: </h3>
      <h3>{movie.imdbRating}⭐</h3>
    </div>
  );
}
