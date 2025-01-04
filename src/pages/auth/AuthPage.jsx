import { Outlet } from "react-router";

export default function AuthPage() {
  return (
    <main className="flex h-screen flex-col overflow-auto">
      <Outlet />
    </main>
  );
}
