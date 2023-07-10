import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../util/api';
import { BASE_POSTER_URL, PLACEHOLDER } from '../../util/options';
import {
  FilmWrapper,
  StyledList,
  ListItem,
  FilmImg,
  FilmTitle,
  FilmDscr,
  GoBackLink,
  FilmSubTitle,
  StyledListDscr,
} from './MoviesDetails.styled';
import BeatLoader from 'react-spinners/BeatLoader';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink>
        <NavLink to={backLinkHref}>Go back</NavLink>
      </GoBackLink>
      <FilmWrapper>
        <FilmImg
          src={`${
            movie.poster_path
              ? BASE_POSTER_URL + movie.poster_path
              : PLACEHOLDER + '?text=' + (movie.title ?? movie.name)
          }`}
          alt="get"
        />
        <div>
          <FilmTitle>{movie.title ?? movie.name}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDscr>{movie.overview}</FilmDscr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDscr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDscr>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </ListItem>
        </StyledList>
        <Suspense fallback={<BeatLoader color="#36d7b7" />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
