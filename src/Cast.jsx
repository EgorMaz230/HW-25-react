import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Cast.css';

const API_KEY = '91febf8268e2e9d6df99eac124ecdab9';
const CAST_URL = `https://api.themoviedb.org/3/movie/`;

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`${CAST_URL}${movieId}/credits?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setCast(data.cast))
      .catch(error => console.error('Помилка завантаження акторів:', error));
  }, [movieId]);

  return (
    <div className="cast-container">
      <h2>Акторський склад</h2>

      <ul className="cast-list">
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <p className="actor-name">{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>

      <Link to={`/movies/${movieId}`} className="back-button">Назад до фільму</Link>
    </div>
  );
}

export default Cast;
