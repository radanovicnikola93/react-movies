import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleItem = ({isLightMode}) => {
    const params = useParams();
    const [movie, setMovie] = useState(null);

    // FETCH DATA
    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`;
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
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        }
        getTrendingMoviesData();
    }, [params.id]);

    console.log(movie)
    return (
      <main className={`main main-p-i-0 ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
        {movie ? 
          <section className={`single-item ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
          <div className="single-item__backdrop" style={{ backgroundImage: `url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`}}></div>
          <article className="single-item__container">
            <div className="single-item__header mb-14">
              <div className="single-item__main-img">
                <img className="main-img__img" src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}  alt={movie.title} />
              </div>
              <h1 className="single-item__heading">{movie.title}</h1>
            </div>
            <div className="mb-14">
              <p className="single-item__italic">"{movie.tagline}"</p>
            </div>
            <div className="single-item__bullets mb-14">
              <span className="bullets__bullet">{movie.vote_average.toFixed(1)}</span>
              {movie.genres.map(genre => {
                return <span key={genre.id} className="bullets__bullet bullets__bullet--secondary">{genre.name}</span>
              })}
            </div>
            <div className="mb-14">
              <a className="single-item__link" href={movie.homepage} target="_blank" rel="noreferrer">Homepage</a>
            </div>
            <div className="mb-14">
              <p className="single-item__desc">{movie.overview}</p>
            </div>
            <div className="mb-14">
              <p className="single-item__italic">Release date: {movie.release_date}</p>
            </div>
          </article>
        </section> :
        <div>Loading data...</div>
        }
      </main>
    );
};

export default SingleItem;
