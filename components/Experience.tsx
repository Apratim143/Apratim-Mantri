import React from 'react';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-black/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
        
        {/* Sticky Header */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Professional Experience</h2>
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            A track record of delivering results across industries.
          </p>
        </div>

        {/* Timeline List */}
        <div className="lg:w-2/3 relative pt-2">
          {/* Vertical Line - Starts from the top of the first dot (top-9 aligns with top-7 + pt-2) */}
          <div className="absolute left-0 top-9 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900/40"></div>

          <div className="space-y-10">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative pl-10 md:pl-12 group">
                
                {/* Timeline Dot - Solid Glow Style */}
                <div className="absolute left-[-5px] top-7 w-3 h-3 rounded-full bg-brand-accent dark:bg-blue-500 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.6)] dark:shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                
                {/* Card */}
                <div className="bg-white dark:bg-[#0c0c16] border border-gray-200 dark:border-white/5 rounded-xl p-6 md:p-8 hover:border-brand-accent/30 dark:hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-lg dark:shadow-none relative overflow-hidden group-hover:bg-gray-50 dark:group-hover:bg-[#11111d]">
                  
                  {/* Header: Role & Date */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
                      {job.role}
                    </h3>

                    {/* Date Badge */}
                    <div className="self-start md:self-center px-3 py-1.5 rounded-md bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 text-xs font-mono font-semibold whitespace-nowrap tracking-wide">
                      {job.period}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 font-medium mb-6">
                    <i className="fa-solid fa-briefcase text-sm opacity-70"></i>
                    <span>{job.company}</span>
                  </div>

                  {/* Description List */}
                  <ul className="space-y-3">
                    {job.description.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-600 shrink-0 opacity-70"></span>
                        <span className="group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};