import { useState, useEffect } from "react";

export default function History() {
  const [moviesHistory, setMoviesHistory] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/history/data");
        const data = await response.json();
        const useless = data.shift();
        setMoviesHistory(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {moviesHistory&&moviesHistory.map((movie) => (
        <div className="watchlistMovies">
          <img src={movie.poster} alt="movie.poster.png" />

          <h1>{movie.name}</h1>
          <h2>{movie.year}</h2>
        </div>
      ))}
    </>
  );
}
