import React from 'react';
import { NSS_DATA } from '../data/portfolioData';
import { Heart, Users, CheckCircle2 } from 'lucide-react';

interface NssSectionProps {
  isDark: boolean;
}

export const NssSection: React.FC<NssSectionProps> = ({ isDark }) => {
  return (
    <section className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`p-6 sm:p-8 rounded-2xl border transition-all ${
            isDark
              ? 'bg-slate-900/50 border-slate-800'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Student Involvement & Civic Engagement
                </span>
                <h3 className="text-xl font-display font-bold text-slate-100">
                  {NSS_DATA.organization}
                </h3>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              Role: <span className="text-slate-200 font-semibold px-2 py-0.5 rounded bg-slate-800 border border-slate-700">{NSS_DATA.role}</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            {NSS_DATA.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{NSS_DATA.institution}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
