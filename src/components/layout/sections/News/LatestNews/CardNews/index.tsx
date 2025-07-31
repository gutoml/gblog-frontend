import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Save, Forward, MessageSquare } from "lucide-react";
import Link from "next/link";

interface CardNewsProps {
  news: {
    image: string;
    tag: string;
    title: string;
    content: string;
    url: string;
    comment_count: number;
  };
}

export default function CardNews({ news }: CardNewsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 border-t pt-6">
      <div className="w-full flex justify-center items-start sm:w-[300px]">
        <Image
          src={news.image}
          alt={news.title}
          width={300}
          height={300}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="py-1 px-2 rounded-l text-xs font-bold border-l-2 border-primary">
          {news.tag}
        </span>
        <Link href="/">
          <h2 className="font-bold text-2xl hover:underline">{news.title}</h2>
        </Link>
        <p className="text-gray-500 dark:text-gray-200">
          {news.content.length > 200
            ? `${news.content.substring(0, 200)}...`
            : news.content}
        </p>
        <div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-gray-500 dark:text-gray-200"
          >
            <Save className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-gray-500 dark:text-gray-200"
          >
            <Forward className="size-4" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-gray-500 dark:text-gray-200"
          >
            <MessageSquare className="size-4" />
            <span>{news.comment_count}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
