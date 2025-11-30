import React from 'react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-24">
        
        {/* Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-nyc-purple shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(188,19,254,0.6)] mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A chronological overview of my professional journey in digital marketing, spanning agency roles and specialized projects.
          </p>
        </div>

        {/* List */}
        <div className="lg:w-2/3 space-y-12">
          {EXPERIENCE.map((job) => (
            <div key={job.id} className="group relative border-l-2 border-gray-200 dark:border-white/10 pl-8 md:pl-12 py-2 hover:border-brand-accent dark:hover:border-nyc-cyan transition-colors duration-500">
              <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white dark:bg-nyc-night border-2 border-gray-300 dark:border-gray-600 group-hover:border-brand-accent dark:group-hover:border-nyc-cyan group-hover:shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all"></span>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-nyc-cyan transition-colors">{job.company}</h3>
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mt-1 sm:mt-0">{job.period}</span>
              </div>
              
              <div className="text-lg text-brand-accent dark:text-nyc-purple font-medium mb-4 flex items-center gap-2">
                <i className="fa-solid fa-briefcase"></i> {job.role}
              </div>

              <ul className="space-y-4">
                {job.description.map((point, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed text-base flex items-start">
                    <span className="mr-3 mt-2.5 block w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-brand-accent dark:group-hover:bg-nyc-cyan transition-colors shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};