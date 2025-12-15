export type Project = {
  name: string;
  blurb: string;
  stack: string[];
  href?: string;
};

export const softwareDevProjects: Project[] = [
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
    name: 'Taskly',
    blurb: 'Modern student productivity app for tasks, study scheduling, and metrics.',
    stack: ['React', 'Node.js', 'MongoDB'],
    href: 'https://github.com/victoria-2023/Taskly--final-version-',
  },
];

export const mlProjects: Project[] = [
  {
    name: 'Smart Home Energy Forecasting',
    blurb: 'Machine learning project for predicting energy usage in smart homes.',
    stack: ['Python', 'Machine Learning', 'Data Science'],
    href: 'https://github.com/victoria-2023/smart-home-energy-forecasting',
  },
  {
    name: 'Movie Recommendation System',
    blurb: 'A machine learning system recommending movies based on user preferences.',
    stack: ['Python', 'Scikit-learn', 'Flask'],
    href: 'https://github.com/victoria-2023/movie-recommendation-system',
  },
  {
    name: 'AB Testing Conversion Analysis',
    blurb: 'Statistical analysis of A/B testing results to improve conversion rates.',
    stack: ['Python', 'Pandas', 'Matplotlib'],
    href: 'https://github.com/victoria-2023/ab-testing-conversion-analysis',
  },
  {
    name: 'Customer Churn Prediction',
    blurb: 'Predicting customer churn using machine learning techniques.',
    stack: ['Python', 'TensorFlow', 'Data Analysis'],
    href: 'https://github.com/victoria-2023/customer_churn_prediction',
  },
];
