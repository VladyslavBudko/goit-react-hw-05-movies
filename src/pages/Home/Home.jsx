import { useState, useEffect } from 'react';
import fetchTrandingMovies from 'components/Api/Api';
import MoviesList from 'components/MoviesList/MoviesList'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrandingMovies() {
      try {
        const movies = await fetchTrandingMovies();
        console.log(movies.results);
        setTrendingMovies(prevState => [...prevState, ...movies.results]);
        // console.log(trendingMovies)

      } catch (error) {
        console.log(error);
      }
    }

    getTrandingMovies();
  }, []);


  return (
    <>
      <h1>Home</h1>
      <h1>Trending today</h1>
      <MoviesList moviesArray={trendingMovies} />
    </>
  );
};

export default Home;
