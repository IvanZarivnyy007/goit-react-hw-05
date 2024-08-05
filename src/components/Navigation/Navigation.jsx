import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink to="/" className={css.home}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.movie}>
            Movie
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
