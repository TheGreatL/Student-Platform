import {Toaster} from '@/components/ui/toaster';
import AuthPage from '@/pages/auth/AuthPage';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import HomePage from '@/pages/HomePage';
import LandingPage from '@/pages/LandingPage';
import NotPage from '@/pages/NotPage';
import UserLayout from '@/pages/UserLayout';
import {Route, Routes} from 'react-router';

export default function AppRoutes() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route
          index
          element={<LandingPage />}
        />
        <Route
          path='/'
          element={<UserLayout />}>
          <Route
            index
            element={<HomePage />}
          />
        </Route>
        <Route
          path='/auth'
          element={<AuthPage />}
          errorElement={<NotPage />}>
          <Route
            path='login'
            element={<LoginPage />}
          />
          <Route
            path='signup'
            element={<SignUpPage />}
          />
        </Route>

        <Route
          path='*'
          element={<NotPage />}
        />
      </Routes>
    </>
  );
}
