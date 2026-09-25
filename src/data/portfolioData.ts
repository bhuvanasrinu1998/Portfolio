export interface Project {
  id: string;
  title: string;
  tagline: string;
  event: string;
  type: 'TEAM PROJECT';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  milestone?: string;
  initials: string;
  themeColor: string;
  accentBorder: string;
  architectureNotes: string;
}

export interface EducationItem {
  institution: string;
  duration: string;
  qualification: string;
  score?: string;
  description: string;
}
export interface SkillGroup {
  category: string;
  skills: string[];
  note?: string;
}

export interface HackathonEntry {
  eventName: string;
  project: string;
  role: string;
  focus: string;
  achievement?: string;
  participationNote?: string;
}

export interface CertificationEntry {
  title: string;
  organization: string;
  type: 'Certificate of Participation' | 'Certificate of Completion'| 'In Progress';
  details?: string;
}

export const PERSONAL_INFO = {
  name: 'Bhuvana Kruthi Bandarupalli',
  preferredName: 'Bhuvana Kruthi',
  primaryHeadline: 'Computer Science Engineering Student | AI/ML Enthusiast | Developer',
  supportingText:
    'Building practical technology solutions through AI, software development, and real-world problem solving.',
secondaryText:
  'B.Tech CSE (AI/ML) student passionate about building, learning, collaborating, and turning ideas into working applications.',
  college: 'BVRIT Hyderabad College of Engineering for Women',
  degree: 'B.Tech — Computer Science and Engineering',
  specialization: 'Artificial Intelligence & Machine Learning',
  yearStatus: 'Undergraduate',
  email: '25wh1a6673@bvrithyderabad.edu.in',
  github: 'https://github.com/bhuvanasrinu1998',
  linkedin: 'https://www.linkedin.com/in/bhuvana-kruthi-bandarupalli-861b96377/',
  location: 'Hyderabad, India',
  targetAudienceTag: 'Hackathon & Technical Evaluation',
};

