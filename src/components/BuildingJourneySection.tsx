import React from 'react';
import { BUILDING_JOURNEY_STEPS } from '../data/portfolioData';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface BuildingJourneySectionProps {
  isDark: boolean;
}

export const BuildingJourneySection: React.FC<BuildingJourneySectionProps> = ({ isDark }) => {
  return (
    <section className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            06. Engineering Progression
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            My Building Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mt-3 leading-relaxed">
            "From learning concepts in the classroom to turning problem statements into working applications through hackathons, I am continuously building my engineering skills."
          </p>
        </div>

        {/* Visual Progression Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {BUILDING_JOURNEY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border flex flex-col justify-between transition-all relative ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    STEP {step.step}
                  </span>
                  {idx < BUILDING_JOURNEY_STEPS.length - 1 && (
                    <span className="hidden md:inline text-slate-600 font-mono text-xs">
                      →
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-display font-extrabold text-slate-100 tracking-tight mb-1">
                  {step.title}
                </h3>

                <div className="text-xs font-semibold text-cyan-300 mb-2">
                  {step.caption}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Mobile down arrow */}
              {idx < BUILDING_JOURNEY_STEPS.length - 1 && (
                <div className="md:hidden mt-3 flex justify-center text-slate-600">
                  <ArrowDown className="w-4 h-4 text-cyan-500/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Supporting Reinforcement */}
        <div className="mt-8 text-center text-xs text-slate-400 font-mono">
          Reflecting active early-career development as a 2nd-year B.Tech CSE (AI/ML) undergraduate.
        </div>
      </div>
    </section>
  );
};
