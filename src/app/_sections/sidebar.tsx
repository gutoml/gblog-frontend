"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Sidebar() {
  const videos = [
    {
      title: "G-BLOG ARENA - Assista ao vivo à programação da G-Blog Brasil",
      url: "https://placehold.co/460x380/EEE/31343C.webp?text=Video+1",
    },
    {
      title: "FECHAMENTO DE MERCADO - Assista ao vivo da G-Blog Money",
      url: "https://placehold.co/460x380/EEE/31343C.webp?text=Video+2",
    },
  ];

  return (
    <>
      {/* Carrossel de vídeos */}
      <Carousel className="w-full">
        <CarouselContent>
          {videos.map((video, index) => (
            <CarouselItem key={index}>
              <Card className="border-0 shadow-none group">
                <CardHeader className="p-0 relative">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                    <Image
                      src={video.url}
                      alt={video.title}
                      width={460}
                      height={380}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="icon"
                        className="rounded-full w-14 h-14 bg-red-600 hover:bg-red-700"
                        aria-label="Assistir vídeo"
                      >
                        <Play className="h-6 w-6 fill-white" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pt-4">
                  <h3 className="font-bold hover:text-primary transition-colors">
                    <a href="#">{video.title}</a>
                  </h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious variant="ghost" className="relative -top-0" />
          <CarouselNext variant="ghost" className="relative -top-0" />
        </div>
      </Carousel>

      {/* Abas de programação */}
      <Tabs defaultValue="G-BLOG" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="G-BLOG">G-BLOG Brasil</TabsTrigger>
          <TabsTrigger value="money">G-BLOG Money</TabsTrigger>
        </TabsList>
        <TabsContent value="G-BLOG" className="mt-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Programação G-BLOG Brasil</p>
          </div>
        </TabsContent>
        <TabsContent value="money" className="mt-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Programação G-BLOG Money</p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
