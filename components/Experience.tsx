import React from 'react';
import { EXPERIENCE } from '../constants';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Professional Experience</h2>
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A track record of delivering results across industries.
          </p>
        </div>
        <div className="lg:w-2/3 relative pt-2">
          <div className="absolute left-0 top-9 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/40"></div>
          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <ExperienceCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};