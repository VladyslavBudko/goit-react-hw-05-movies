import { useLocation, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();

  console.log(`location in MoviesList`, location);

  if (!moviesArray) return;
  return (
    <ul>
      {moviesArray.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  moviesArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};