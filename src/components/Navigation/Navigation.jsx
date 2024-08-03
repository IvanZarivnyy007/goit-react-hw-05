import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="container">
      <header className="header">
        <nav className="navigation">
          <NavLink to="/" className="home">
            Home
          </NavLink>
          <NavLink to="/movie" className="movie">
            Movie
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;

// import MovieCast from './components/MovieCast';
// import MovieList from './components/MovieList/MovieList';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import Navigation from './components/Navigation/Navigation';
