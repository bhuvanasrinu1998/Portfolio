import React from 'react';
import { CORE_STRENGTHS } from '../data/portfolioData';
import { Users, Lightbulb, Zap, RefreshCw, MessageSquare, FolderGit2, Sparkles, Compass } from 'lucide-react';

interface CoreStrengthsSectionProps {
  isDark: boolean;
}

export const CoreStrengthsSection: React.FC<CoreStrengthsSectionProps> = ({ isDark }) => {
  const getStrengthIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return Users;
      case 1:
        return Lightbulb;
      case 2:
        return Zap;
      case 3:
        return RefreshCw;
      case 4:
        return MessageSquare;
      case 5:
        return FolderGit2;
      case 6:
        return Sparkles;
      default:
        return Compass;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            08. Professional & Work Qualities
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Core Strengths & Collaboration
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Interpersonal, problem-solving, and team qualities refined during fast-paced hackathon sprints and collegiate development.
          </p>
        </div>

        {/* Strengths Cards Grid (No fake percentages, no skill bars) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORE_STRENGTHS.map((strength, idx) => {
            const Icon = getStrengthIcon(idx);

            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-3">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-sm font-display font-bold text-slate-100 mb-1.5">
                  {strength.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
