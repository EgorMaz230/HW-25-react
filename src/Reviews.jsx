import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Reviews.css';

const API_KEY = '91febf8268e2e9d6df99eac124ecdab9';
const REVIEWS_URL = `https://api.themoviedb.org/3/movie/`;

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${REVIEWS_URL}${movieId}/reviews?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Помилка завантаження відгуків:', error));
  }, [movieId]);

  return (
    <div className="reviews-container">
      <h2>Відгуки</h2>

      {reviews.length > 0 ? (
        <ul className="reviews-list">
          {reviews.map(review => (
            <li key={review.id}>
              <p className="review-author"><strong>{review.author}:</strong></p>
              <p className="review-content">{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Відгуків поки немає.</p>
      )}

      <Link to={`/movies`} className="back-button">Назад до фільмів</Link>
    </div>
  );
}

export default Reviews;
