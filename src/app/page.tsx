import Footer from "@/components/layout/Footer";
import Advertising from "@/components/layout/sections/Advertising";
import HotNews from "@/components/layout/sections/HotNews";
import News from "@/components/layout/sections/News";
import Topbar from "@/components/layout/Topbar";

export default async function Home() {
  return (
    <>
      <Topbar />
      <Advertising urlBanner="https://placehold.co/950x150/EEE/31343C.webp?text=Banner+de+publicidade&font=Montserrat" />
      <HotNews />
      <Advertising urlBanner="https://placehold.co/950x150/EEE/31343C.webp?text=Banner+de+publicidade&font=Montserrat" />
      <News />
      <Footer />
    </>
  );
}
