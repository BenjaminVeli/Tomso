import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Process from "@/sections/Process";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main>
        <Services />
        <Process />
      </main>
      <Footer />
    </>
  );
}
