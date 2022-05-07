import Container from './components/Container/Container.jsx';
import { useEffect, lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
// import HomeView from './views/HomeView.js';
// import RegisterView from './views/RegisterView.js';
// import ContactsView from './views/ContactsView.js';
// import LoginView from './views/LoginView.js';
import Appbar from './components/Appbar/Appbar.jsx';
import { useDispatch } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './components/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute.jsx';
import { useSelector } from 'react-redux';
import { Sceleton } from './components/Sceleton.js';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const LoginView = lazy(() => import('./views/LoginView'));

const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(authSelectors.getisFetching);
  console.log(isFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <ToastContainer autoClose={2000} />
      <Appbar />
      {!isFetching && (
        <Suspense fallback={<Sceleton />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              restricted
              element={
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              restricted
              element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </Container>
  );
};

export default App;
