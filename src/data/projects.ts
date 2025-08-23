export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: 'Official Web Portfolio',
    blurb: 'Personal portfolio site built with Astro, Tailwind CSS, and TypeScript. Features projects, skills, contact form, and more.',
    stack: ['Astro', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    href: 'https://github.com/victoria-2023/Official-web-portfolio',
  },
  {
    name: 'Betting Game',
    blurb: 'Interactive betting game with dynamic odds and user scoring.',
  stack: ['React', 'Node', 'Java'],
    href: 'https://betting-game-lva6.onrender.com/',
  },
  {
    name: 'Weather Dashboard',
    blurb: 'Responsive weather dashboard with real-time conditions and forecasts.',
  stack: ['React', 'JavaScript', 'API'],
    href: 'https://weather-dashboard-official.netlify.app/',
  },
  {
  name: 'Link Preview Generator',
  blurb: 'Paste a URL to generate a rich preview card from Open Graph/Twitter metadata.',
  stack: ['HTML', 'CSS', 'JS', 'Open Graph'],
    href: 'https://luminous-fenglisu-c8e58b.netlify.app/',
  },
  {
    name: 'Smart Home Energy Forecasting',
    blurb: 'Machine learning project for predicting energy usage in smart homes.',
    stack: ['Python', 'Machine Learning', 'Data Science'],
    href: 'https://github.com/victoria-2023/smart-home-energy-forecasting',
  },
];
