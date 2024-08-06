import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviePage = lazy(() => import('./pages/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews.jsx')
);

import Navigation from './components/Navigation/Navigation.jsx';
// import { getMovieDetails, getMovieCredits } from './api/getFilms.js';

function App() {
  // getMovieCredits(848326);
  // getMovieDetails(848326);
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
