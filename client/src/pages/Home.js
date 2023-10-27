import { useState, useRef, useEffect } from "react";
import ChosenMovieInformations from "../components/HomeMovie";
import MoviesRecommandationsSlides from "../components/MoviesRecommandationsSlides";

export default function Home() {
  const [movieSubmited, setMovieSubmited] = useState(false);
  const [movieChosen, setMovieChosen] = useState("");
  const [edit, setEdit] = useState(false);
  const [watchList, setWatchList] = useState("Add to Watchlist");
  const titleRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    const wlButton = async () => {
      try {
        const res = await fetch("http://localhost:5000/history/data");
        const data = await res.json();
        const movie = data.filter(
          (movies) => movies.name === movieChosen.Title
        );
        if (movie.length > 0) {
          if (movie[0].watchlist === false) {
            setWatchList("Add to Watchlist");
          } else {
            setWatchList("Delete from Watchlist");
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    wlButton();
  }, []);

  const submitIt = async (e) => {
    e.preventDefault();

    if (movieSubmited === false) {
      setMovieSubmited(true);
      searchThrowMovies(titleRef, yearRef);
    } else {
      setMovieSubmited(false);
    }
  };

  const searchThrowMovies = async (title, year) => {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${title.current.value}&y=${year.current.value}&apikey=8100788`
    );
    const data = await response.json();
    if (data.Response !== "False") {
      setMovieChosen(data);
      postItOrNot(function () {
        postMovies(data.Title, data.Year, data.Poster);
      }, data.Title);
    } else {
      setMovieChosen(null);
    }
  };

  const postMovies = async (titlu, an, posters) => {
    await fetch("http://localhost:5000/history/data", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: titlu,
        year: an,
        poster: posters,
        watchlist: false,
      }),
    });
  };

  const postItOrNot = async (action, names) => {
    try {
      const response = await fetch("http://localhost:5000/history/data");
      const data = await response.json();
      const isThisMovieOnHistoryAlready = data.filter(
        (history) => history.name === names
      );
      if (isThisMovieOnHistoryAlready.length === 0) {
        action();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const watchlistAdd = async (movie) => {
    if (edit === false) {
      setWatchList("Delete from Favourites");
      setEdit(true);
      watchlistPutReq(true, movie);
    } else {
      setWatchList("Add to Favourites");
      setEdit(false);
      watchlistPutReq(false, movie);
    }
  };

  const watchlistPutReq = async (trueOrFalse, movies) => {
    const req = await fetch(`http://localhost:5000/history/data/${movies}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        watchlist: trueOrFalse,
      }),
    });
    const res = await req.json();
  };

  return (
    <>
      {!movieSubmited ? (
        <div className="homePage">
          <div className="recomMovies">
            <MoviesRecommandationsSlides
              movie1={"The Gentlemen"}
              movie2={"Carlito's Way"}
              movie3={"Legends of the Fall"}
              movie4={"The Long Kiss Goodnight"}
              movie5={"Scent of a Woman"}
            />
          </div>
          <div className="form">
            <h1 className="watchlistTitle">CHOOSE A MOVIE</h1>
            <form className="homeForm" onSubmit={submitIt}>
              <div className="form">
                <br />
                <input
                  className="inputTitle"
                  type="text"
                  placeholder="Title"
                  ref={titleRef}
                />
                <br />
                <br />
                <input
                  className="inputYear"
                  type="text"
                  ref={yearRef}
                  placeholder="Year of Release"
                />
                <p className="attentionRule">
                  *In case the "Title" is unique, don't complete the "Year of
                  Release" field
                </p>
                <br />
                <button className="submitButton" type="submit">
                  SEARCH
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          {movieChosen !== null ? (
            <>
              <div className="buttonsContainer">
                <button className="backToSearch" onClick={submitIt}>
                  Back to Search
                </button>
                <button
                  className="addToFav"
                  onClick={() => watchlistAdd(movieChosen.Title)}
                >
                  {watchList}
                </button>
              </div>
              <ChosenMovieInformations movie={movieChosen} />
            </>
          ) : (
            <>
              <button className="backToSearch" onClick={submitIt}>
                Back to Search
              </button>
              <h1 className="ErrorNotFound">
                No Movie Found...Please Try Again!
              </h1>
            </>
          )}
        </>
      )}
    </>
  );
}
