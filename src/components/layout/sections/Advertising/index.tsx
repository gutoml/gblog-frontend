import React from "react";
import Image from "next/image";

interface AdvertisingProps extends React.HTMLAttributes<HTMLDivElement> {
  urlBanner: string;
}

export default function Advertising({ urlBanner }: AdvertisingProps) {
  return (
    <div className="bg-secondary-foreground flex justify-center items-center py-8 px-2">
      <Image
        src={urlBanner}
        alt="Banner publicitário"
        width={950}
        height={150}
        className="rounded-2xl"
      />
    </div>
  );
}
