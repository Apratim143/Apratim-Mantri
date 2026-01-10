
import React from 'react';
import { Project } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

const getProjectIcon = (role?: string) => {
  const r = role?.toLowerCase() || '';
  if (r.includes('web')) return 'fa-solid fa-code';
  if (r.includes('social')) return 'fa-solid fa-share-nodes';
  if (r.includes('marketing') || r.includes('digital')) return 'fa-solid fa-bullhorn';
  if (r.includes('ads')) return 'fa-solid fa-rectangle-ad';
  return 'fa-solid fa-layer-group';
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <SpotlightCard className="h-full">
      <div className="bg-white dark:bg-[#0c0c16] p-8 rounded-xl group hover:shadow-xl dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between border border-gray-100 dark:border-white/10 hover:border-brand-accent/50 dark:hover:border-blue-500/50 relative overflow-hidden h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 dark:bg-blue-600/10 rounded-full -mr-16 -mt-16 group-hover:bg-brand-accent/10 dark:group-hover:bg-blue-600/20 transition-colors duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-gray-50 dark:bg-white/10 rounded-lg shadow-sm group-hover:bg-brand-accent dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-brand-accent dark:text-blue-400">
              <i className={`${getProjectIcon(project.role)} text-2xl`}></i>
            </div>
            {project.link && (
              <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent dark:hover:text-blue-400 transition-colors p-2">
                <i className="fa-solid fa-up-right-from-square text-lg"></i>
              </a>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-blue-400 transition-colors">{project.name}</h3>
          {project.role && <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wide">{project.role}</p>}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">{project.description}</p>
        </div>
        
        <div className="relative z-10 pt-6 border-t border-gray-100 dark:border-white/10 flex justify-between items-center text-xs font-bold tracking-wider text-gray-500 uppercase">
          <span>{project.period}</span>
          {project.link && (
            <a href={`https://${project.link}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-brand-accent dark:text-blue-400 hover:underline lowercase font-medium">
              View <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
};
