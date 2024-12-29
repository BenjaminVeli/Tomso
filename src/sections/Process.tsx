"use client";
import { motion } from 'framer-motion';
import {  titleVariants, cardVariants } from '../utils/variants'; 

import { Search } from "lucide-react";
import { LetterText } from "lucide-react";
import { MonitorSmartphone } from "lucide-react";
import { PenBox } from "lucide-react";
import { Rocket } from "lucide-react";
import { Wrench } from "lucide-react";

const processList = [
  {
    id: 1,
    title: "Exploración de objetivos",
    description: "Identifico tus necesidades y expectativas para crear un plan personalizado.",
    icon: Search,
  },
  {
    id: 2,
    title: "Propuesta",
    description: "Te envío una propuesta clara y detallada, con la maquetación de tu sitio web.",
    icon: LetterText,
  },
  {
    id: 3,
    title: "Desarrollo",
    description: "Diseño y desarrollo tu sitio web de acuerdo a lo acordado.",
    icon: MonitorSmartphone,
  },
  {
    id: 4,
    title: "Revisión",
    description: "Tienes la oportunidad de revisar y hacer ajustes antes de la publicación final.",
    icon: PenBox,
  },
  {
    id: 5,
    title: "Lanzamiento",
    description: "Publico tu sitio web y lo hago accesible para tu audiencia.",
    icon: Rocket,
  },
  {
    id: 6,
    title: "Mantenimiento",
    description: "Me encargo de que todo funcione perfectamente.",
    icon: Wrench,
  },
]

export const Process = () => {
  return (
    <section id="process" className="py-20 md:py-24">
      <div className="container">
        <motion.h2 
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_right,white,white,rgb(32,32,138,.5))] text-transparent bg-clip-text">¿Cómo trabajo?</motion.h2>
        <p className="text-white/70 text-lg md:text-xl tracking-tight text-center mt-5 mb-10 md:mb-20">Te ofrezco un proceso claro, transparente y eficiente para garantizar que tu visión se haga realidad</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">

          {processList.map((process, index) => (
            <motion.div
            custom={index} 
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            key={process.id} className="p-6 border cursor-pointer transition-all duration-300 rounded-xl border-white/15 hover:border-white/25 bg-gray-dark">
              <div className="bg-neutral-900 h-11 w-11 border border-white/10 rounded-lg flex items-center justify-center">
                <process.icon className="text-icon w-6 h-6" />
              </div>
              <h3 className="mt-6 text-2xl text-white">{process.title}</h3>
              <p className="mt-4 text-gray-300">{process.description}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Process