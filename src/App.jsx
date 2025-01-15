import AppRoutes from './routes/AppRoutes';
import AuthProvider from './store/AuthProvider';

export default function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

