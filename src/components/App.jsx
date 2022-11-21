import { Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import NotFound from '../pages/NotFound/NotFound';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Link, Container, Header } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            {/* <Link to="/movies/:movieId">Movie Details</Link> */}
          </nav>
        </Header>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />}/>
            <Route path="movies" element={<Movies />}>
              <Route path=":movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      {/* <Outlet /> */}

    </Container>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
