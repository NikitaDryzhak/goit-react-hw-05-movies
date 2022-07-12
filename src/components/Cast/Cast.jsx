import { getMovieCast } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(({ data }) => setMovieCast(data));
  }, [movieId]);
  const { cast } = movieCast;
  return (
    <div>
      {cast && (
        <ul className={s.listCast}>
          {cast.map(({ id, name, profile_path, character }) => {
            if (profile_path) {
              return (
                <li className={s.itemCast} key={id}>
                  <img
                    src={'https://image.tmdb.org/t/p/w500' + profile_path}
                    alt={name}
                    className={s.img}
                  />
                  <h5 className={s.name}>{name}</h5>
                  <p className={s.character}>Character: {character}</p>
                </li>
              );
            }
          })}{' '}
        </ul>
      )}
    </div>
  );
}
