import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, BookOpen, Layers } from 'lucide-react';

interface EducationSectionProps {
  isDark: boolean;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ isDark }) => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            07. Academic Foundation
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div
          className={`p-6 sm:p-9 rounded-2xl border transition-all ${
            isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {EDUCATION_DATA.yearStatus}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 mt-0.5">
                  {EDUCATION_DATA.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  Specialization: {EDUCATION_DATA.specialization}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {EDUCATION_DATA.institution}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <span className="inline-block text-xs font-mono px-3 py-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold">
                Status: 2nd Year
              </span>
            </div>
          </div>

          {/* Academic Focus & Foundations */}
          <div className="mt-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
              Core Coursework & Learning Focus:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {EDUCATION_DATA.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                  <span className="text-slate-300">{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic note */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>BVRIT Hyderabad College of Engineering for Women</span>
            <span className="text-cyan-400">Strictly Authentic Academic Record</span>
          </div>
        </div>
      </div>
    </section>
  );
};
