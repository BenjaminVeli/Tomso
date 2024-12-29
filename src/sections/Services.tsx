"use client";
import { motion } from 'framer-motion';
import {  titleVariants } from '../utils/variants'; 

import { Check } from "lucide-react";

export const Services = () => {

  const servicesList = [
    {
      classCard: "mx-auto w-full max-w-[485px] overflow-hidden rounded-lg bg-neutral-800 p-0.5 transition-all duration-500 hover:bg-gradient-to-br from-indigo-200 via-indigo-200/0 to-indigo-200 mt-4 hover:scale-105",
      title: "Landing Page",
      price: "$350",
      week: " - 1 Semana",
      features: ["SEO Optimizado", "Diseño Responsive", "Diseño Personalizado", "Animaciones y Transiciones", "Mantenimiento por 4 meses"],
      fDescription: ["Asegura que tu página esté entre los primeros resultados.","Perfecto en cualquier dispositivo.","Adaptado completamente a tu marca y objetivos.","Efectos visuales suaves para una experiencia más dinámica.","Olvídate de problemas técnicos."],
    },
    {
      classCard: "mx-auto w-full max-w-[485px] overflow-hidden rounded-lg bg-neutral-800 p-0.5 transition-all duration-500 hover:bg-gradient-to-bl from-indigo-200 via-indigo-200/0 to-indigo-200 mt-4 hover:scale-105",
      title: "Website",
      price: "$1000",
      week: " - 2/3 Semanas",
      features: ["SEO Avanzado", "Diseño Responsive", "Diseño Personalizado", "Animaciones y Transiciones", "Mantenimiento por 1 año"],
      fDescription: ["Mejora tu visibilidad con técnicas más especializadas.","Optimizado para cualquier dispositivo.","Un sitio web que refleja la esencia de tu marca.","Efectos visuales suaves para una experiencia más dinámica.","Olvídate de problemas técnicos."],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24">
      <div className="container">
        <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-medium text-center tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_right,white,white,rgb(32,32,138,.5))] text-transparent bg-clip-text">Servicios</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">

          {servicesList.map((service, index) => (
            <div key={index} className={service.classCard}>
              <div className="flex flex-col items-start justify-center overflow-hidden rounded-[7px] bg-neutral-950 p-8 transition-colors duration-500">
                <h3 className="text-white font-medium text-2xl">
                  {service.title}
                </h3>
                <p className="text-xl text-white mt-2">
                  {service.price}
                  <span className="text-lg">{service.week}</span>
                </p>
                <p className="uppercase text-slate-400 mt-2 text-base">(El precio puede variar según lo requerido)</p>

                <div className="my-10">
                  <ul className="inline-flex flex-col gap-4 text-left text-neutral-400">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex flex-col gap-2">
                      <div className="flex items-center gap-4">
                        <Check className="text-green-400"/>
                        <h4 className="text-base underline">{feature}</h4>
                      </div>
                      <p className="ml-10">{service.fDescription[index]}</p>
                    </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Services