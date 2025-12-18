import React from 'react';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
           <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Selected Work</h2>
           <div className="h-1.5 w-24 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.4)] mb-6"></div>
           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Pro Bono & Impact Projects
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};