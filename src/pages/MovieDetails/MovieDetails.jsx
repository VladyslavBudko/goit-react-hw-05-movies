import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import RequestGallery from 'components/RequestGallery/RequestGallery';
import { fetchMovieId, BASE_POSTER_URL } from 'components/Api/Api';
import {
  Box,
  Container,
  MovieImg,
  Link,
  BackLink,
} from './MovieDetails.styled';
import { setReleaseVote } from 'services/round';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return null;

    async function getMovieId() {
      setStatus('pending');

      try {
        // якщо ID не число, а строка додаємо Number()
        // const getMovieId = await fetchMovieId(Number(movieId));

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

  // console.log(movieDetails);

  const {
    title,
    name,
    overview,
    tagline,
    poster_path,
    vote_average = 0,
    release_date,
  } = movieDetails;

  let imagePath = ``;
  !poster_path
    ? (imagePath = '/main')
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);

  return (
    <>
      <BackLink to={backLinkHref}>
        <span>Go back</span>
      </BackLink>
      <Box>
        <RequestGallery propStatus={status} />
        <MovieImg src={imagePath} alt={title || name} loading="lazy" />
        <Container>
          <h1>{title || name} </h1>
          <h2>{tagline}</h2>
          <h3>
            <b>Release date:</b>
            {release_date}
          </h3>
          <h3>
            <b>Vote average:</b>
            {setReleaseVote(vote_average) || `vote not found`}
          </h3>

          <h3>
            <b>Description:</b>
            {overview || `description not found`}
          </h3>
        </Container>
      </Box>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<h2>Loading: Movie details</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
