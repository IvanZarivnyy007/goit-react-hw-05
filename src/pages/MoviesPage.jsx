import MovieList from '../components/MovieList/MovieList.jsx';
import { useEffect, useState } from 'react';
import { getMovieSearch } from '../api/getFilms.js';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, SetMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: search });
    getMovieSearch(search)
      .then((data) => {
        SetMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const q = searchParams.get('name');

    if (q) {
      getMovieSearch(q)
        .then((data) => {
          SetMovies(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchParams]);

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
