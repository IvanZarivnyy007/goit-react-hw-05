import { useEffect } from 'react';
import { getMovieDetails } from '../api/getFilms';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = ({}) => {
  const [movies, SetMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId)
      .then((data) => {
        console.log(data);
        SetMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);
  return <div></div>;
};

export default MovieDetailsPage;
