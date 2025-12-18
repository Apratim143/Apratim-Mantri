import React from 'react';
import { EDUCATION } from '../constants';
import { EducationCard } from './EducationCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
           <h2 className="text-3xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Education</h2>
           <div className="h-1.5 w-16 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>
        
        <div className="md:w-2/3 grid gap-8">
          {EDUCATION.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
};