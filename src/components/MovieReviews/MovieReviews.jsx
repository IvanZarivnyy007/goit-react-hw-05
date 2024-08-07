import { getMovieReviews } from '../../api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [movie, SetMovie] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId)
      .then((data) => {
        SetMovie(data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <div>
      <div className="movie-card">
        <div className="reviews-section">
          <div key={movie.id} className="review-card">
            <div className="review-content">
              <h3>{movie.author}</h3>
              <p>{movie.content}</p>
              <p>{new Date(movie.created_at).toLocaleDateString()}</p>
              <a href={movie.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieReviews;
