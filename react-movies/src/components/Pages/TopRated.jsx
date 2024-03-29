import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from '../Main/Card/Card';

const TopRated = ({isLightMode, displayNumItems, notStretched}) => {
  const [topRatedList, setTopRatedList] = useState([]);

    // FETCH DATA
    useEffect(() => {
      const url =
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const options = {
          method: "GET",
          headers: {
              accept: "application/json",
              Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDE2N2U2ZjZiOGRhYmIwMTgwYjQxOWRmYjU0ODBmOCIsInN1YiI6IjY1ZWMxY2UxOWE2NDM1MDE2MjJkMGJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Zlhl4mWKZGi7wMz21f1-Vtdf7i6noLniT9wZzconC4",
          },
      };

      async function getTopRatedMoviesData() {
        try {
          const response = await fetch(url, options);
          const data = await response.json();
          setTopRatedList(data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getTopRatedMoviesData()
  }, []);

  return (
    <main className={`main ${notStretched ? 'main--not-stretched' : ''} ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <section className={`grid ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
        <Link to={'/top_rated'}>
        <h2 className="grid__heading">Top Rated Movies</h2>
        </Link>
        <div className="grid__list">
          {topRatedList.slice(0, (displayNumItems ?? 20)).map(element => {
            return (
              <Card 
                key={element.id}
                id={element.id}
                title={element.title}
                posterImg={element.poster_path}
                releaseDate={element.release_date}
                voteAverage={element.vote_average}
                voteCount={element.vote_count}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default TopRated;