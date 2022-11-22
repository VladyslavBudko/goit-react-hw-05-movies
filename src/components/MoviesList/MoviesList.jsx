import { useLocation, NavLink  } from "react-router-dom";

const MoviesList = ({ moviesArray }) => {
  const location = useLocation();

  console.log(`location in MoviesList`- location);

  if (!moviesArray) return;
  return (
    <ul>
      {moviesArray.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} 
        //   state={{ from: location }} 
        //   />

        >{movie.title}</NavLink>
          {/* <div>{movie.title}</div> */}
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