export const ABOUT_TEXT = [
  "I am a B.Tech student pursuing Computer Science and Engineering with a specialization in Artificial Intelligence & Machine Learning at BVRIT Hyderabad College of Engineering for Women.",
  "I enjoy building practical applications, exploring Artificial Intelligence and Machine Learning, and working across software and full-stack development. I am especially passionate about participating in hackathons and technical competitions, where I get to collaborate with multidisciplinary teams, rapidly experiment with new technologies, and tackle real-world problems.",
  "Participating in hackathons has given me invaluable hands-on opportunities to bridge the gap between classroom theory and real execution—taking a problem statement or idea from an initial concept to a functioning software prototype under time and design constraints."
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'BVRIT Hyderabad College of Engineering for Women',
    duration: 'August 2025 – Present',
    qualification: 'B.Tech — Computer Science and Engineering (AI/ML)',
    score: 'CGPA: 8.34',
    description:
      'Pursuing undergraduate studies with a focus on Computer Science, Artificial Intelligence, and Machine Learning. Building strong foundations in software development, problem solving, databases, and applied AI/ML.',
  },
  {
    institution: 'NxtWave — CCBP 4.0 Academy',
    duration: 'March 2026 – Present',
    qualification: 'Full Stack Web Development — Industry-Ready Trainee',
    description:
      'Developing practical full-stack web development skills through hands-on learning, coding practice, and application development with modern web technologies.',
  },
  {
    institution: 'SR Junior College',
    duration: 'June 2023 – March 2025',
    qualification: 'Intermediate Education — Classes 11 & 12',
    score: 'Percentage: 93.1%',
    description:
      'Completed intermediate education with strong foundational coursework in Mathematics, Physics, and Chemistry.',
  },
  {
    institution: 'Sri Chaitanya International Olympiad School',
    duration: 'June 2022 – April 2023',
    qualification: 'Higher Secondary Education',
    score: 'GPA: 9.2',
    description:
      'Completed higher secondary education with a strong academic foundation and emphasis on core subjects and analytical learning.',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'smartbundle-ai',
    title: 'SmartBundle AI',
    tagline: 'AI-Powered E-Commerce Recommendation & Smart Bundling Solution',
    event: 'DEMUX 3.0 Hackathon',
    type: 'TEAM PROJECT',
    initials: 'SB',
    themeColor: 'from-cyan-500/20 to-blue-500/10',
    accentBorder: 'border-cyan-500/30 hover:border-cyan-400',
    description:
      'An AI-powered e-commerce recommendation and smart bundling solution designed to provide context-aware product recommendations and help businesses create relevant product combinations.',
    highlights: [
      'Cart-aware recommendations analyzing active shopping basket contents',
      'Smart product bundles pairing complementary utility items',
      'Context-driven product recommendations tailored for consumer discovery',
      'Relevant product combinations designed to increase average basket utility',
      'E-commerce personalization and business-focused AI recommendation logic',
      'Dashboard and analytics view for monitoring bundle combinations'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Python', 'REST/API Backend', 'Product Data', 'Git/GitHub'],
    githubUrl: 'https://github.com/sriyukthach/SmartBundle-AI',
    architectureNotes: 'Engineered as a modular micro-service connecting product catalog relationships with real-time cart state queries.'
  },
  {
    id: 'pyrosentinel-gis',
    title: 'PyroSentinel-GIS',
    tagline: 'Industrial Fire Monitoring Prototype',
    event: 'Smart India Hackathon (SIH 2026)',
    type: 'TEAM PROJECT',
    initials: 'PS',
    themeColor: 'from-amber-500/20 to-orange-500/10',
    accentBorder: 'border-amber-500/30 hover:border-amber-400',
    description:
      'An industrial fire monitoring prototype developed as a team project for Smart India Hackathon 2026, focused on addressing the challenge of monitoring and responding to industrial fire risks.',
    highlights: [
      'Targeted for industrial facility safety and fire incident risk monitoring',
      'Team-engineered solution for Smart India Hackathon (SIH 2026)',
      'Problem-solving focus on hazard detection and alert propagation workflows',
      'Structured technical architecture for monitoring critical operational zones'
    ],
    technologies: ['Python', 'GIS Data Formats', 'Web Interface', 'REST APIs', 'Git/GitHub'],
    githubUrl: 'https://github.com/pvsatvika/pyrosentinel-gis',
    architectureNotes: 'Designed around real-time risk zone coordinates and rapid emergency notification signaling.'
  },
  {
    id: 'foodlink',
    title: 'FoodLink',
    tagline: 'AI-Powered Food Redistribution & Waste Management Platform',
    event: 'Prompt Wars',
    type: 'TEAM PROJECT',
    initials: 'FL',
    themeColor: 'from-emerald-500/20 to-teal-500/10',
    accentBorder: 'border-emerald-500/30 hover:border-emerald-400',
    description:
      'An AI-powered food redistribution and food-waste management platform connecting food donors, NGOs, and delivery personnel through smart matching and real-time coordination.',
    highlights: [
      'Food-waste reduction through intelligent supply-to-need dispatching',
      'Efficient food redistribution pipelines connecting donors directly with verified NGOs',
      'Delivery personnel coordination with real-time status updates',
      'Smart matching mechanism optimizing route logistics and meal shelf-life',
      'High-impact social technology designed for scalable community assistance'
    ],
    technologies: ['React', 'JavaScript', 'Node.js / Express', 'Python AI Matching', 'REST APIs', 'Git/GitHub'],
    githubUrl: 'https://github.com/sriyukthach/FoodLink-AI',
    milestone: 'Selected through Round 1 and advanced to Round 2 of Prompt Wars with the FoodLink application.',
    architectureNotes: 'Three-sided portal architecture coordinating surplus food donors, pickup personnel, and relief distribution points.'
  }
];

export const HACKATHONS_DATA: HackathonEntry[] = [
  {
    eventName: 'DEMUX 3.0',
    project: 'SmartBundle AI',
    role: 'Team Member',
    focus: 'AI-powered e-commerce and smart bundling solution providing context-aware cart recommendations.',
    participationNote: 'Built as an end-to-end team project during the intensive hackathon sprint.'
  },
  {
    eventName: 'Smart India Hackathon (SIH 2026)',
    project: 'PyroSentinel-GIS',
    role: 'Team Member',
    focus: 'Industrial fire monitoring prototype designed to track and mitigate facility fire risks.',
    participationNote: 'National technical challenge solving industrial safety problem statements.'
  },
  {
    eventName: 'Prompt Wars',
    project: 'FoodLink',
    role: 'Team Member',
    focus: 'AI-powered food redistribution platform connecting surplus donors, NGOs, and volunteers.',
    achievement: 'Selected through Round 1 and advanced to Round 2 of Prompt Wars with the FoodLink application.'
  },
  {
    eventName: 'WEB2CART / ISTE Full-Stack E-Commerce Challenge',
    project: 'E-Commerce Interface Challenge',
    role: 'Individual Participant',
    focus: 'Participated in the full-stack web and e-commerce engineering challenge as an individual developer.',
    participationNote: 'Hands-on individual technical challenge building and testing frontend state, responsive UX, and catalog interfaces.'
  }
];

