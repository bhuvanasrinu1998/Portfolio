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
          <h2
            className={`text-2xl sm:text-4xl font-display font-bold tracking-tight ${
              isDark ? 'text-slate-100' : 'text-slate-900'
            }`}
          >
            Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {EDUCATION_DATA.map((education, index) => (
            <div
              key={`${education.institution}-${index}`}
              className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              {/* Institution + Duration */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-5">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : index === 1 ? (
                      <Layers className="w-6 h-6" />
                    ) : (
                      <BookOpen className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-display font-bold ${
                        isDark ? 'text-slate-100' : 'text-slate-900'
                      }`}
                    >
                      {education.institution}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                      {education.duration}
                    </p>
                  </div>
                </div>

                {/* Score */}
                {education.score && (
                  <span className="inline-block text-xs font-mono px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold shrink-0">
                    {education.score}
                  </span>
                )}
              </div>

              {/* Qualification */}
              <div className="mt-5 pl-0 sm:pl-[4.25rem]">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Qualification
                </span>

                <p
                  className={`text-sm sm:text-base font-semibold mt-1 ${
                    isDark ? 'text-slate-200' : 'text-slate-800'
                  }`}
                >
                  {education.qualification}
                </p>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mt-2 max-w-4xl ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic note */}
        <div
          className={`mt-6 pt-4 border-t text-[11px] font-mono flex items-center justify-between gap-4 ${
            isDark
              ? 'border-slate-800 text-slate-400'
              : 'border-slate-200 text-slate-500'
          }`}
        >
          <span>BVRIT Hyderabad College of Engineering for Women</span>
          <span className="text-cyan-400">Academic Record</span>
        </div>
      </div>
    </section>
  );
};
