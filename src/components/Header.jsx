import { Link } from "react-router";
import NavigationBar from "./NavigationBar";
import Search from "./Search";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 flex flex-col bg-blue-400">
      <section className="flex gap-2 p-3">
        <Button variant="ghost">Logo</Button>
        <Search />
        <Link to="/auth/login">
          {" "}
          <Button variant="ghost">Avatar</Button>
        </Link>
      </section>
      <NavigationBar />
    </header>
  );
}
