import Highlight from "./_sections/highlight";
import { MostReadSection } from "./_sections/most-read";
import SecondaryNews from "./_sections/secondary-news";
import Sidebar from "./_sections/sidebar";
import SmallNews from "./_sections/small-news";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 px-2">
        {/* Coluna principal (9/12) */}
        <div className="lg:col-span-9 space-y-8">
          <Highlight />
          <SecondaryNews />
          <SmallNews />
          <MostReadSection />
        </div>
        {/* Sidebar (3/12) */}
        <div className="lg:col-span-3 space-y-8">
          <Sidebar />
        </div>
      </section>
    </main>
  );
}
