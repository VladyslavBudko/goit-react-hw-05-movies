import { Outlet } from 'react-router-dom';
import { Link, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="home">Home</Link>
          <Link to="movies">Movies</Link>
          {/* <Link to="/movies/:movieId">Movie Details</Link> */}
        </nav>
      </Header>
      <h1>Layout page</h1>
      <Outlet />

    </>
  );
};

export default Layout;
