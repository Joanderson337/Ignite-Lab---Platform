import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Video } from "../../components/Video/Video";

export function Event() {

  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className='flex flex-1'>
      <section id="content" className="flex flex-1 flex-col">
        {slug
          ? <Video lessonSlug={slug} />
          : <div className='flex-1'
          />}
            <section id="footer" className="flex w-full items-center justify-center px-8">
            <Footer />
          </section>
        </section>
          <section id="cronograma" className="hidden xl:flex flex-initial bg-gray-700">
        <Sidebar />
        </section>
      </main>
    </div>
  );
}