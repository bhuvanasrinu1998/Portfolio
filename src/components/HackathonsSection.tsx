import React from 'react';
import { HACKATHONS_DATA } from '../data/portfolioData';
import { Trophy, CheckCircle2, Users, Flame, ShoppingBag, HeartHandshake, Zap } from 'lucide-react';

interface HackathonsSectionProps {
  isDark: boolean;
}

export const HackathonsSection: React.FC<HackathonsSectionProps> = ({ isDark }) => {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            03. Competitive Prototyping
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Hackathons & Technical Challenges
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Team-based hackathons where I have moved from problem statements to working software prototypes under intensive deadlines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-10">
          {HACKATHONS_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Hackathon Entry Card */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-slate-100">
                      {item.eventName}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-0.5">
                      Project: <span className="font-semibold text-slate-200">{item.project}</span>
                    </div>
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Role: <span className="text-slate-200 font-medium">{item.role}</span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Technical Focus:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{item.focus}</p>
                  </div>

                  {item.achievement && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">Achievement: {item.achievement}</span>
                    </div>
                  )}

                  {item.participationNote && (
                    <div className="text-xs text-slate-400 font-mono">
                      Participation: {item.participationNote}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
