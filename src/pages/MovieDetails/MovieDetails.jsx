import { Link } from 'components/Layout/Layout.styled';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  // console.log(useParams());

  // const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    // axios.get(setMovieDetails)
  }, [movieId]);

  if (!movieId) return null;

  return (
    <>
      <h1>Movie Details {movieId}</h1>
      <h2>Aditional information</h2>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default MovieDetails;
