import { getMovieReviews } from '../../api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const [movie, SetMovies] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieReviews(moviesId)
      .then((data) => {
        SetMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  if (movie.length === 0) {
    return <p>No information</p>;
  }

  return (
    <div>
      <div className="movie-card">
        <div className="reviews-section">
          {movie.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-content">
                <h3>{review.author}</h3>
                <p>{review.content}</p>
                <p>{new Date(review.created_at).toLocaleDateString()}</p>
                <a href={review.url} target="_blank" rel="noopener noreferrer">
                  Load More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieReviews;
