import MostReadSidebar from "@/components/layout/most-read-sidebar";
import NewsCarousel from "@/components/layout/news-carousel";
import { Badge } from "@/components/ui/badge";
import formatDateForPost from "@/utils/format-date-for-post";
import Image from "next/image";

const news = {
  category: {
    name: "Categoria",
  },
  user: {
    name: "Carlos Costa",
  },
  title: "Lorem Ipsum",
  description: "descrição do post",
  content: "Alguma coisa",
  created_at: formatDateForPost(new Date()),
  image:
    "https://placehold.co/1920x1080/EEE/31343C.webp?text=Imagem+da+noticia",
  relatedNews: [
    {
      title: "Alguma coisa",
      image:
        "https://placehold.co/1920x1080/EEE/31343C.webp?text=Noticia+relacionada",
    },
  ],
};

const mostRead = [
  {
    title: "Moraes decreta prisão domiciliar de Bolsonaro",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
  },
  {
    title:
      "Ex-marido de Preta Gil fala pela primeira vez após morte da cantora",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
  },
  {
    title:
      "Homem que espancou namorada com 60 socos diz ter sido agredido na cadeia",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
  },
  {
    title: `“Chegaremos bem”: os últimos minutos de avião da Voepass que caiu em SP`,
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
  },
  {
    title:
      "Marcos do Val é alvo de operação da PF e colocará tornozeleira eletrônica",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
  },
];

const relatedNews = [
  {
    id: 1,
    title:
      "Moraes faz gesto obsceno ao acompanhar vitória do Corinthians em Itaquera",
    category: "Política",
    image:
      "https://placehold.co/274x160/EEE/31343C.webp?text=Moraes+Corinthians",
    link: "",
  },
  {
    id: 2,
    title:
      "Família de homem que espancou mulher com 60 socos se pronuncia; veja",
    category: "Nacional",
    image: "https://placehold.co/274x160/EEE/31343C.webp?text=Espancamento+RN",
    link: "",
  },
  {
    id: 3,
    title: "Mulher espancada com 60 socos foi agredida por ciúmes, diz polícia",
    category: "Nacional",
    image:
      "https://placehold.co/274x160/EEE/31343C.webp?text=Violência+Doméstica",
    link: "",
  },
  {
    id: 4,
    title:
      "Veja os classificados para semifinal da Liga das Nações Masculina de Vôlei",
    category: "Esportes",
    image: "https://placehold.co/274x160/EEE/31343C.webp?text=Vôlei+Brasil",
    link: "",
  },
  {
    id: 5,
    title:
      "Alvo de sanções dos EUA, Alexandre de Moraes vai a Corinthians x Palmeiras",
    category: "Política",
    image: "https://placehold.co/274x160/EEE/31343C.webp?text=Moraes+Sanções",
    link: "",
  },
];

export default function page() {
  return (
    <section className="container flex flex-col gap-6 mx-auto py-8 px-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Coluna principal (9/12) */}
        <div className="lg:col-span-9 space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Badge>{news.category.name}</Badge>
              <h1 className="font-bold text-2xl">{news.title}</h1>
              <p className="text-primary text-base">{news.description}</p>
              <span className="border-t pt-2 text-gray-600 dark:text-gray-400">
                Criado por {news.user.name} - {news.created_at}
              </span>
            </div>
            <Image
              src={news.image}
              alt={news.title}
              width={1920}
              height={1080}
              className="rounded-md"
            />
          </div>
          <div className="border-t pt-4 mt-4">{news.content}</div>
          <div>
            <NewsCarousel title="Relacionados" newsList={relatedNews} />
          </div>
        </div>
        {/* Sidebar (3/12) */}
        <div className="lg:col-span-3 space-y-8">
          <MostReadSidebar mostRead={mostRead} />
        </div>
      </div>
    </section>
  );
}
