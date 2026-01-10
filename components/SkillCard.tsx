
import React from 'react';
import { SkillCategory } from '../types';
import { SpotlightCard } from './ui/SpotlightCard';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <SpotlightCard className="h-full">
      <div className="bg-white dark:bg-[#0c0c16] p-8 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-brand-accent/30 dark:hover:border-blue-500/30 transition-all duration-300 group flex flex-col h-full shadow-sm dark:shadow-none">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <i className={`${category.icon} text-2xl text-brand-accent dark:text-blue-500 transition-colors`}></i>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {category.category}
            </h3>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-bold border border-blue-200 dark:border-blue-500/30">
            {category.skills.length}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, sIdx) => (
            <span 
              key={sIdx} 
              className="px-4 py-2 bg-gray-50 dark:bg-[#1a1a2e] text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-white/10 group-hover:border-brand-accent/20 dark:group-hover:border-blue-500/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SpotlightCard>
  );
};
