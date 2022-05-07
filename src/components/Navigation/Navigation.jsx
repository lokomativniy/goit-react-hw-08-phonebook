import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export const setActiveLink = ({ isActive }) =>
  isActive ? s.activeLink : s.link;

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <nav className={s.nav}>
        <NavLink to="/" className={setActiveLink}>
          Main
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={setActiveLink}>
            Contacts
          </NavLink>
        )}
      </nav>
    </>
  );
};
export default Navigation;
