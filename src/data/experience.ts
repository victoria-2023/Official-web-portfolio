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
    company: 'DriveX Technologies, Tallinn',
    role: 'Machine Learning Engineer',
    start: '2023-08',
    end: '2024-09',
    bullets: [
      'Developed end-to-end ML and ETL pipelines using Python, Spark, and Airflow, transitioning prototypes into production-ready code.',
      'Built monitoring systems to track model drift and performance across deployed models.',
      'Collaborated with cross-functional teams to integrate ML outputs into operational workflows, delivering business-focused insights.',
    ],
  },
  {
    company: 'Graafik (Epskar OU)',
    role: 'Software Engineer',
    start: '2025-05',
    end: '2025-11-03',
    bullets: [
      'Developed backend and frontend features for an automated scheduling and workforce management platform.',
      'Integrated APIs, authentication, and automated testing, reducing release cycles by ~60%.',
      'Optimized system performance and scalability for real-time multi-user access.',
    ],
  },
];
