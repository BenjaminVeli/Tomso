import Header from "../components/Header";
import CodeBlock from "../assets/svg/bx-code-block.svg";
import React from "../assets/svg/bxl-react.svg";
import Database from "../assets/svg/bx-data.svg";

const Start = () => {
  return (
    <>
      <Header />
      <h1 className="text-6xl">Start</h1>

      <main>
        <section id="specialization" className="py-28">
          <div className="container mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold pb-12 text-white uppercase text-center">
              Mi Especialidad
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-0 justify-items-center">
              {data.map((d) => (
                <div key={d.id} className="col-span-1 border-2 border-indigo-200 w-96 rounded-lg shadow-lg bg-transparent transition-all duration-500 mt-4 hover:scale-105">
                  <div className="py-10 px-7">
                    <div className="flex items-center mb-2">
                      <img src={d.img} alt={d.alt} className="w-11" />
                      <h3 className={`${d.className} text-2xl font-semibold pl-4 text-slate-50`}>
                        {d.textH3}
                      </h3>
                    </div>
                    <div className="experience-container">
                      <p className="experience-text font-medium text-lg text-slate-50">
                        {d.textP}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
};

export default Start;

const data = [
  {
    id: 1,
    textH3: `Backend Developer`,
    textP: `Experiencia en lenguajes: Python, Java, Javascript , C# y TypeScript.`,
    img: CodeBlock,
    alt: `CodeBlock`,
    className: 'backend-dev',
  },
  {
    id: 2,
    textH3: `Database Developer`,
    textP: `Experiencia en bases de datos: MySQL, SQL Server y MongoDB.`,
    img: Database,
    alt: `DatabaseImg`,
    className: 'database-dev',
  },
  {
    id: 3,
    textH3: `Frontend Developer`,
    textP: `Apasionado por UX/UI. Más de 2 años de experiencia en desarrollo React.`,
    img: React,
    alt: `ReactImg`,
    className: 'frontend-dev',
  },
];