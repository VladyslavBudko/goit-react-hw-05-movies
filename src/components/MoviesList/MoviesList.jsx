// import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const MoviesList = ({ trendingMovies }) => {
  // const location = useLocation();
  console.log(trendingMovies);
  if (!trendingMovies) return;
  return (
    <>
      <div>MoviesList</div>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            {/* <NavLink to={`/movies/${movie.id}`} state={{ from: location }} /> */}
            <div>movie.id</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
