import { Link } from 'components/Layout/Layout.styled';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieId } from 'components/Api/Api';
import RequestGallery from 'components/RequestGallery/RequestGallery';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieDetails, setMovieDetails] = useState({});

  // const location = useLocation();
  // const backLinkHref = location?.state?.from ?? '/movies'

  useEffect(() => {
    if (!movieId) return null;

    async function getMovieId() {
      setStatus('pending');

      try {
        const getMovieId = await fetchMovieId(movieId);
        setMovieDetails(getMovieId);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        console.log(error);
      }
    }

    getMovieId();
  }, [movieId]);

  console.log(movieDetails);

  return (
    <>
      <h1>Movie Details {movieId}</h1>
      <h2>Aditional information</h2>
      <RequestGallery propStatus={status} />
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default MovieDetails;
