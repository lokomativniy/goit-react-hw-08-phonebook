import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/contacts" /> : children}</>;
}