export const CERTIFICATIONS_DATA: CertificationEntry[] = [
  {
    title: 'Adobe University Hackathon',
    organization: 'Adobe',
    type: 'Certificate of Participation',
    details: 'Participated in collaborative collegiate engineering challenge.'
  },
  {
    title: 'DEMUX 3.0',
    organization: 'DEMUX Technical Hackathon',
    type: 'Certificate of Participation',
    details: 'Team project: SmartBundle AI — AI-powered e-commerce bundling solution.'
  },
  {
    title: 'Smart India Hackathon (SIH)',
    organization: 'Smart India Hackathon',
    type: 'Certificate of Participation',
    details: 'Team project: PyroSentinel-GIS — Industrial fire monitoring prototype.'
  },
  {
    title: 'Anthropic AI Fluency',
    organization: 'Anthropic',
    type: 'Certificate of Completion',
    details: 'AI Fluency / Frameworks and Foundations course completion.'
  },
  {
    title: 'TEDx BVRIT Hyderabad',
    organization: 'TEDx BVRIT Hyderabad',
    type: 'Certificate of Participation',
    details: 'Participated in institutional TEDx innovation & thought-leadership conference.'
  },
  {
    title: 'Google DeepMind Learning Track',
    organization: 'Google DeepMind',
    type: 'In Progress',
    details:'Currently pursuing the Google DeepMind Learning Track to strengthen foundational and applied AI knowledge.',
  }
];

export const SKILLS_DATA: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
    note: 'Foundations applied in academic coursework and hackathon prototypes'
  },
  {
    category: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript (ES6+)', 'React', 'Next.js', 'Node.js'],
    note: 'Building responsive user interfaces and RESTful web architectures'
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'Artificial Intelligence',
      'Machine Learning',
      'Generative AI Concepts',
      'AI-Powered Applications',
      'Recommendation Systems'
    ],
    note: 'Active specialization area explored via hackathons and coursework'
  },
  {
    category: 'Databases',
    skills: ['SQL', 'MySQL', 'Database Management'],
    note: 'Relational database schema structures and relational queries'
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'VS Code', 'REST APIs'],
    note: 'Collaborative version control and API communication tools'
  }
];

export const NSS_DATA = {
  organization: 'National Service Scheme (NSS)',
  role: 'Member',
  institution: 'BVRIT Hyderabad College of Engineering for Women',
  description:
    'Active volunteer member participating in institutional social welfare initiatives, community outreach programs, and civic engagement activities organized by the college NSS cell.'
};

export const CORE_STRENGTHS = [
  { name: 'Teamwork & Collaboration', desc: 'Demonstrated through multi-person hackathon teams delivering prototypes under tight deadlines.' },
  { name: 'Problem Solving', desc: 'Deconstructing real-world challenges into structured software modules and algorithmic flows.' },
  { name: 'Quick Learning', desc: 'Rapidly assimilating new frameworks, APIs, and AI concepts to build functional implementations.' },
  { name: 'Adaptability', desc: 'Pivoting effectively in fast-moving hackathons when requirements or tech constraints shift.' },
  { name: 'Communication', desc: 'Articulating project concepts clearly to peers, mentors, evaluators, and project judges.' },
  { name: 'Organizational Skills', desc: 'Maintaining clean repository hygiene, structured sprint tasks, and clear project tracking.' },
  { name: 'Creative Thinking', desc: 'Exploring non-obvious combinations like smart cart bundling and surplus food redistribution.' },
  { name: 'Curiosity', desc: 'Continuously asking how modern AI/ML can be applied to solve tangible human problems.' }
];

export const BUILDING_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'LEARN',
    caption: 'Classroom & Foundations',
    detail: 'Internalizing foundational computer science, DSA, DBMS, and core AI/ML principles at BVRIT Hyderabad.'
  },
  {
    step: '02',
    title: 'EXPLORE',
    caption: 'Emerging Frameworks',
    detail: 'Investigating modern web stacks, generative AI concepts, GIS data coordinates, and recommendation models.'
  },
  {
    step: '03',
    title: 'BUILD',
    caption: 'Practical Prototypes',
    detail: 'Transforming theoretical knowledge into real code—implementing functional components and API backends.'
  },
  {
    step: '04',
    title: 'COLLABORATE',
    caption: 'Hackathon Teams',
    detail: 'Partnering with teammates in high-intensity sprints like DEMUX 3.0, SIH 2026, and Prompt Wars.'
  },
  {
    step: '05',
    title: 'ITERATE',
    caption: 'Refining & Growing',
    detail: 'Refining software architecture based on feedback, advancing across rounds, and leveling up engineering skills.'
  }
];
