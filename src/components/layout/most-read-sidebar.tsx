import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MostReadSidebarProps extends React.ComponentProps<"div"> {
  mostRead: Array<{
    title: string;
    link: string;
    image: string;
  }>;
}

export default function MostReadSidebar({ mostRead }: MostReadSidebarProps) {
  return (
    <>
      <div className="m-0">
        <h1 className="text-xl font-bold">Mais lidos</h1>
      </div>
      <ul>
        {mostRead.map((item, index) => (
          <li key={item.title} className="py-6 border-b">
            <Link
              href={item.link}
              className={`flex ${
                index !== 0 ? "flex-col md:flex-row items-center" : "flex-col"
              } gap-2`}
            >
              <div
                className={`relative ${
                  index !== 0 ? "w-full md:w-[250px]" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={419}
                  height={249}
                  className="rounded-md w-full"
                />
                <span className="absolute top-0 left-0 flex items-center justify-center bg-red-500 dark:bg-red-600 text-xs font-bold text-white size-6 rounded-tl-md">
                  {index + 1}
                </span>
              </div>
              <h2 className={`font-bold ${index === 0 ? "text-base" : ""}`}>
                {item.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
