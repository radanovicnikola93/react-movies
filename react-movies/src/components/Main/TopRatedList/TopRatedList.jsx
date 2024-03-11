import React, { useState, useEffect } from "react";
import Card from '../Card/Card'

const TopRatedList = ({isLightMode}) => {
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
    <section className={`grid ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <h2 className="grid__heading">Top Rated Movies</h2>
      <div className="grid__list">
        {topRatedList.slice(0, 5).map(element => {
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
  )
}

export default TopRatedList;