import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  const mergedClasses = twMerge(
    ["w-full", "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"],
    className
  );

  return (
    <div {...props} className={mergedClasses}>
      {children}
    </div>
  );
}
