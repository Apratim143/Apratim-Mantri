import React from 'react';
import { SKILLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-medium mb-4 text-gray-900 dark:text-white">Technical Expertise</h2>
          <div className="h-1.5 w-24 bg-brand-accent dark:bg-nyc-cyan shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(0,243,255,0.6)]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((cat, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-white/5 p-8 border border-gray-100 dark:border-white/10 rounded-xl hover:border-brand-accent/30 dark:hover:border-nyc-cyan/50 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] transition-all duration-300 backdrop-blur-md">
              <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-200 dark:border-white/10 flex items-center justify-between text-gray-900 dark:text-white">
                {cat.category}
                <span className="text-xs text-brand-accent dark:text-nyc-cyan font-mono bg-blue-50 dark:bg-nyc-cyan/10 px-2 py-1 rounded border dark:border-nyc-cyan/20">
                  {cat.skills.length}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-white/10 rounded-md hover:border-brand-accent hover:text-brand-accent dark:hover:border-nyc-purple dark:hover:text-nyc-purple transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};