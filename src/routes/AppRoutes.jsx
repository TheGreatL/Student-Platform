import {Toaster} from '@/components/ui/sonner';
import AIPage from '@/pages/AIPage';
import AuthPage from '@/pages/auth/AuthPage';
import LoginPage from '@/pages/auth/LoginPage';
import SignUpPage from '@/pages/auth/SignUpPage';
import HomePage from '@/pages/HomePage';
import LandingPage from '@/pages/LandingPage';
import NotPage from '@/pages/NotPage';
import SchedulePage from '@/pages/SchedulePage';
import TodoPage from '@/pages/TodoPage';
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
            path='home'
            element={<HomePage />}
          />
          <Route
            path='todo'
            element={<TodoPage />}
          />
          <Route
            path='ai'
            element={<AIPage />}
          />
          <Route
            path='schedule'
            element={<SchedulePage />}
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
