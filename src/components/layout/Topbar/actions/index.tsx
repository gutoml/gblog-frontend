"use client";

import SearchActionTopbar from "./search";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { SelectThemeAction } from "./select-theme";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ActionsTopbarProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
}

export default function ActionsTopbar({ className }: ActionsTopbarProps) {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const classesMerged = twMerge(["flex items-center gap-3", className]);

  return (
    <div className={classesMerged}>
      <span>
        <SearchActionTopbar />
      </span>
      <span>
        <SelectThemeAction />
      </span>
      <span>
        <Button onClick={handleLoginClick}>Entrar</Button>
      </span>
    </div>
  );
}
