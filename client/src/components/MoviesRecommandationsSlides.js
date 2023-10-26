import { useState, useEffect } from "react";

export default function MoviesRecommandationsSlides({
  movie1,
  movie2,
  movie3,
  movie4,
}) {
  const [movies1Recommanded, setMovie1Recommanded] = useState(null);
  const [movies2Recommanded, setMovie2Recommanded] = useState(null);
  const [movies3Recommanded, setMovie3Recommanded] = useState(null);
  const [movies4Recommanded, setMovie4Recommanded] = useState(null);

  useEffect(() => {
    const moviesRecommandedFetced = async () => {
      try {
        for (let i = 1; index < 5; index++) {
            const movieTitle = i === 1 ? movie1 : i === 2 ? movie2 : i === 3 ? movie3 : movie4;
            
            const response = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&y=null&apikey=8100788`);
            const data = await response.json();
            setMoviesWl(favourites);
        }
      } catch (err) {
        console.log(err);
      }
    };
    moviesRecommandedFetced();
  }, []);

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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
    <>
      <div class="slideshow-container">
        <div class="mySlides fade">
          <img src="img1.jpg" />
          <div class="text">movie1.Title</div>
        </div>

        <div class="mySlides fade">
          <img src="img2.jpg" style="width:100%" />
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <img src="img3.jpg" style="width:100%" />
          <div class="text">Caption Three</div>
        </div>

        <div class="mySlides fade">
          <img src="img4.jpg" style="width:100%" />
          <div class="text">Caption Three</div>
        </div>

        <a class="prev" onclick={plusSlides(-1)}>
          &#10094;
        </a>
        <a class="next" onclick={plusSlides(1)}>
          &#10095;
        </a>
      </div>
      <br />

      <div style="text-align:center">
        <span class="dot" onclick={currentSlide(1)}></span>
        <span class="dot" onclick={currentSlide(2)}></span>
        <span class="dot" onclick={currentSlide(3)}></span>
        <span class="dot" onclick={currentSlide(4)}></span>
      </div>
    </>
  );
}
