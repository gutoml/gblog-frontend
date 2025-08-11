import { ArrowRight } from "lucide-react";
import Image from "next/image";
import formatDateForPost from "@/utils/format-date-for-post";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import MostReadSidebar from "@/components/layout/most-read-sidebar";

const result = [
  {
    title: `Carlinhos Maia responde boatos de que teria se "descoberto hétero"`,
    category: "Entretenimento",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
    updated_at: formatDateForPost(new Date()),
  },
  {
    title:
      "Fã desmaia após ser chamada para cantar com Katy Perry no palco; veja",
    category: "Entretenimento",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
    updated_at: formatDateForPost(new Date()),
  },
  {
    title:
      "O que especialistas acham da polêmica campanha estrelada por Sydney Sweeney",
    category: "Lifestyle",
    link: "/",
    image: "https://placehold.co/419x249/EEE/31343C.webp?text=Mais+lidas",
    updated_at: formatDateForPost(new Date()),
  },
];

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

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { key } = await searchParams;

  return (
    <section className="container flex flex-col gap-6 mx-auto py-8 px-2">
      <div className="flex flex-col gap-3">
        <span className="text-xs block">Você está em</span>
        <span className="flex gap-2 items-center">
          <ArrowRight className="text-red-500 dark:text-red-600 size-6" />
          <h1 className="text-2xl font-bold">
            Exibindo resultados para
            <span className="pl-2 text-red-500 dark:text-red-600">{key}</span>
          </h1>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Coluna principal (9/12) */}
        <div className="lg:col-span-9 space-y-8">
          <ul className="flex flex-col">
            {result.map((item) => (
              <li
                key={item.title}
                className="py-6 border-b border-gray-300 dark:border-gray-400"
              >
                <Link href="" className="flex gap-4">
                  <div className="w-full sm:max-w-[419px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={419}
                      height={249}
                      className="rounded-md"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Badge variant="outline" className="mb-2">
                      {item.category}
                    </Badge>
                    <h2 className="font-bold text-xl text-primary">
                      {item.title}
                    </h2>
                    <span className="mt-auto text-gray-500 dark:text-gray-400">
                      {item.updated_at}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
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
