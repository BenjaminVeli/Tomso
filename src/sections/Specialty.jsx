import { FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { BiCodeBlock } from "react-icons/bi";

const Specialty = () => {
  return (
    <section id="especialidad" className="py-24 md:py-52">
      <div className="container mx-auto c-space">
        <h2 className="text-4xl md:text-6xl font-bold pb-12 text-white uppercase text-center">
          Mi Especialidad
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-items-center">
          {data.map((d) => (
            <div
              key={d.id}
              className="col-span-1 border-2 border-dark-gray-custom w-full rounded-lg shadow-lg bg-light-gray-custom transition-all duration-500 mt-4 hover:scale-105"
            >
              <div className="py-10 px-7">
                <div className="flex items-center mb-2">
                  <d.img alt={d.alt} className="w-11 h-11 text-white" />
                  <h3
                    className={`${d.className} text-2xl font-semibold pl-4 text-white`}
                  >
                    {d.textH3}
                  </h3>
                </div>
                <div className="experience-container">
                  <p className="experience-text font-medium text-lg text-light-blue-gray">
                    {d.textP}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialty;

const data = [
  {
    id: 1,
    textH3: `Backend Developer`,
    textP: `Experiencia en lenguajes: Python, Java, Javascript , C# y TypeScript.`,
    img: BiCodeBlock, // Aquí, guardamos el componente de React como img
    alt: `CodeBlock`,
    className: "backend-dev",
  },
  {
    id: 2,
    textH3: `Database Developer`,
    textP: `Experiencia en bases de datos: MySQL, SQL Server y MongoDB.`,
    img: FiDatabase, // Guardamos el componente de React aquí también
    alt: `DatabaseImg`,
    className: "database-dev",
  },
  {
    id: 3,
    textH3: `Frontend Developer`,
    textP: `Apasionado por UX/UI. Más de 2 años de experiencia en desarrollo React.`,
    img: FaReact, // Guardamos el componente de React
    alt: `ReactImg`,
    className: "frontend-dev",
  },
];
