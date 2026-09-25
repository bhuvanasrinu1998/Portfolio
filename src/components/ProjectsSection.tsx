import React, { useState } from 'react';
import { FEATURED_PROJECTS, Project } from '../data/portfolioData';
import { Github, ExternalLink, Sparkles, Check, Play, Terminal, Flame, ShoppingBag, HeartHandshake, ShieldAlert } from 'lucide-react';
import { SmartBundleDemoModal } from './SmartBundleDemoModal';

interface ProjectsSectionProps {
  isDark: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ isDark }) => {
  const [smartBundleModalOpen, setSmartBundleModalOpen] = useState<boolean>(false);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'smartbundle-ai':
        return ShoppingBag;
      case 'pyrosentinel-gis':
        return Flame;
      case 'foodlink':
        return HeartHandshake;
      default:
        return Terminal;
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
            02. Hackathon Implementations
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-balance">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2 leading-relaxed">
            Real software prototypes developed in intensive hackathons and technical competitions with collaborative student teams.
          </p>
        </div>

        {/* Featured Projects Cards (Technical, clean, NO screenshots or photos) */}
        <div className="space-y-10">
          {FEATURED_PROJECTS.map((project) => {
            const Icon = getProjectIcon(project.id);

            return (
              <div
                key={project.id}
                className={`rounded-2xl border p-6 sm:p-8 lg:p-9 transition-all duration-300 relative overflow-hidden ${
                  isDark
                    ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Top Banner: Event, Initials, Team Project Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    {/* Project Initials Badge */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-base sm:text-lg border ${
                        project.id === 'smartbundle-ai'
                          ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                          : project.id === 'pyrosentinel-gis'
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      }`}
                    >
                      {project.initials}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-medium">
                          {project.event}
                        </span>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        {/* Clear TEAM PROJECT Label */}
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-100 mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{project.tagline}</span>
                  </div>
                </div>

                {/* Milestone callout if present */}
                {project.milestone && (
                  <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-medium">{project.milestone}</span>
                  </div>
                )}

                {/* Main Body */}
                <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                        Concept & Description
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        "{project.description}"
                      </p>
                    </div>

                    {/* Highlights List */}
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Core Functional Highlights
                      </span>
                      <div className="grid grid-cols-1 gap-2">
                        {project.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Technical Details & Actions */}
                  <div className="lg:col-span-5 space-y-5">
                    {/* Architecture Note */}
                    <div
                      className={`p-4 rounded-xl border text-xs leading-relaxed ${
                        isDark ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <span className="font-mono text-cyan-400 uppercase tracking-wider block mb-1 text-[11px]">
                        Engineering Architecture:
                      </span>
                      <p className="text-slate-400">{project.architectureNotes}</p>
                    </div>

                    {/* Technologies list */}
                    <div>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                        Verified Implementation Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950/60 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      {project.id === 'smartbundle-ai' ? (
                        <>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-700 text-slate-200 transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>View GitHub</span>
                          </a>
                          <button
                            onClick={() => setSmartBundleModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Interactive Concept Demo</span>
                          </button>
                        </>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>View Project Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Concept Demo Modal for SmartBundle */}
      <SmartBundleDemoModal
        isOpen={smartBundleModalOpen}
        onClose={() => setSmartBundleModalOpen(false)}
        isDark={isDark}
      />
    </section>
  );
};
