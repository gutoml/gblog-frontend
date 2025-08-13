"use client";

import { Menu, Search, Sun, Moon, User, LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Logo from "../brand/logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navItems = [
  { name: "Política", slug: "politica" },
  { name: "Economia", slug: "economia" },
  { name: "Esportes", slug: "esportes" },
  { name: "Saúde", slug: "saude" },
  { name: "Educação", slug: "educacao" },
  { name: "Violência", slug: "violencia" },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-4 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className={cn(
                      "flex items-center gap-2 py-2 px-4 rounded-md",
                      "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center h-full">
          <div className="flex h-full items-center border-l border-r divide-x">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className={cn(
                  "relative flex h-full items-center px-4 text-sm font-medium",
                  "hover:bg-accent/50 transition-colors",
                  "group"
                )}
              >
                <div className="flex items-center gap-1">{item.name}</div>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <form action="/search" method="get">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                name="key"
                placeholder="Buscar..."
                className="pl-9 w-[150px] focus:w-[200px] transition-all"
              />
            </div>
          </form>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="sr-only">
                Minha conta
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="font-bold">
                  <Link href="/" className="block">
                    Entrar
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/" className="block">
                    Cadastrar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
            {/* <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>Meu perfil</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent> */}
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
