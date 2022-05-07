import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './Appbar.module.css';

const Appbar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default Appbar;
