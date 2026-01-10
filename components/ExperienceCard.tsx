
import React from 'react';
import { Experience } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

interface ExperienceCardProps {
  job: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ job }) => {
  return (
    <div className="relative pl-10 md:pl-12 group">
      <div className="absolute left-[-5px] top-7 w-3 h-3 rounded-full bg-brand-accent dark:bg-blue-500 z-20 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.6)] dark:shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
      
      <SpotlightCard>
        <div className="bg-white dark:bg-[#0c0c16] border border-gray-200 dark:border-white/5 rounded-xl p-6 md:p-8 hover:border-brand-accent/30 dark:hover:border-blue-500/40 transition-all duration-300 shadow-sm relative overflow-hidden group-hover:bg-gray-50/50 dark:group-hover:bg-[#11111d]/50">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
              {job.role}
            </h3>
            <div className="self-start md:self-center px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-semibold whitespace-nowrap tracking-wide">
              {job.period}
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium mb-6">
            <i className="fa-solid fa-briefcase text-sm opacity-70"></i>
            <span>{job.company}</span>
          </div>

          <ul className="space-y-3">
            {job.description.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600 shrink-0 opacity-70"></span>
                <span className="group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </SpotlightCard>
    </div>
  );
};
