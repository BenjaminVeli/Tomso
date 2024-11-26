import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// ------------------ Sections ------------------
import Specialty from "../sections/Specialty";
import Featured from "../sections/Featured";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";


const Start = () => {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <Specialty />
        <Featured />
        <Experience/>
        <Contact />
      </main>
            
      <Footer />
              
    </>
  );
};

export default Start;
