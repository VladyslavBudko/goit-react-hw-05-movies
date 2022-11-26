import { useLocation, NavLink } from 'react-router-dom';
import { BASE_POSTER_URL } from 'components/Api/Api';
import { List, Container } from './MoviesList.styled';

import PropTypes from 'prop-types';

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();
  // console.log(`location in MoviesList`, location);
  // console.log(moviesArray);

  if (!moviesArray) return;

  return (
    <List>
      {moviesArray.map(({ id, poster_path, title }) => (
        <Container key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              width="200px"
              height="300px"
              src={poster_path ? BASE_POSTER_URL + poster_path : ''}
              alt={title}
              loading="lazy"
            />
            <div>{title}</div>
          </NavLink>
        </Container>
      ))}
    </List>
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
