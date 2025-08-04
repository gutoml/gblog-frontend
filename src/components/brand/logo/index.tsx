import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { LogoThemeSwitcher } from "./logo-theme-switcher";

interface LogoProps extends React.HTMLAttributes<HTMLLinkElement> {
  inverse?: boolean;
}

export default function Logo({ className, inverse = false }: LogoProps) {
  return (
    <Link href="/" className={twMerge(["flex-1 lg:flex-initial", className])}>
      <LogoThemeSwitcher inverse={inverse} />
    </Link>
  );
}
