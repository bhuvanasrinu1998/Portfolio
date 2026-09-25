import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code2, Layout, Brain, Database, Terminal } from 'lucide-react';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Programming')) return Code2;
    if (category.includes('Web')) return Layout;
    if (category.includes('AI')) return Brain;
    if (category.includes('Database')) return Database;
    return Terminal;
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            04. Technical Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Technologies & Areas I'm Building With
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Technologies practiced and applied in undergraduate engineering coursework, hackathon team builds, and prototype developments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);

            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold tracking-tight text-slate-100">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Skills as clean, unboxed typography list */}
                <div className="space-y-2.5 mb-4">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs py-1"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                        <span className="font-medium text-slate-200">{skill}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">active focus</span>
                    </div>
                  ))}
                </div>

                {group.note && (
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 text-[11px] font-mono text-slate-400">
                    {group.note}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Authentic Engineering Note */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Framed authentically as active technologies I work with as a B.Tech CSE (AI/ML) undergraduate, without inflated claims of senior proficiency.
        </div>
      </div>
    </section>
  );
};
