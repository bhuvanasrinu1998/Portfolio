import React from 'react';
import { ABOUT_TEXT, PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Brain, Users2, Rocket, Lightbulb, Check } from 'lucide-react';

interface AboutSectionProps {
  isDark: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  const highlights = [
    { text: 'Building practical, working applications from scratch', icon: Code2 },
    { text: 'Exploring Artificial Intelligence & Machine Learning concepts', icon: Brain },
    { text: 'Full-stack & software engineering fundamentals', icon: Rocket },
    { text: 'High-energy hackathons & technical problem competitions', icon: Lightbulb },
    { text: 'Collaborating in cross-functional student developer teams', icon: Users2 },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            01. Background & Perspective
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* First-person narrative */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
            {ABOUT_TEXT.map((paragraph, index) => (
              <p key={index} className="text-pretty">
                {paragraph}
              </p>
            ))}

            {/* Quick stats / metadata cards (authentic, no fabricated numbers) */}
            <div
              className={`pt-6 mt-6 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              } grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans`}
            >
              <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/30">
                <span className="text-slate-400 block mb-1 font-mono">Current Status</span>
            <span className="font-semibold text-slate-100">
              B.Tech CSE (AI/ML) Undergraduate
            </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/30">
                <span className="text-slate-400 block mb-1 font-mono">Institution</span>
                <span className="font-semibold text-slate-100">
                  BVRIT Hyderabad College of Engineering for Women
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/30">
                <span className="text-slate-400 block mb-1 font-mono">Discipline</span>
                <span className="font-semibold text-slate-100">
                  CSE (Artificial Intelligence & Machine Learning)
                </span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-800/80 bg-slate-900/30">
                <span className="text-slate-400 block mb-1 font-mono">Primary Focus</span>
                <span className="font-semibold text-cyan-400">
                  AI/ML Applications & Practical Software Development
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Areas I Enjoy */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              What I Enjoy & Practice
            </div>

            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border flex items-center gap-3.5 transition-all ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    {item.text}
                  </span>
                </div>
              );
            })}

            {/* Note on hackathon experience */}
            <div
              className={`p-4 rounded-xl border text-xs leading-relaxed ${
                isDark ? 'bg-cyan-500/5 border-cyan-500/20 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-900'
              }`}
            >
              <strong className="block mb-1 font-mono uppercase tracking-wider">
                Hackathon Mindset:
              </strong>
              "Turning problem statements into functioning software prototypes under tight deadlines while collaborating in multi-person teams."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
