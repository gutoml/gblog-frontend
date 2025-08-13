import Highlight from "./_sections/highlight";
import NewsCarousel from "@/components/layout/news-carousel";
import SecondaryNews from "./_sections/secondary-news";
import Sidebar from "./_sections/sidebar";
import SmallNews from "./_sections/small-news";

const mostRead = [
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
    <main>
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 px-2">
        {/* Coluna principal (9/12) */}
        <div className="lg:col-span-9 space-y-8">
          <Highlight />
          <SecondaryNews />
          <SmallNews />
          <NewsCarousel title="Mais lidos" newsList={mostRead} />
        </div>
        {/* Sidebar (3/12) */}
        <div className="lg:col-span-3 space-y-8">
          <Sidebar />
        </div>
      </section>
    </main>
  );
}
