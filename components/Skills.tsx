import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-gray-900 dark:text-white">
            Strategic Capabilities
          </h2>
          {/* Thematic Underline */}
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(59,130,246,0.6)] rounded-full mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A comprehensive toolkit designed to cover every aspect of your digital presence, from acquisition to retention.
          </p>
        </div>

        {/* Grid Layout - 2 Columns for wider cards like the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((cat, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 dark:bg-[#11111d] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-brand-accent/30 dark:hover:border-blue-500/30 transition-all duration-300 group flex flex-col hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              {/* Card Header: Icon + Title + Count Badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <i className={`${cat.icon} text-2xl text-brand-accent dark:text-blue-500 transition-colors`}></i>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {cat.category}
                  </h3>
                </div>
                
                {/* Count Badge */}
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-bold border border-blue-200 dark:border-blue-500/30">
                  {cat.skills.length}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-white dark:bg-[#1a1a2e] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-white/10 group-hover:border-brand-accent/20 dark:group-hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};