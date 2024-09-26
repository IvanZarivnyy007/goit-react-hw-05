import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from '../api/getFilms';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { IoMdReturnLeft } from 'react-icons/io';

const MovieDetailsPage = () => {
  const [movies, SetMovies] = useState({});
  const location = useLocation();
  const { moviesId } = useParams();
  const ref = useRef(location.state?.from || '/');

  useEffect(() => {
    getMovieDetails(moviesId)
      .then((data) => {
        SetMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [moviesId]);

  const style = { size: '120px', padding: '5px' };

  return (
    <>
      <span className="span-link">
        <IoMdReturnLeft style={style} />
        <NavLink to={ref.current}>Go to Home page</NavLink>
      </span>

      <div className="movie-card">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          alt={`${movies.title} poster`}
        />

        <div className="content">
          <h2 className="title">{movies.title}</h2>
          <p className="original-title">{movies.original_title}</p>
          <p className="overview">{movies.overview}</p>
          <p className="release-date">Release Date: {movies.release_date}</p>
          <p className="vote-average">Rating: {movies.vote_average}</p>
        </div>
      </div>
      <div className="additional-container">
        <p className="additional-text">Additional Information</p>
        <div className="navlink-movie">
          <NavLink to="cast"> Cast</NavLink>
          <NavLink to="reviews">Reviews</NavLink>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
