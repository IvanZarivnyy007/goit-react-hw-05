import { useEffect, useState } from 'react';
import { getTrendingMovie } from '../api/getFilms';
import MovieList from '../components/MovieList/MovieList';
import { GiFilmProjector } from 'react-icons/gi';

const HomePage = () => {
  const [movies, SetMovie] = useState([]);

  useEffect(() => {
    getTrendingMovie()
      .then((data) => {
        SetMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const style = { color: 'red', size: '90px' };

  return (
    <div>
      <h1 className="popular-movies">
        Popular Movies Today <GiFilmProjector style={style} />
      </h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
