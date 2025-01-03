import Header from "@/components/Header";

import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <main className="flex h-screen flex-col overflow-auto text-white">
      <Header />
      <Outlet />
    </main>
  );
}
