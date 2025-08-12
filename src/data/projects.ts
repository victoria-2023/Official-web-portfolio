export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
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
];
