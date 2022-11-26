import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<h2>Loading: Movie list</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
