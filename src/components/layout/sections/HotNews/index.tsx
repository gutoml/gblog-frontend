import Link from "next/link";
import Container from "../../Container";
import { Button } from "@/components/ui/button";
import { Save, Forward, MessageSquare, CornerDownRight } from "lucide-react";
import SideNews from "../News/SideNews";

export default function HotNews() {
  const news = [
    {
      tag: {
        name: "Educação",
        color: "yellow-500",
      },
      title: "Nova PEC 0001 é discutida na câmara de deputados!",
      url: "/",
      comment_count: 64,
      related_news: [],
    },
    {
      tag: {
        name: "Segurança",
        color: "green-500",
      },
      title: "Algo de errado não está certo na Disneylandia!",
      url: "/",
      comment_count: 84,
      related_news: [],
    },
    {
      tag: {
        name: "Urgente",
        color: "red-500",
      },
      title: "Esse é um título de uma notícia que está em alta!",
      url: "/",
      comment_count: 71,
      related_news: [
        {
          title: "Alguma notícia relacionada com essa acima!",
          url: "/",
        },
        {
          title: "Essa também é alguma outra notícia relacionada!",
          url: "/",
        },
        {
          title: "Como o assunto está em alta, essa é mais uma!",
          url: "/",
        },
        {
          title: "Não basta apenas essas, deve haver quatro notícias!",
          url: "/",
        },
      ],
    },
  ];

  const sideNews = [
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Primeira+mais+vista&font=Montserrat",
      title:
        "Aliquam faucibus nibh id urna lacinia eleifend. Aliquam erat volutpat.",
      url: "/",
    },
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Segunda+mais+vista&font=Montserrat",
      title:
        "In purus nisi, gravida posuere nibh sit amet, dictum feugiat tortor.",
      url: "/",
    },
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Terceira+mais+vista&font=Montserrat",
      title: "Donec vulputate sem at enim placerat, in porta dolor aliquet.",
      url: "/",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col sm:flex-row gap-4 py-6">
        <div className="flex-9/12">
          <h1 className="text-4xl font-bold">Noticias destaque</h1>
          <div className="py-8 flex flex-col gap-6">
            {news.map((item, index) => (
              <div className="flex flex-col gap-6" key={index}>
                <div className="flex flex-col gap-3">
                  <span
                    className={`py-2 px-4 rounded-l text-xl font-bold border-l-4 border-${item.tag.color} text-${item.tag.color}`}
                  >
                    {item.tag.name}
                  </span>
                  <Link href={item.url}>
                    <h1 className="text-4xl hover:underline font-bold">
                      {item.title}
                    </h1>
                  </Link>
                  <div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 dark:text-gray-200"
                    >
                      <Save className="size-6" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 dark:text-gray-200"
                    >
                      <Forward className="size-6" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 dark:text-gray-200"
                    >
                      <MessageSquare className="size-6" />
                      <span>{item.comment_count}</span>
                    </Button>
                  </div>
                  {item.related_news.length > 0 && (
                    <ul className="flex flex-col gap-2 pl-4">
                      {item.related_news.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CornerDownRight className="text-primary size-4" />
                          <Link href={item.url} className="hover:underline">
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-3/12">
          <SideNews title="Mais notícias" news={sideNews} />
        </div>
      </div>
    </Container>
  );
}
