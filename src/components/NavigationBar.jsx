import { NavLink } from "react-router";

export default function NavigationBar() {
  const arr = [
    {
      path: "posts",
      text: "Post",
    },
    {
      path: "todo",
      text: "Todo",
    },
    {
      path: "ai",
      text: "Ai",
    },
    {
      path: "schedule",
      text: "Schedule",
    },
  ];

  return (
    <nav className="bg-black">
      <ul className="flex">
        {arr.map((link, index) => (
          <li key={link.path} className="flex flex-1">
            <NavLink
              className={`flex-1 border-l-2 border-l-white p-2 text-center text-lg font-semibold uppercase tracking-wider ${index === 0 && "border-l-0"} hover:bg-green-500`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
