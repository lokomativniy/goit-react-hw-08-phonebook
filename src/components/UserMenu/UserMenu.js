import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import s from './UserMenu.module.css';
import defaultavatar from '../../icons/avatardefault.png';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={s.container}>
      {' '}
      <img src={defaultavatar} alt="" className={s.img} />
      <span className={s.name}>Welcome, {name}</span>
      <button
        className={s.btn}
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Sign out
      </button>
    </div>
  );
}
