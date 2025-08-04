import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const smallNews = [
  {
    title: "Índia resgata centenas de joias ligadas a Buda após 127 anos",
    category: "Internacional",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
  {
    title:
      "Mulher que levou 60 socos do namorado terá que fazer reconstrução facial",
    category: "Nacional",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
  {
    title: "Paquetá absolvido: relembre atletas que não escaparam da punição",
    category: "Esportes",
    link: "/",
    imageUrl:
      "https://placehold.co/240x180/EEE/31343C.webp?text=Alguma+noticia",
  },
];

export default function SmallNews() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
      {smallNews.map((news, index) => (
        <div key={index} className="flex gap-4 group">
          <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
            <Image
              src={news.imageUrl}
              alt={news.title}
              width={240}
              height={180}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <Badge variant="outline" className="mb-1 text-xs">
              {news.category}
            </Badge>
            <h4 className="text-sm font-bold hover:text-primary transition-colors">
              <a href="#">{news.title}</a>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
