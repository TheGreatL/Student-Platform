import { Route, Routes } from "react-router";
import NotPage from "./pages/NotPage";
import UserLayout from "./pages/UserLayout";
import LandingPage from "./pages/LandingPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/auth/LoginPage";

export default function App() {
  return (
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/" element={<UserLayout />}>
        <Route path="home" element={<HomePage />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}
