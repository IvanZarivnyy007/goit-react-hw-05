import MovieList from '../components/MovieList/MovieList.jsx';
import { useState } from 'react';
import { getMovieSearch } from '../api/getFilms.js';

const MoviesPage = () => {
  const [movies, SetMovie] = useState([]);
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovieSearch(search)
      .then((data) => {
        SetMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
