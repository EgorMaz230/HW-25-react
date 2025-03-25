import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css';

const API_KEY = '91febf8268e2e9d6df99eac124ecdab9';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const response = await fetch(`${SEARCH_URL}${query}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Помилка при пошуку фільмів:', error);
    }
  };

  return (
    <div className="movies-container">
      <h1>Пошук фільмів</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введіть назву фільму..."
        />
        <button type="submit">Пошук</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div className="movie-card">
                <img 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                  alt={movie.title} 
                />
                <div className="movie-overlay">
                  <div className="movie-info">
                    <i className="fa fa-play"></i>
                    <i className="fa fa-info-circle"></i>
                  </div>
                </div>
                <h3>{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
