import React from 'react';
import { Education } from '../types';

interface EducationCardProps {
  education: Education;
}

export const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  return (
    <div className="group flex gap-6 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-gray-100 dark:hover:border-white/10 dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]">
      <div className="mt-1 text-gray-400 dark:text-white group-hover:text-brand-accent dark:group-hover:text-blue-400 text-3xl transition-colors duration-300">
        <i className="fa-solid fa-graduation-cap"></i>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{education.institution}</h3>
        <p className="text-lg text-brand-accent dark:text-blue-400 font-medium mb-1">{education.degree}</p>
        <p className="text-sm text-gray-400 mb-4 font-mono">{education.period}</p>
        {education.details && (
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
            {education.details.map((d, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                {d}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};