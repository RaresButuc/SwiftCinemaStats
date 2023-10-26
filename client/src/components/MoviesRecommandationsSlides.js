import { useState, useEffect } from "react";

export default function MoviesRecommandationsSlides({
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
}) {
  const [movies1Recommanded, setMovie1Recommanded] = useState(null);
  const [movies2Recommanded, setMovie2Recommanded] = useState(null);
  const [movies3Recommanded, setMovie3Recommanded] = useState(null);
  const [movies4Recommanded, setMovie4Recommanded] = useState(null);
  const [movies5Recommanded, setMovie5Recommanded] = useState(null);

  const allMoviesFetched = [
    movies1Recommanded,
    movies2Recommanded,
    movies3Recommanded,
    movies4Recommanded,
    movies5Recommanded,
  ];

  let slideIndex = 1;

  useEffect(() => {
    const moviesRecommendedFetched = async () => {
      try {
        for (let i = 1; i <= allMoviesFetched.length; i++) {
          const movieTitle =
            i === 1
              ? movie1
              : i === 2
              ? movie2
              : i === 3
              ? movie3
              : i === 4
              ? movie4
              : movie5;

          const response = await fetch(
            `http://www.omdbapi.com/?t=${movieTitle}&y=null&apikey=8100788`
          );
          const data = await response.json();

          switch (i) {
            case 1:
              setMovie1Recommanded(data);
              break;
            case 2:
              setMovie2Recommanded(data);
              break;
            case 3:
              setMovie3Recommanded(data);
              break;
            case 4:
              setMovie4Recommanded(data);
              break;
            case 5:
              setMovie5Recommanded(data);
              break;
            default:
              break;
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    moviesRecommendedFetched();
  }, []);

  useEffect(() => {
    showSlides(slideIndex);
  }, [allMoviesFetched]);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0 || dots.length === 0) {
      return;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  return (
    <div className="slideshow-container">
      {allMoviesFetched[4] !== null &&
        allMoviesFetched.map((movie, index) => (
          <div className="mySlides fade" key={index}>
            <img src={movie.Poster} alt={movie.Title} />
            <div className="text">{movie.Title}</div>
          </div>
        ))}

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
        <span className="dot" onClick={() => currentSlide(4)}></span>
        <span className="dot" onClick={() => currentSlide(5)}></span>
      </div>
    </div>
  );
}
