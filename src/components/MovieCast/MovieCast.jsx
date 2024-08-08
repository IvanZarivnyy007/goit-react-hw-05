import { getMovieCredits } from '../../api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [movies, SetMovie] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCredits(moviesId)
      .then((data) => {
        SetMovie(data.cast);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <div className="movie-details">
      <div className="cast-section">
        <h2>Actors</h2>
        <ul className="cast-list">
          {movies.map((movie) => (
            <li key={movie.id} className="actor-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.profile_path}`}
                alt={movie.name}
                className="actor-photo"
              />
              <div className="actor-info">
                <h3 className="actor-name">{movie.name}</h3>
                <p className="actor-character">Character {movie.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCast;
