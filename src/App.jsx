import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'


// import MovieCast from './components/MovieCast';
// import MovieList from './components/MovieList/MovieList';
// import MovieReviews from './components/MovieReviews/MovieReviews';
// import Navigation from './components/Navigation/Navigation';




import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage';
import MoviePage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {




  return (
    <div className="container">
    <header className='header'>
      
      <nav className='nav'>
        <NavLink to="/" className= 'home'>
          Home
        </NavLink>
        <NavLink to="/" className='movie'>
          Movie
        </NavLink>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<MoviePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
     
  )
  
}

export default App
