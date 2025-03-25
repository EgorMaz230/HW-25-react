import { useEffect, useState } from 'react';
import './HomePage.css';  
import { Link } from 'react-router-dom';

const API_KEY = '91febf8268e2e9d6df99eac124ecdab9';
const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Помилка завантаження фільмів:', error));
  }, []);

  const handleMovieClick = (movieId) => {
    const movie = movies.find((m) => m.id === movieId);
    setSelectedMovie(movie);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="homepage-container">
      {selectedMovie ? (
        <div className="movie-details">
          <button onClick={handleBackToList} className="back-button">Назад</button>
          <h1 className="movie-title">{selectedMovie.title}</h1>
          <img 
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} 
            alt={selectedMovie.title} 
            className="movie-poster"
          />
          <p className="movie-overview">{selectedMovie.overview}</p>
          <p className="movie-rating">Рейтинг: {selectedMovie.vote_average}</p>

          <div className="additional-info">
            <h3>Додаткова інформація</h3>
            <div className="info-links">
              <Link to={`/movies/${selectedMovie.id}/cast`} className="cast-button">
                Акторський склад
              </Link>
              <Link to={`/movies/${selectedMovie.id}/reviews`} className="reviews-button">
                Відгуки
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="movies-list">
          <h1>Популярні фільми</h1>
          <ul className="movies-grid">
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleMovieClick(movie.id)} className="movie-item">
                <div className="movie-card">
                  <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                    className="movie-poster-thumbnail"
                  />
                  <div className="movie-overlay">
                    <div className="movie-info">
                      <i className="fa fa-play"></i>
                      <i className="fa fa-info-circle"></i>
                    </div>
                  </div>
                  <h3 className="movie-title">{movie.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
