import { useLocation, Link } from 'react-router-dom';
import { ListFilms, ItemFilms } from './FilmsList.styled';

const FilmsList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListFilms>
      {movies.map(({ id, title, name }) => (
        <ItemFilms key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {title ?? name}
          </Link>
        </ItemFilms>
      ))}
    </ListFilms>
  );
};

export default FilmsList;
