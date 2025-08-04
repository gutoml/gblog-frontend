import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const secondaryNews = [
  {
    title:
      "Superlotação, teatro: como é a prisão de Rebibbia, onde Carla Zambelli está presa",
    category: "Internacional",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
  {
    title:
      "Governo Trump tem plano de sanções graduais contra autoridades do Brasil",
    category: "Política",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
  {
    title:
      "Corinthians tem premiação da Copa do Brasil bloqueada pela justiça; entenda",
    category: "Esportes",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
];

export default function SecondaryNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {secondaryNews.map((news) => (
        <a href={news.link}>
          <Card key={news.title} className="border-0 shadow-none group gap-4">
            <CardHeader className="p-0 gap-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  width={240}
                  height={180}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <Badge variant="outline" className="mb-2">
                {news.category}
              </Badge>
              <h3 className="text-lg font-bold hover:text-primary transition-colors">
                {news.title}
              </h3>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}
