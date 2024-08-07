import { getMovieCredits } from '../../api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const [movies, SetMovie] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieCredits(moviesId)
      .then((data) => {
        SetMovie(data.cast[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <div className="movie-details">
      <div className="cast-section">
        <h2>Actor</h2>
        <div className="cast-list">
          <div key={movies.id} className="actor-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movies.profile_path}`}
              alt={movies.name}
              className="actor-photo"
            />
            <div className="actor-info">
              <h3 className="actor-name">{movies.name}</h3>
              <p className="actor-character">Character {movies.character}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCast;
