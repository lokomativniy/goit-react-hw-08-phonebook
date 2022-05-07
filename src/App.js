import Container from './components/Container/Container.jsx';
import { Suspense, useEffect, lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import { Navigate, Route, Routes } from 'react-router-dom';
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
              element={
                <PublicRoute>
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
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
