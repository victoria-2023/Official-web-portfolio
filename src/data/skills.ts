export type SkillCategories = {
  title?: string;
  groups: Array<{
    label: string;
    items: string[];
  }>;
};

export const skills: SkillCategories = {
  title: 'Tech stack & skills',
  groups: [
    { label: 'Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Node.js'] },
    { label: 'Frameworks / Libraries', items: ['Spring Boot', 'React', 'FastAPI', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangGraph'] },
    { label: 'Backend & APIs', items: ['REST APIs', 'GraphQL APIs', 'API Design', 'Postman', 'Supabase'] },
    { label: 'Frontend & UI', items: ['React', 'TypeScript', 'JavaScript', 'Astro', 'Tailwind CSS', 'Streamlit'] },
    { label: 'Databases & Data', items: ['SQL (MySQL, PostgreSQL)', 'NoSQL', 'Database Management', 'Feature Engineering', 'Time-series Forecasting (LSTM, ARIMA, Prophet)'] },
    { label: 'DevOps, Cloud & Deployment', items: ['AWS (SageMaker, Lambda, API Gateway)', 'Docker', 'Firebase', 'Vercel', 'Netlify', 'CI/CD Pipelines'] },
    { label: 'Monitoring & Observability', items: ['Grafana', 'Prometheus', 'New Relic'] },
    { label: 'Payments & Fintech', items: ['SEPA', 'ISO20022', 'SWIFT', 'Stripe', 'PayPal', 'Fraud Detection'] },
    { label: 'AI, ML & Data Science', items: ['Machine Learning', 'Deep Learning (TensorFlow, PyTorch)', 'Predictive Analytics', 'Reinforcement Learning', 'Anomaly Detection', 'AI-driven SaaS', 'OpenAI API'] },
    { label: 'Tools & Collaboration', items: ['Git', 'GitHub', 'Jira', 'UML', 'BPMN'] },
    { label: 'Other Key Skills', items: ['IT Analysis', 'System Design', 'Research', 'Agile Development', 'Requirements Gathering', 'Scalability', 'Prototyping'] },
  ],
};
