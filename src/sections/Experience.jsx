import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Features from "../components/Features";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="experiencia" className="py-24 md:py-52">
      <h2 className="text-4xl md:text-6xl font-bold pb-12 text-white uppercase text-center">
        Experiencia
      </h2>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="assets/img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>

      <Features />
      
    </section>
  );
};

export default Experience;
