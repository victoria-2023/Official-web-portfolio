export type ExperienceItem = {
  company: string;
  role: string;
  start: string; // e.g., 2022-01
  end: string | 'Present';
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'GreenPowerPlus',
    role: 'AI Engineer',
    start: '2025-05',
    end: 'Present',
    bullets: [
      'Built AI-powered TenderScan features including an automated RFP Writer using GPT/Claude models.',
      'Designed tender classification and filtering algorithms for the clean energy sector to improve match accuracy.',
      'Delivered rapid prototypes with Databutton reducing turnaround time from weeks to days.',
    ],
  },
  {
    company: 'Graafik (Epskar OU)',
    role: 'Software Engineer',
    start: '2025-05',
    end: 'Present',
    bullets: [
      'Developed backend and frontend features for an automated scheduling and workforce management platform.',
      'Integrated APIs, authentication, and automated testing, reducing release cycles by ~60%.',
      'Optimized system performance and scalability for real-time multi-user access.',
    ],
  },
  {
    company: 'Cariad (Volkswagen Group)',
    role: 'Operations Engineer',
    start: '2025-01',
    end: '2025-05',
    bullets: [
      'Resolved technical incidents and enhanced deployment pipelines to improve uptime.',
      'Automated troubleshooting processes to reduce manual work by ~25%.',
      'Streamlined monitoring/reporting workflows with backend teams (Grafana, Prometheus, New Relic).',
    ],
  },
  {
    company: 'DriveX Technologies',
    role: 'Machine Learning / Data Ops Engineer',
    start: '2022-01',
    end: '2024-12',
    bullets: [
      'Built and optimized ML models and integrated them into production systems for real-time use.',
      'Designed API connections between ML outputs and client-facing applications.',
      'Preprocessed and trained large datasets to improve accuracy and reliability.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Developer',
    start: '2019-01',
    end: 'Present',
    bullets: [
      'Delivered full-stack apps (e-commerce, dashboards, AI-powered tools) for SMEs.',
      'Designed secure, scalable systems with API integrations and cloud deployment.',
      'Automated workflows improving client efficiency and reducing manual tasks by up to 40%.',
    ],
  },
];
