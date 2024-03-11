const url =  "https://api.themoviedb.org/3/genre/movie/list?language=en";
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
    console.log(data)
    return data;
  } catch(error) {
    console.error(error)
  }
}
      

const genresData = getTrendingMoviesData();
export default genresData;