import React, { useState } from 'react';
import { ArrowDown, FileText, Send, Github, Linkedin, Mail, Check, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NeuralCanvas } from './NeuralCanvas';

interface HeroSectionProps {
  isDark: boolean;
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onOpenResume }) => {
  const [emailCopied, setEmailCopied] = useState<boolean>(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Interactive Neural Node & Data Flow Canvas */}
      <NeuralCanvas isDark={isDark} />

      {/* Subtle fine ambient mesh */}
      <div
        className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] rounded-full blur-[130px] pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-1/4 w-[380px] h-[260px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700 ${
          isDark ? 'bg-indigo-500/10' : 'bg-indigo-500/5'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Unboxed Technical Status Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wide text-cyan-400 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>BVRIT Hyderabad College of Engineering for Women</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>B.Tech CSE (AI/ML)</span>
        </div>

        {/* Primary Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-balance leading-[1.08] mb-6">
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            Bhuvana Kruthi
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 font-display">
            Bandarupalli
          </span>
        </h1>

        {/* Primary Headline */}
        <div className="text-base sm:text-xl font-medium tracking-tight mb-5 text-balance">
          <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
            Computer Science Engineering Student
          </span>
          <span className="text-cyan-500 mx-2 sm:mx-2.5">|</span>
          <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
            AI/ML Enthusiast
          </span>
          <span className="text-cyan-500 mx-2 sm:mx-2.5">|</span>
          <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>
            Developer
          </span>
        </div>

        {/* Supporting text */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed mb-4 text-balance">
          {PERSONAL_INFO.supportingText}
        </p>

        {/* Short secondary line */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-400 leading-relaxed mb-10 text-balance font-mono">
          {PERSONAL_INFO.secondaryText}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <span>View My Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResume}
            className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all transform hover:-translate-y-0.5 ${
              isDark
                ? 'border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200'
                : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800'
            }`}
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className={`flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold rounded-xl border transition-all transform hover:-translate-y-0.5 ${
              isDark
                ? 'border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                : 'border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
          >
            <Send className="w-4 h-4 text-indigo-400" />
            <span>Let's Connect</span>
          </a>
        </div>

        {/* Social Icons & Email Quick Copy */}
        <div className="flex items-center justify-center gap-6 text-xs text-slate-400">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <span aria-hidden="true" className="text-slate-700">·</span>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <span aria-hidden="true" className="text-slate-700">·</span>

          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors py-1 cursor-pointer"
            title="Click to copy email address"
          >
            {emailCopied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Subtle technical micro-element (code snippet hint, no photos) */}
        <div className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-slate-800/80 bg-slate-950/40 text-[11px] font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>target: Microsoft Technical Evaluation & Hackathon Showcase</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400">status: actively building & learning</span>
        </div>
      </div>
    </section>
  );
};
