import { useEffect, useState } from 'react';
import { getMovieDetails } from '../api/getFilms';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetailsPage = ({}) => {
  const [movies, SetMovie] = useState({});
  // const location = useLocation();
  const { moviesId } = useParams();

  useEffect(() => {
    getMovieDetails(moviesId)
      .then((data) => {
        console.log(data);
        SetMovie(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  return (
    <>
      <NavLink to="/">Go to Home page</NavLink>;
      <div className="movie-card">
        <img
          className="backdrop"
          src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
          alt={`${movies.title} backdrop`}
        />
        <div className="content">
          <h2 className="title">{movies.title}</h2>
          <p className="original-title">{movies.original_title}</p>
          <p className="overview">{movies.overview}</p>
          <p className="release-date">Release Date: {movies.release_date}</p>
          <p className="vote-average">Rating: {movies.vote_average}</p>
          {/* <div className="genres">
          {movies.genre_ids.map((id) => (
            <span key={id} className="genre">
              {genres[id]}
            </span>
          ))}
          s
        </div> */}
          <img
            className="poster"
            src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
            alt={`${movies.title} poster`}
          />
        </div>
        {/* <NavLink to={`/movies/${movieId}/cast`}>Movie Cast</NavLink>
      <NavLink to={`/movies/${movieId}/reviews`}>Movie Reviews</NavLink> */}
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
