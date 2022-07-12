import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'services/api';
import s from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getMovies()
      .then(({ data }) => {
        setMovies([...data.results]);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Trending movies</h1>
      <ul className={s.moviesList}>
        {movies.map(({ id, poster_path, title }) => (
          <li key={id} className={s.listItem}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location.pathname + location.search }}
            >
              <img
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500/${poster_path}`
                }
                alt={title}
                className={s.img}
              />
              <p className={s.movieTitle}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
