import CardNews from "./CardNews";

export default function LatestNews() {
  const news = [
    {
      image:
        "https://placehold.co/200x200/EEE/31343C.webp?text=Primeira+noticia&font=Montserrat",
      tag: "Política",
      title: "Aqui está o título da PRIMEIRA matéria!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id malesuada orci, at luctus nisl. Cras eget faucibus augue. Ut dolor ipsum, gravida sit amet viverra eget, eleifend at ante. Fusce volutpat ante nec erat posuere tristique. Aliquam non nunc ex. Donec sit amet magna eu nibh tempor fringilla. Cras vel lacinia odio. Aenean augue velit, interdum ac dictum a, maximus in quam. Donec eget purus euismod, mollis dolor in, rhoncus nunc. Ut sollicitudin, nulla vel tincidunt imperdiet, sem turpis pellentesque elit, et aliquam velit ligula vitae est. Nam vestibulum risus sed ullamcorper rutrum. Nullam tincidunt magna sit amet metus laoreet, nec laoreet ante vehicula. Aenean erat justo, vulputate vel semper nec, laoreet at magna. Integer eleifend sodales pretium.",
      url: "/",
      comment_count: 20,
    },
    {
      image:
        "https://placehold.co/200x200/EEE/31343C.webp?text=Segunda+noticia&font=Montserrat",
      tag: "Política",
      title: "Aqui está o título da SEGUNDA matéria!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id malesuada orci, at luctus nisl. Cras eget faucibus augue. Ut dolor ipsum, gravida sit amet viverra eget, eleifend at ante. Fusce volutpat ante nec erat posuere tristique. Aliquam non nunc ex. Donec sit amet magna eu nibh tempor fringilla. Cras vel lacinia odio. Aenean augue velit, interdum ac dictum a, maximus in quam. Donec eget purus euismod, mollis dolor in, rhoncus nunc. Ut sollicitudin, nulla vel tincidunt imperdiet, sem turpis pellentesque elit, et aliquam velit ligula vitae est. Nam vestibulum risus sed ullamcorper rutrum. Nullam tincidunt magna sit amet metus laoreet, nec laoreet ante vehicula. Aenean erat justo, vulputate vel semper nec, laoreet at magna. Integer eleifend sodales pretium.",
      url: "/",
      comment_count: 30,
    },
    {
      image:
        "https://placehold.co/200x200/EEE/31343C.webp?text=Terceira+noticia&font=Montserrat",
      tag: "Política",
      title: "Aqui está o título da TERCEIRA matéria!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id malesuada orci, at luctus nisl. Cras eget faucibus augue. Ut dolor ipsum, gravida sit amet viverra eget, eleifend at ante. Fusce volutpat ante nec erat posuere tristique. Aliquam non nunc ex. Donec sit amet magna eu nibh tempor fringilla. Cras vel lacinia odio. Aenean augue velit, interdum ac dictum a, maximus in quam. Donec eget purus euismod, mollis dolor in, rhoncus nunc. Ut sollicitudin, nulla vel tincidunt imperdiet, sem turpis pellentesque elit, et aliquam velit ligula vitae est. Nam vestibulum risus sed ullamcorper rutrum. Nullam tincidunt magna sit amet metus laoreet, nec laoreet ante vehicula. Aenean erat justo, vulputate vel semper nec, laoreet at magna. Integer eleifend sodales pretium.",
      url: "/",
      comment_count: 22,
    },
    {
      image:
        "https://placehold.co/200x200/EEE/31343C.webp?text=Quarta+noticia&font=Montserrat",
      tag: "Política",
      title: "Aqui está o título da QUARTA matéria!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id malesuada orci, at luctus nisl. Cras eget faucibus augue. Ut dolor ipsum, gravida sit amet viverra eget, eleifend at ante. Fusce volutpat ante nec erat posuere tristique. Aliquam non nunc ex. Donec sit amet magna eu nibh tempor fringilla. Cras vel lacinia odio. Aenean augue velit, interdum ac dictum a, maximus in quam. Donec eget purus euismod, mollis dolor in, rhoncus nunc. Ut sollicitudin, nulla vel tincidunt imperdiet, sem turpis pellentesque elit, et aliquam velit ligula vitae est. Nam vestibulum risus sed ullamcorper rutrum. Nullam tincidunt magna sit amet metus laoreet, nec laoreet ante vehicula. Aenean erat justo, vulputate vel semper nec, laoreet at magna. Integer eleifend sodales pretium.",
      url: "/",
      comment_count: 56,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold text-2xl">Últimas notícias</h1>
      <div className="flex flex-col gap-6">
        {news.map((item, index) => (
          <CardNews news={item} key={index} />
        ))}
      </div>
    </div>
  );
}
