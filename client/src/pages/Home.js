import { useState, useRef } from "react";
import ChosenMovieInformations from "../components/HomeMovie";

export default function Home() {
  const [movieSubmited, setMovieSubmited] = useState(false);
  const [movieChosen, setMovieChosen] = useState("");
  const titleRef = useRef(null);
  const yearRef = useRef(null);

  const submitIt = async () => {
    if (movieSubmited === false) {
      setMovieSubmited(true);
      console.log(yearRef.current.value);
      if (titleRef.current.value && !yearRef.current.value) {
        const response = await fetch(
          `http://www.omdbapi.com/?t=${titleRef.current.value}&apikey=8100788`
        );
        const data = await response.json();
        setMovieChosen(data);
      } else if (titleRef.current.value && yearRef.current.value) {
        const response = await fetch(
          `http://www.omdbapi.com/?t=${titleRef.current.value}&y=${yearRef.current.value}&apikey=8100788`
        );
        const data = await response.json();
        console.log(yearRef);
        setMovieChosen(data);
        console.log(123);
      }
    } else {
      setMovieSubmited(false);
      setMovieChosen("");
    }
  };

  return (
    <>
      {!movieSubmited ? (
        <>
          <h1>Home</h1>
          <form onSubmit={submitIt}>
            <label>Title:</label>
            <br />
            <input type="text" ref={titleRef} />
            <br />
            <br />
            <label>Year of Release:</label>
            <br />
            <input type="text" ref={yearRef} />
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <button onClick={submitIt}>Back to Search</button>
          <br></br>
          <br></br>
          <ChosenMovieInformations movie={movieChosen} />
        </>
      )}
    </>
  );
}
