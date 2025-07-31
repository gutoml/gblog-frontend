import Image from "next/image";
import Link from "next/link";

interface SideNewsProps {
  title: string;
  news: {
    image: string;
    title: string;
    url: string;
  }[];
}

export default function SideNews({ title, news }: SideNewsProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-xl">{title}</h2>
      <div className="flex flex-col gap-6">
        {news.map((item, index) => (
          <Link href={item.url} key={index}>
            <div className="flex flex-col gap-1">
              <div className="flex justify-start">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <h3 className="text-base font-bold hover:underline">
                  {item.title.length > 200
                    ? `${item.title.substring(0, 200)}...`
                    : item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
