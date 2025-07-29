"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuSearch } from "react-icons/lu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchActionTopbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <LuSearch />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <form action="">
          <div className="flex">
            <Input
              type="text"
              name="search_news"
              placeholder="Pelo menos 3 caracteres."
              className="rounded-tr-none rounded-br-none"
            />
            <Button type="submit" className="rounded-tl-none rounded-bl-none">
              Buscar
            </Button>
          </div>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
