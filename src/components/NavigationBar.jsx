import { NavLink } from "react-router";

export default function NavigationBar() {
  const arr = [23, 123, 123, 12, 3, 23, 55, 25, 5, 2, 52, 525, 7889];

  return (
    <nav className="bg-black">
      <ul className="flex">
        {arr.map((val) => (
          <li key={val} className="flex flex-1">
            <NavLink className="flex-1 p-2 text-center hover:bg-green-500">
              something
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
