import Container from "../../Container";
import LatestNews from "./LatestNews";
import SideNews from "./SideNews";

export default function News() {
  const news = [
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Primeira+mais+vista&font=Montserrat",
      title: "Essa é a materia mais vista",
      url: "/",
    },
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Segunda+mais+vista&font=Montserrat",
      title: "Essa é a segunda materia mais vista",
      url: "/",
    },
    {
      image:
        "https://placehold.co/400x200/EEE/31343C.webp?text=Terceira+mais+vista&font=Montserrat",
      title: "Essa é a terceira materia mais vista",
      url: "/",
    },
  ];

  return (
    <Container className="flex flex-col sm:flex-row gap-6 py-6">
      <div className="flex-9/12">
        <LatestNews />
      </div>
      <div className="flex-3/12">
        <SideNews title="Matérias mais vistas" news={news} />
      </div>
    </Container>
  );
}
