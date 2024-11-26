import { motion, useMotionTemplate,useMotionValue,animate,} from "framer-motion";
import { useEffect } from "react";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ArrowDown from "../assets/svg/bx-down-arrow-alt.svg";
import { Link } from "react-scroll";

const colors = ["#13FDFAA", "#1E67C6", "#CE84CF", "DD335C"];

const Hero = () => {
  const color = useMotionValue(colors[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  },);

  return (
    <motion.section
      id="inicio"
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <h1
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-7xl font-medium leading-tight text-transparent sm:text-8xlxl sm:leading-tight md:text-9xl md:leading-tight uppercase"
        >
          Tomso
        </h1>
        <p className="mb-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Diseñador y desarrollador de Software
        </p>
        <motion.button
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          style={{
            border,
            boxShadow,
          }}
          className="group relative flex items-center rounded-full bg-gray-950/10 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          <Link to="especialidad" smooth={true} className="cursor-pointer" duration={800}>
            <img src={ArrowDown} alt="ArrowDown" className="px-4 py-2"/>
          </Link>
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;
