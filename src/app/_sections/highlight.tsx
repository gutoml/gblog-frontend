import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const mainNews = {
  title:
    "Empresários pedem a Alckmin crédito e suspensão de imposto contra tarifas de Trump",
  category: "Economia",
  imageUrl:
    "https://placehold.co/768x432/EEE/31343C.webp?text=Noticia+destaque",
  related: [
    {
      title: "Trump isenta 45% das exportações brasileiras aos EUA de tarifaço",
      link: "/",
    },
    {
      title: "Veja lista de itens mais exportados do Brasil que serão taxados",
      link: "/",
    },
    {
      title: "Como o Brasil fez chegar aos EUA mensagens para atenuar tarifaço",
      link: "/",
    },
  ],
};

export default function Highlight() {
  return (
    <Card className="border-0 shadow-none group">
      <CardHeader className="p-0 relative">
        <div className="relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={mainNews.imageUrl}
            alt={mainNews.title}
            width={768}
            height={432}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </CardHeader>
      <CardContent className="px-0 pt-4">
        <Badge variant="outline" className="mb-2">
          {mainNews.category}
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight hover:text-primary transition-colors">
          <a href="#">{mainNews.title}</a>
        </h2>
        <ul className="mt-4 space-y-2 hidden lg:block">
          {mainNews.related.map((item) => (
            <li key={item.title} className="flex items-start">
              <ArrowRight className="h-4 w-4 mt-1 mr-2 text-destructive flex-shrink-0" />
              <a href={item.link} className="hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
