export default function ChosenMovieInformations({ movie }) {
  return (
    <div className="searchedMovieContainer">
      <div className="posterTitle">
        <img className="myimg" src={movie.Poster} alt="movie.poster.png" />
      </div>
      <h1 className="movieTitle">{movie.Title}</h1>
      <div className="movieDetails">
        <div className="movieCategColumn">
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Release Date:</h3>
            <h3>{movie.Released}</h3>
          </div>
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Directed by:</h3>
            <h3>{movie.Director}</h3>
          </div>
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Screenwriting by:</h3>
            <h3>{movie.Writer}</h3>
          </div>
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Actors:</h3>
            <h3>{movie.Actors}</h3>
          </div>
        </div>
        <div className="movieCategColumn">
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Genres:</h3>
            <h3>{movie.Genre}</h3>
          </div>
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Plot:</h3>
            <h3>{movie.Plot}</h3>
          </div>
          <div className="movieCategGroup">
            <h3 className="movieCategTag">Ratings:</h3>
            <h3>{movie.imdbRating}⭐</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
