"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface NavMenuTopbarProps extends React.HTMLAttributes<HTMLElement> {
  className: string;
}

const components: { title: string; href: string }[] = [
  {
    title: "Saúde",
    href: "/",
  },
  {
    title: "Política",
    href: "/",
  },
  {
    title: "Violência",
    href: "/",
  },
  {
    title: "Educação",
    href: "/",
  },
  {
    title: "Noticias quentes",
    href: "/",
  },
  {
    title: "Meio ambiente",
    href: "/",
  },
];

export default function NavMenuTopbar({ className }: NavMenuTopbarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          onClick={toggleMenu}
          className={cn(
            "p-2 rounded-md",
            "hover:bg-accent hover:text-accent-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            "transition-colors"
          )}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      {!isMobile && (
        <NavigationMenu className={className}>
          <NavigationMenuList>
            {components.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={item.href}>{item.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      )}

      {isMobile && menuOpen && (
        <>
          <div
            className={cn(
              "fixed inset-0 z-40",
              theme === "dark" ? "bg-black/70" : "bg-black/70"
            )}
            onClick={toggleMenu}
          />

          <div
            className={cn(
              "fixed inset-y-0 left-0 w-4/5 z-50 shadow-lg",
              "transform transition-transform duration-300 ease-in-out",
              "bg-background text-foreground"
            )}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className={cn(
                  "p-2 rounded-md",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                  "transition-colors"
                )}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <NavigationMenu className="h-full items-start">
              <NavigationMenuList className="flex flex-col items-start space-y-2 p-4 pt-0">
                {components.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "w-full justify-start hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      <Link href={item.href} onClick={toggleMenu}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </>
      )}
    </>
  );
}
