import { useState, useEffect } from 'react';
import fetchTrandingMovies from 'components/Api/Api';
// import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    // axios.get(setHome)
    async function getTrandingMovies() {
      setStatus('pending');

      try {
        const movies = await fetchTrandingMovies(page);
        console.log('movies.results in try Home', movies.results);
        setTrendingMovies(prevState => [...prevState, ...movies.results]);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }

    getTrandingMovies();
  }, [page]);

  const MoviesList = ({ moviesArray }) => {
    // const location = useLocation();

    console.log(`moviesArray in MoviesList`, moviesArray);
    // console.log(`location in MoviesList`- location);

    if (!moviesArray) return;
    return (
      <ul>
        {moviesArray.map(movie => (
          <li key={movie.id}>
            {/* <NavLink to={`/movies/${movie.id}`} state={{ from: location }} /> */}
            <div>{movie.id}</div>
          </li>
        ))}
      </ul>
    );
  };

  const MovieGallery = () => {
    if (status === 'idle') {
      return <div>Input movie name</div>;
    }

    if (status === 'pending') {
      return <div>Panding</div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <h2>Resolved</h2>
          <MoviesList moviesArray={trendingMovies} />
        </>
      );
    }

    if (status === 'rejected') {
      return <div>Error </div>;
    }

    // if (movies && movies.length === 0) {
    //   return <div>Movie not found. Please try again!</div>;
    // }
  };

  return (
    <>
      <h1>Home</h1>
      <h1>Trending today</h1>
      <MovieGallery />
    </>
  );
};

export default Home;
