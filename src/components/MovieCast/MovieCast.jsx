import { getMovieCredits } from '../../api/getFilms';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const MovieCast = () => {
  const [movies, SetMovie] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCredits(moviesId)
      .then((data) => {
        SetMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default MovieCast;
