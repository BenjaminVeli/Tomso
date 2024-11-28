import { useState } from 'react';
import { myProjects } from '../constants/index.js';

const projectCount = myProjects.length;

const Featured = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section id="destacado" className="py-28">
      <div className="container mx-auto c-space">
        <h2 className="text-4xl md:text-6xl font-bold pb-2 text-white uppercase text-center">
          Destacado
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl"/>
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm'/>
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className='text-white text-2xl font-semibold'>{currentProject.title}</p>
              
              <p className='text-gray-400'>{currentProject.desc}</p>
              <p className='text-gray-400'>{currentProject.subdesc}</p>   
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map(
                  (tag,index) => (
                    <div key={index} className="tech-logo">
                      <img src={tag.path} alt="tag.name" />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-7">
                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                  <img src="/assets/left-arrow.png" alt="left arrow" />
                </button>
                <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                  <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
                </button>
            </div>
          </div>
          
          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex justify-center items-center">
            <img src={currentProject.projectImg} alt="project" className="object-contain max-h-full max-w-full" />
            
          </div>

        </div>
      </div>
    </section>
  )
}

export default Featured