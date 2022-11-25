import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import RequestGallery from 'components/RequestGallery/RequestGallery';
import { fetchMovieId, BASE_POSTER_URL } from 'components/Api/Api';
import { Container, MovieImg, Link } from './MovieDetails.styled';
import { setReleaseVote } from 'services/round';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

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

  const {
    title,
    name,
    overview,
    tagline,
    poster_path,
    vote_average = 0,
    release_date,
    // runtime,
    // production_companies,
    // genres,
  } = movieDetails;

  let imagePath = ``;
  !poster_path
    ? (imagePath = '/main')
    : (imagePath = `${BASE_POSTER_URL}/${poster_path}`);

  return (
    <>
      <Link to={backLinkHref}>
        <span>Go back</span>
      </Link>
      <RequestGallery propStatus={status} />
      <h1>Movie Details {movieId}</h1>
      <h2>Aditional information</h2>
      <Container>
        <h1>{title || name} </h1>
        <h2>{tagline}</h2>
        <MovieImg src={imagePath} alt={title || name} loading="lazy" />
        <p>
          <b>Release date:</b>
          {release_date}
        </p>
        <p>
          <b>Vote average:</b>
          {setReleaseVote(vote_average) || `vote not found`}
        </p>

        <p>
          <b>Description:</b>
          {overview || `description not found`}
        </p>
      </Container>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default MovieDetails;
