import React, { useState, useEffect } from "react";
import Card from '../Card/Card'

const TrendingList = ({isLightMode}) => {
  const [trendingList, setTrendingList] = useState([]);

    // FETCH DATA
    useEffect(() => {
      const url =
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
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
          setTrendingList(data.results)
        } catch(error) {
          console.error(error)
        }
      }
      getTrendingMoviesData()
  }, []);

  return (
    <section className={`grid ${isLightMode ? 'light-mode' : 'dark-mode'}`}>
      <h2 className="grid__heading">Trending Movies</h2>
      <div className="grid__list">
        {trendingList.slice(0, 5).map(element => {
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

export default TrendingList;