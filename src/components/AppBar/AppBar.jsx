import s from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

export function AppBar() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? s.active : s.navLink)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={navData => (navData.isActive ? s.active : s.navLink)}
      >
        Movies
      </NavLink>
    </nav>
  );
}
