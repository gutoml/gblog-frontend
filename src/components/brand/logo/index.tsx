import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { LogoThemeSwitcher } from "./logo-theme-switcher";

interface LogoProps extends React.HTMLAttributes<HTMLLinkElement> {
  className: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={twMerge(["flex-1 lg:flex-initial", className])}>
      <LogoThemeSwitcher />
    </Link>
  );
}
