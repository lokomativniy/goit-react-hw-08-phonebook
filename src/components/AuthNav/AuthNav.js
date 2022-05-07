import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
const setActiveLink = ({ isActive }) => (isActive ? s.activeLink : s.link);

const AuthNav = () => (
  <nav className={s.list}>
    <NavLink to="/" className={setActiveLink}>
      Home
    </NavLink>
    <NavLink to="/register" className={setActiveLink}>
      Sign up
    </NavLink>
    <NavLink to="/login" className={setActiveLink}>
      Log in
    </NavLink>
  </nav>
);

export default AuthNav;
