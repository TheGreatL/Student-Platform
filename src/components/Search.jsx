import { Input } from "./ui/input";

import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="flex-1">
      <div className="m-auto flex max-w-[40rem] rounded-2xl bg-white focus-within:ring-2 focus-within:ring-black">
        <Input
          id="search"
          type="text"
          placeholder="Search"
          className="border-0 text-black focus-visible:outline-0 focus-visible:ring-0"
        />
        <Button variant="ghost" className="rounded-2xl hover:bg-slate-200">
          <SearchIcon stroke="black" />
        </Button>
      </div>
    </div>
  );
}
