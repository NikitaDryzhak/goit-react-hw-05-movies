import { getMovieReview } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './Review.module.css';

export default function Review() {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    getMovieReview(movieId).then(({ data }) => setMovieReview(data));
  }, [movieId]);
  const { results } = movieReview;
  return (
    <div>
      {results ? (
        <ul className={s.listReview}>
          {results.map(({ id, author, content }) => {
            return (
              <li className={s.itemReview} key={id}>
                <h5 className={s.name}>{author}</h5>
                <p className={s.content}>{content}</p>
              </li>
            );
          })}{' '}
        </ul>
      ) : (
        <p>There is no reviews</p>
      )}
    </div>
  );
}
