import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './HomePage';
import Movies from './Movies';
import MovieDetails from './MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import './App.css'


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      </nav>

      <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/movies" element={<Movies />} />
  <Route path="/movies/:movieId" element={<MovieDetails />} />
  <Route path="/movies/:movieId/cast" element={<Cast />} />
  <Route path="/movies/:movieId/reviews" element={<Reviews />} />
</Routes>

    </>
  );
}

export default App;
