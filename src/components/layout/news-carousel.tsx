"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NewsCarouselProps {
  title: string;
  newsList: {
    id: number;
    title: string;
    image: string;
    category: string;
    link: string;
  }[];
}

export default function NewsCarousel({ title, newsList }: NewsCarouselProps) {
  return (
    <section className="container max-w-6xl mx-auto py-8 border-b">
      {/* Título */}
      <div className="flex items-end gap-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 flex items-center">
          {title}
        </h2>
      </div>

      {/* Carrossel */}
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {newsList.map((news) => (
            <CarouselItem
              key={news.id}
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <article className="group relative h-full">
                {/* Número do ranking */}
                <Badge className="absolute top-3 left-3 z-10 px-2 py-1 text-xs font-bold bg-red-500 dark:bg-red-600 text-white">
                  {news.id}
                </Badge>

                {/* Imagem */}
                <div className="relative aspect-video overflow-hidden rounded-lg mb-3">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,..." // Adicione seu blurDataURL
                  />
                </div>

                {/* Categoria */}
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {news.category}
                  </Badge>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  <a href="#" className="hover:underline">
                    {news.title}
                  </a>
                </h3>

                {/* Link */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-primary font-medium hover:underline"
                >
                  Ler mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controles */}
        <div className="mt-6 flex justify-center gap-4">
          <CarouselPrevious
            variant="ghost"
            className="relative -translate-y-0"
          />
          <CarouselNext variant="ghost" className="relative -translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
