import { useState, useEffect } from "react";

export default function Watchlist() {
  const [moviesWl, setMoviesWl] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/history/data");
        const data = await response.json();
        const useless = data.shift();
        const favourites = data.filter((fav) => fav.watchlist === true);
        setMoviesWl(favourites);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {moviesWl&&moviesWl.map((movie) => (
        <div className="watchlistMovies">
          <img src={movie.poster} alt="movie.poster.png" />

          <h1>{movie.name}</h1>
          <h2>{movie.year}</h2>
        </div>
      ))}
    </>
  );
}