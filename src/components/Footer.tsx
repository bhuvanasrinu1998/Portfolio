import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 px-4 sm:px-6 transition-colors ${
        isDark ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Academic Note */}
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-base text-slate-100">
            {PERSONAL_INFO.name}
          </div>
          <div className="text-xs text-slate-400 mt-0.5 font-mono">
            2nd-Year B.Tech CSE (AI/ML) · {PERSONAL_INFO.college}
          </div>
        </div>

        {/* Navigation Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium">
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </a>
          <a href="#hackathons" className="hover:text-cyan-400 transition-colors">
            Hackathons
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Skills
          </a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors">
            Certifications
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3 text-xs">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors"
            aria-label="Email Contact"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg hover:bg-slate-900 hover:text-cyan-400 transition-colors ml-1"
            aria-label="Scroll to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900/60 text-center text-[11px] font-mono text-slate-500">
        Prepared for Microsoft Technical Evaluation & Hackathons · Strictly authentic undergraduate profile without exaggerated claims.
      </div>
    </footer>
  );
};
