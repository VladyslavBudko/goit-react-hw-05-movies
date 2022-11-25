import { useState, useEffect } from 'react';
import { fetchTrandingMovies } from 'components/Api/Api';
import MoviesList from 'components/MoviesList/MoviesList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import RequestGallery from 'components/RequestGallery/RequestGallery';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // axios.get(setHome)
    async function setTrandingMovies() {
      setStatus('pending');

      try {
        if (page === 0) {
          setPage(1);
          return;
        }
        const movies = await fetchTrandingMovies(page);
        setTrendingMovies(prevState => [...prevState, ...movies.results]);
        setTotal(movies.total);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }

    setTrandingMovies();
  }, [page]);

  return (
    <>
      <h1>Home</h1>
      <h1>Trending today</h1>
      <RequestGallery propStatus={status}/>
      <>
        <MoviesList moviesArray={trendingMovies} />
        {trendingMovies.length < total && (
          <LoadMoreBtn onClick={() => setPage(prevState => prevState + 1)} />
        )}
      </>
    </>
  );
};

export default Home;
