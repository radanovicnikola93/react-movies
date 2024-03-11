import { React, useEffect, useState } from "react";
import JumbotronCard from "./JumbotronCard";

const Jumbotron = ({ isLightMode }) => {
    const [popularMoviesData, setPopularMoviesData] = useState([]);
    const [index, setIndex] = useState(0);

    // FETCH DATA
    useEffect(() => {
        const url =
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE2N2U2ZjZiOGRhYmIwMTgwYjQxOWRmYjU0ODBmOCIsInN1YiI6IjY1ZWMxY2UxOWE2NDM1MDE2MjJkMGJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Zlhl4mWKZGi7wMz21f1-Vtdf7i6noLniT9wZzconC4",
            },
        };

        async function getTrendingMoviesData() {
          try {
            const response = await fetch(url, options);
            const data = await response.json();
            setPopularMoviesData(data.results)
          } catch(error) {
            console.error(error)
          }
        }
        getTrendingMoviesData()
    }, []);

    // INITIATE INDEX FOR CAROUSEL
    useEffect(() => {
      const lastIndex = popularMoviesData.slice(0, 5).length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, popularMoviesData]);

    // AUTOSLIDE FEAUTURE FOR CAROUSEL
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 3500);
      return () => clearInterval(slider);
    }, [index]);


    return (
        <section
            className={`jumbotron ${isLightMode ? "light-mode" : "dark-mode"}`}
        >
            <div className="jumbotron__carousel">
                <div className="carousel__track">
                {popularMoviesData.slice(0, 5).map((element, carouselIndex) => {
                    let classNamePosition = "nextItem";
                    if (carouselIndex === index) {
                      classNamePosition = "activeItem";
                    }
                    if (
                      carouselIndex === index - 1 ||
                      (index === 0 && carouselIndex === popularMoviesData.slice(0, 5).length - 1)
                    ) {
                      classNamePosition = "lastItem";
                    }
                    return (
                        <JumbotronCard
                            key={element.id}
                            backgroundImg={element.backdrop_path}
                            mainImg={element.poster_path}
                            title={element.title}
                            overview={element.overview}
                            averageVote={element.vote_average}
                            carouselIndex={index}
                            classNamePosition={classNamePosition}
                        />
                    );
                })}
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;
