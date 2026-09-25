import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { HackathonsSection } from './components/HackathonsSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { BuildingJourneySection } from './components/BuildingJourneySection';
import { EducationSection } from './components/EducationSection';
import { NssSection } from './components/NssSection';
import { CoreStrengthsSection } from './components/CoreStrengthsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bhuvana_theme');
      if (saved) return saved === 'dark';
      return true; // Default dark
    }
    return true;
  });

  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('bhuvana_theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Sticky Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection
          isDark={isDark}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. About Me */}
        <AboutSection isDark={isDark} />

        {/* 3. Featured Projects (SmartBundle AI, PyroSentinel-GIS, FoodLink - TEAM PROJECTS, No Images) */}
        <ProjectsSection isDark={isDark} />

        {/* 4. Hackathons & Competitions Timeline */}
        <HackathonsSection isDark={isDark} />

        {/* 5. Technical Skills ("Technologies & Areas I'm Building With") */}
        <SkillsSection isDark={isDark} />

        {/* 6. Certifications & Participation */}
        <CertificationsSection isDark={isDark} />

        {/* 7. My Building Journey (LEARN -> EXPLORE -> BUILD -> COLLABORATE -> ITERATE) */}
        <BuildingJourneySection isDark={isDark} />

        {/* 8. Education (B.Tech CSE AI/ML, 2nd Year, BVRIT Hyderabad) */}
        <EducationSection isDark={isDark} />

        {/* 9. NSS & Involvement */}
        <NssSection isDark={isDark} />

        {/* 10. Core Strengths */}
        <CoreStrengthsSection isDark={isDark} />

        {/* 11. Contact ("Let's Build Something Meaningful.") */}
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* ATS-Friendly One-Page Resume Viewer & Exporter */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
