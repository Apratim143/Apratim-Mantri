import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 flex items-end justify-between border-b border-gray-200 dark:border-white/10 pb-8">
          <div>
             <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Pro Bono Work</h2>
             <div className="h-1.5 w-24 bg-brand-accent dark:bg-nyc-cyan shadow-[0_0_10px_rgba(0,243,255,0.4)]"></div>
          </div>
          <div className="hidden md:block text-gray-400 dark:text-gray-500 text-sm font-bold tracking-widest uppercase">
            Impact Projects
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-gray-50 dark:bg-white/5 p-8 rounded-xl group hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(188,19,254,0.15)] transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-white/10 hover:border-brand-accent/50 dark:hover:border-nyc-purple/50 relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 dark:bg-nyc-purple/10 rounded-full -mr-16 -mt-16 group-hover:bg-brand-accent/10 dark:group-hover:bg-nyc-purple/20 transition-colors duration-500"></div>
              
              <div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="p-3 bg-white dark:bg-white/10 rounded-lg shadow-sm group-hover:bg-brand-accent dark:group-hover:bg-nyc-purple group-hover:text-white transition-all duration-300 text-brand-accent dark:text-nyc-purple backdrop-blur-sm">
                    <i className="fa-solid fa-layer-group text-2xl"></i>
                  </div>
                  {project.link && (
                    <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent dark:hover:text-nyc-cyan transition-colors p-2">
                      <i className="fa-solid fa-up-right-from-square text-lg"></i>
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-nyc-purple transition-colors">{project.name}</h3>
                {project.role && <p className="text-sm font-semibold text-blue-600 dark:text-nyc-cyan mb-4 uppercase tracking-wide">{project.role}</p>}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{project.description}</p>
              </div>
              
              <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center text-xs font-bold tracking-wider text-gray-500 uppercase">
                <span>{project.period}</span>
                {project.link && (
                  <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-brand-accent dark:text-nyc-cyan hover:underline lowercase font-medium">
                    View <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};