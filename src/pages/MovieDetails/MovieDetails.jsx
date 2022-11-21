import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(useParams());

  return <h1>Movie Details {movieId}</h1>;
};
export default MovieDetails;
