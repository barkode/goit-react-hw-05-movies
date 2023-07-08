import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />} />
          {/* <Route path="movies/:movieId/cast" element={<MovieCasts />} /> */}
          {/* <Route path="movies/:movieId/reviews" element={<MovieReviews />} /> */}
        </Route>

        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </div>
  );
};
