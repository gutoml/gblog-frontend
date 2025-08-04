"use client";

import Image from "next/image";
import { useTheme } from "next-themes";

export function LogoThemeSwitcher({ inverse }: { inverse: boolean }) {
  const { theme } = useTheme();

  return (
    <div className="flex gap-1 items-center">
      <div>
        {theme === "dark" ? (
          <Image
            src={inverse ? `/logo-light.svg` : `/logo-dark.svg`}
            alt="Blog Logo"
            width={36}
            height={36}
          />
        ) : (
          <Image
            src={inverse ? `/logo-dark.svg` : `/logo-light.svg`}
            alt="Blog Logo"
            width={36}
            height={36}
          />
        )}
      </div>
      <span className="font-bold text-lg">Blog</span>
    </div>
  );
}
