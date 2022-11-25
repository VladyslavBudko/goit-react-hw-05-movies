import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchingByName } from 'components/Api/Api';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import LoadMoreBtn from 'components/LoadMoreBtn/LoadMoreBtn';
import RequestGallery from 'components/RequestGallery/RequestGallery';

const Movies = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('idle');
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;

    async function setQueriedMovies() {
      setStatus('pending');

      try {
        if (page === 0) {
          setPage(1);
          return;
        }
        const movies = await fetchingByName(query, page);
        setSearchedMovies(prevState => [...prevState, ...movies.results]);
        setTotal(movies.total);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }

    setQueriedMovies();
  }, [query, page]);

  const changeQuery = value => {
    setSearchParams(value !== '' ? { query: value } : {});
    setSearchedMovies([]);
    setPage(1);
    setTotal(0);
  };

  return (
    <>
      <h1>Movies</h1>
      <h1>Search Movie</h1>
      <RequestGallery propStatus={status} />

      <>
        <div>
          <SearchMovie value={query} onChange={changeQuery} />
          <>
            <MoviesList moviesArray={searchedMovies} />
          </>
          {searchedMovies &&
            status === 'resolved' &&
            searchedMovies.length < total && (
              <LoadMoreBtn
                onClick={() => setPage(prevState => prevState + 1)}
              />
            )}
        </div>
      </>
    </>
  );
};

export default Movies;
