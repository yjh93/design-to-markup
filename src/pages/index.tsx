import Header from '@/components/Header';
import Hero from '@/components/main/Hero';
import ImageSlide from '@/components/main/ImageSlide';
import ImageTab from '@/components/main/ImageTab';
import Video from '@/components/main/Video';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Hero />
          <Video />
          <ImageTab />
          <ImageSlide />
        </section>
      </main>
    </>
  );
}
