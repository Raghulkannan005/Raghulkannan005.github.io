import { projects } from './constants.js';
import { useTheme } from '../context/ThemeContext';
import React, { useState } from 'react';

const ProjectLink = ({ href, children }) => {
  const [loaded, setLoaded] = useState(false);

  const handleClick = () => {
    if (!loaded) {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
      setLoaded(true);
    }
  };

  return (
    <div onClick={handleClick} className="project-tile ">
      {children}
    </div>
  );
};

const Projects = ({ onlyIfOpenToggle }) => {
  const { darkMode } = useTheme();
  return (
    <main onClick={onlyIfOpenToggle} className={`w-full min-h-screen p-8 pt-24 ${darkMode ? 'bg-gradient-to-b from-[#014449] to-[#0a192f]' : 'bg-gradient-to-b from-[#98d4d8] to-[#86a2ee]'}`} id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-black'} mb-4`}>PROJECTS</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-slate-950'} text-xl text-center mb-8`}>
          Here are some of the projects I&apos;ve worked on. Click on the images to view the project.
        </p>
        <div className="flex flex-wrap justify-center mx-auto w-9/10 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 max-w-[280px] rounded-lg hover:scale-105 duration-100">
              <ProjectLink href={project.link}>
                <img src={project.image} alt={project.alt} className="w-full h-48 object-cover" loading="lazy" />
              </ProjectLink>
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
