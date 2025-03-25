import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const API_KEY = '91febf8268e2e9d6df99eac124ecdab9';
const MOVIE_DETAILS_URL = `https://api.themoviedb.org/3/movie/`;

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`${MOVIE_DETAILS_URL}${movieId}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Помилка завантаження даних:', error));
  }, [movieId]);

  if (!movie) return <p>Завантаження...</p>;

  return (
    <div className="movie-details-container">
      <h1>{movie.title}</h1>

      <p>{movie.overview}</p>
      <p><strong>Рейтинг: </strong>{movie.vote_average}</p>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />

      <div className="additional-info">
        <h3>Додаткова інформація</h3>

        <div className="info-links">
          <Link to={`/movies/${movieId}/cast`} className="cast-button">
            Акторський склад
          </Link>
          <Link to={`/movies/${movieId}/reviews`} className="reviews-button">
            Відгуки
          </Link>
        </div>
      </div>

      <Link to="/movies" className="back-button">Назад до пошуку</Link>
    </div>
  );
}

export default MovieDetails;
