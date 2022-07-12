import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieById } from 'services/api';
import s from './MovieInfo.module.css';

export default function MovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getMovieById(movieId).then(({ data }) => setMovie(data));
  }, [movieId]);
  const Date = String(movie.release_date).slice(0, 4);
  const userScore = movie.vote_average * 10;
  const { original_title, overview, genres, poster_path } = movie;
  const location = useLocation();
  const navigate = useNavigate();

  const comeBack = () => {
    navigate(location?.state?.from ?? '/');
  };
  return (
    <div>
      <div>
        <button className={s.btn} onClick={comeBack}>
          Go back
        </button>
      </div>

      <div className={s.movieCard}>
        <img
          src={'https://image.tmdb.org/t/p/w500/' + poster_path}
          alt={original_title}
          className={s.movieImg}
        />
        <div className={s.movieInfo}>
          <h2 className={s.title}>
            {original_title} {'(' + Date + ')'}
          </h2>
          <p>User score: {userScore}%</p>
          <h5>Overview</h5>
          <p>{overview}</p>
          <h5>Genres </h5>
          {genres && (
            <ul className={s.listGenres}>
              {genres.map(({ id, name }) => {
                return (
                  <li className={s.itemGenres} key={id}>
                    {name}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className={s.linkSection}>
        <h3>Additional information</h3>
        <NavLink
          to="cast"
          className={navData => (navData.isActive ? s.active : s.link)}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={navData => (navData.isActive ? s.active : s.link)}
        >
          Reviews
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
}
