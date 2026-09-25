import React, { useState } from 'react';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, FEATURED_PROJECTS, HACKATHONS_DATA, CERTIFICATIONS_DATA, NSS_DATA, CORE_STRENGTHS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, isDark }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const getAtsResumeText = () => {
    return `BHUVANA KRUTHI BANDARUPALLI
B.Tech CSE (AI/ML) Student | Developer | AI/ML Enthusiast
Hyderabad, India | Email: ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

==================================================
PROFESSIONAL SUMMARY
==================================================
2nd-year B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) student at BVRIT Hyderabad College of Engineering for Women. Passionate about building practical technology solutions, exploring AI/ML and software engineering, and turning ideas into working applications through hackathons and collaborative team projects.

==================================================
EDUCATION
==================================================
Bachelor of Technology (B.Tech) — Computer Science and Engineering
Specialization: Artificial Intelligence & Machine Learning
BVRIT Hyderabad College of Engineering for Women
Status: 2nd Year Undergraduate Student
Relevant Coursework & Focus Areas:
- Data Structures & Algorithms, Object-Oriented Programming (Java & Python)
- Artificial Intelligence, Machine Learning Fundamentals, Recommendation Logic
- Database Management Systems (SQL & MySQL)
- Web Development Technologies, REST APIs, Git & Version Control

==================================================
TECHNICAL SKILLS
==================================================
- Programming: Python, Java, JavaScript, SQL
- Web Development: HTML, CSS, JavaScript, React, Next.js, Node.js
- AI / ML: Artificial Intelligence, Machine Learning, Generative AI Concepts, AI-Powered Applications, Recommendation Systems
- Databases: SQL, MySQL, Database Management
- Tools & Technologies: Git, GitHub, VS Code, REST APIs

==================================================
FEATURED PROJECTS (HACKATHONS / TEAM PROJECTS)
==================================================
1. SmartBundle AI [TEAM PROJECT]
   Event: DEMUX 3.0 Hackathon
   Technologies: Next.js, React, Tailwind CSS, Python, REST/API Backend, Git/GitHub
   Repository: https://github.com/sriyukthach/SmartBundle-AI
   - Engineered an AI-powered e-commerce recommendation and smart bundling solution to provide context-aware product recommendations.
   - Designed cart-aware recommendation flows that analyze active shopping basket items to propose relevant product combinations.
   - Built a dashboard interface to visualize bundle pairing affinity and customer checkout value optimization.

2. PyroSentinel-GIS [TEAM PROJECT]
   Event: Smart India Hackathon (SIH 2026)
   Technologies: Python, GIS Data Formats, Web Interface, REST APIs, Git/GitHub
   Repository: https://github.com/pvsatvika/pyrosentinel-gis
   - Developed an industrial fire monitoring prototype as a team project for Smart India Hackathon 2026.
   - Focused on addressing the critical challenge of monitoring and responding to industrial fire risks.
   - Structured alert propagation logic and location-based hazard monitoring workflows.

3. FoodLink [TEAM PROJECT]
   Event: Prompt Wars
   Technologies: React, JavaScript, Node.js / Express, Python AI Matching, REST APIs, Git/GitHub
   Repository: https://github.com/sriyukthach/FoodLink-AI
   Achievement: Selected through Round 1 and advanced to Round 2 of Prompt Wars with the FoodLink application.
   - Developed an AI-powered food redistribution and food-waste management platform connecting surplus food donors, NGOs, and delivery personnel.
   - Implemented smart matching coordination to streamline urgent pickup routes and reduce perishable food waste.

==================================================
HACKATHONS & COMPETITIONS
==================================================
- DEMUX 3.0: Team Member | Project: SmartBundle AI (AI-powered e-commerce recommendation & smart bundling)
- Smart India Hackathon (SIH 2026): Team Member | Project: PyroSentinel-GIS (Industrial fire monitoring prototype)
- Prompt Wars: Team Member | Project: FoodLink (Selected through Round 1 and advanced to Round 2)
- WEB2CART / ISTE Full-Stack E-Commerce Challenge: Individual Participant | Project: E-Commerce Interface Challenge (Individual technical challenge)

==================================================
CERTIFICATIONS & PARTICIPATION
==================================================
- Adobe University Hackathon — Certificate of Participation
- DEMUX 3.0 — Certificate of Participation
- Smart India Hackathon — Certificate of Participation
- Anthropic — Certificate of Completion: AI Fluency / Frameworks and Foundations
- TEDx BVRIT Hyderabad — Certificate of Participation

==================================================
NSS & INVOLVEMENT
==================================================
National Service Scheme (NSS) — Member
BVRIT Hyderabad College of Engineering for Women
- Active student volunteer participating in institutional community service, social welfare drives, and civic outreach initiatives.

==================================================
CORE STRENGTHS
==================================================
- Teamwork & Collaboration: Proven in multi-person hackathon teams delivering software prototypes under deadlines.
- Problem Solving: Deconstructing problem statements into modular architectures and actionable code.
- Quick Learning & Adaptability: Rapidly mastering new libraries, APIs, and AI concepts during intensive technical challenges.
- Communication & Organization: Clearly articulating project ideas and maintaining disciplined Git repository workflows.
- Curiosity & Creative Thinking: Actively exploring how AI and software can be applied to solve real human problems.
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getAtsResumeText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([getAtsResumeText()], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Bhuvana_Kruthi_Bandarupalli_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden ${
          isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Action Header bar */}
        <div className="flex items-center justify-between p-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-950/30">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-display font-bold text-xs sm:text-sm">
              ATS-Friendly Resume Preview (2nd-Year Engineering Student)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs font-medium transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors"
              title="Download ATS Resume as .txt"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs font-medium transition-colors"
              title="Copy plaintext to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Friendly Document Container */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-6 text-xs sm:text-sm font-sans leading-relaxed selection:bg-cyan-500/20">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5 text-center sm:text-left sm:flex sm:justify-between sm:items-start">
            <div>
              <h1 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xs sm:text-sm font-medium text-cyan-400 mt-0.5">
                B.Tech CSE (AI/ML) Student | Developer | AI/ML Enthusiast
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {PERSONAL_INFO.college} · {PERSONAL_INFO.location}
              </p>
            </div>
            <div className="mt-3 sm:mt-0 text-xs text-slate-400 sm:text-right space-y-0.5 font-mono">
              <div>Email: {PERSONAL_INFO.email}</div>
              <div>GitHub: github.com/bhuvanasrinu1998</div>
              <div>LinkedIn: linkedin.com/in/bhuvana-kruthi-bandarupalli-861b96377</div>
            </div>
          </div>

          {/* 1. Professional Summary */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
              1. Professional Summary
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              2nd-year B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) student at BVRIT Hyderabad College of Engineering for Women. Passionate about building practical technology solutions, exploring AI/ML and software engineering, and turning ideas into working applications through hackathons and collaborative team projects.
            </p>
          </section>

          {/* 2. Education */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
              2. Education
            </h2>
            <div className="border-l-2 border-cyan-500/40 pl-3 space-y-1">
              <div className="flex flex-wrap justify-between items-baseline">
                <span className="font-semibold text-xs sm:text-sm text-slate-200">
                  {EDUCATION_DATA.degree}
                </span>
                <span className="text-xs font-mono text-cyan-400">{EDUCATION_DATA.yearStatus}</span>
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Specialization: {EDUCATION_DATA.specialization}
              </div>
              <div className="text-xs text-slate-400">{EDUCATION_DATA.institution}</div>
              <p className="text-xs text-slate-400 pt-1">
                Coursework Areas: Data Structures & Algorithms, Object-Oriented Programming (Java/Python), Artificial Intelligence & Machine Learning Fundamentals, Database Management Systems (SQL), Web Development, and REST APIs.
              </p>
            </div>
          </section>

          {/* 3. Technical Skills */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              3. Technical Skills (Technologies & Areas I'm Building With)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Programming:</span>{' '}
                <span className="text-slate-400">Python, Java, JavaScript, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web Development:</span>{' '}
                <span className="text-slate-400">HTML, CSS, JavaScript, React, Next.js, Node.js</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">AI / ML:</span>{' '}
                <span className="text-slate-400">Artificial Intelligence, Machine Learning, Generative AI Concepts, Recommendation Systems</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Databases:</span>{' '}
                <span className="text-slate-400">SQL, MySQL, Database Management</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-semibold text-slate-200">Tools:</span>{' '}
                <span className="text-slate-400">Git, GitHub, VS Code, REST APIs</span>
              </div>
            </div>
          </section>

          {/* 4. Featured Projects (Hackathons) */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              4. Featured Projects (Real Hackathon / Team Projects)
            </h2>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((proj) => (
                <div key={proj.id} className="border-l-2 border-slate-700 pl-3">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="font-semibold text-xs sm:text-sm text-slate-200">
                      {proj.title} <span className="text-cyan-400 font-mono text-[11px] font-normal">[{proj.type}]</span>
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">{proj.event}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{proj.description}</p>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                  {proj.milestone && (
                    <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
                      Milestone: {proj.milestone}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 5. Hackathons & Competitions */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              5. Hackathons & Competitions
            </h2>
            <div className="space-y-2 text-xs">
              {HACKATHONS_DATA.map((h, idx) => (
                <div key={idx} className="flex flex-wrap items-baseline justify-between gap-1">
                  <div>
                    <span className="font-semibold text-slate-200">{h.eventName}</span>
                    <span className="text-slate-400"> — Role: {h.role} | Project: {h.project}</span>
                    {h.achievement && (
                      <div className="text-emerald-400 text-[11px] font-mono">{h.achievement}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Certifications */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              6. Certifications & Participation
            </h2>
            <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <li key={idx}>
                  <strong className="text-slate-200">{cert.title}</strong> — {cert.type} ({cert.organization})
                  {cert.details && <span className="text-slate-400"> · {cert.details}</span>}
                </li>
              ))}
            </ul>
          </section>

          {/* 7. NSS / Involvement */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
              7. NSS / Student Involvement
            </h2>
            <div className="text-xs text-slate-300">
              <strong className="text-slate-200">{NSS_DATA.organization}</strong> — {NSS_DATA.role}, {NSS_DATA.institution}
              <p className="text-slate-400 mt-0.5">{NSS_DATA.description}</p>
            </div>
          </section>

          {/* 8. Core Strengths */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1.5">
              8. Core Strengths
            </h2>
            <div className="text-xs text-slate-400 flex flex-wrap gap-x-3 gap-y-1">
              {CORE_STRENGTHS.map((s, idx) => (
                <span key={idx} className="text-slate-300">
                  • {s.name}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
