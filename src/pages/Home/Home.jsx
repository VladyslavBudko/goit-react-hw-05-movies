import { useState, useEffect } from 'react';
import fetchTrandingMovies from 'components/Api/Api';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
  //   const [home, setHome] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // axios.get(setHome)
    async function getTrandingMovies() {
      try {
        const movies = await fetchTrandingMovies();
        console.log(movies);
        setTrendingMovies(prevState => [...prevState, ...movies.results]);
      } catch (error) {
        console.log(error);
      }
    }

    getTrandingMovies();
  }, []);

  const MoviesList = ({ trendingMovies }) => {
    const location = useLocation();
    if (!trendingMovies) return;
    return (
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: location }} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <h1>Home</h1>
      <h1>Trending today</h1>
      <MoviesList moviesArray={trendingMovies} />
    </>
  );
};

export default Home;
