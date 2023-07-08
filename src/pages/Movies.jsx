import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      {[
        'movie-1',
        'movie-2',
        'movie-3',
        'movie-4',
        'movie-5',
        'movie-6',
        'movie-7',
        'movie-8',
        'movie-9',
        'movie-10',
        'movie-11',
        'movie-12',
        'movie-13',
        'movie-14',
        'movie-15',
        'movie-16',
        'movie-17',
        'movie-18',
        'movie-19',
        'movie-20',
      ].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
