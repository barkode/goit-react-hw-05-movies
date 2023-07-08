import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return <>MovieDetails</>;
};

export default MovieDetails;
