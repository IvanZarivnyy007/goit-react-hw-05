import MovieList from '../components/MovieList/MovieList.jsx';
import { useEffect, useState } from 'react';
import { getMovieSearch } from '../api/getFilms.js';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, SetMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [seachParams, setSeachParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeachParams({ name: search });
    getMovieSearch(search)
      .then((data) => {
        SetMovie(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const q = seachParams.get('name');

    if (q) {
      getMovieSearch(q)
        .then((data) => {
          SetMovie(data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

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
