import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearchForm } from 'services/api';
import s from './SearchForm.module.css';

export default function Searchform() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  const inputChange = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
  };
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getMoviesBySearchForm(query)
        .then(({ data }) => {
          setMovieList([...data.results]);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [query]);
  return (
    <div>
      <form onSubmit={inputChange}>
        <button type="submit">Search</button>

        <input name="query" type="text" autoComplete="off"></input>
      </form>
      <div>
        <ul className={s.moviesList}>
          {movieList &&
            movieList.map(({ id, poster_path, title }) => (
              <li key={id} className={s.listItem}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className={s.img}
                  />
                  <p className={s.movieTitle}>{title}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
