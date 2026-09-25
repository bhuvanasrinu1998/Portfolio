import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, FileCheck, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  isDark: boolean;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ isDark }) => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            05. Verified Records
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Certifications & Participation
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Authentic records of technical hackathons, specialized coursework, and institutional participation.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-cyan-400">{cert.organization}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                    {cert.type === 'Certificate of Completion' ? 'Completion' : 'Participation'}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-100 mb-1">
                  {cert.title}
                </h3>

                <div className="text-xs font-semibold text-cyan-300 mb-2">
                  {cert.type}
                </div>

                {cert.details && (
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.details}
                  </p>
                )}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accuracy Assurance Note */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Strictly using accurate terminology (Certificate of Participation / Completion) without labeling participation as awards or fabricating ranks.
        </div>
      </div>
    </section>
  );
};
