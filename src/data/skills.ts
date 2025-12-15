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
    { label: 'Languages', items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
    { label: 'Frameworks / Libraries', items: ['React', 'Spring Boot', 'FastAPI', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain'] },
    { label: 'Backend & APIs', items: ['REST', 'GraphQL', 'API Design', 'Postman', 'Supabase'] },
    { label: 'Frontend & UI', items: ['Astro', 'React', 'Tailwind CSS', 'TypeScript', 'Streamlit'] },
    { label: 'Data Engineering', items: ['Airflow', 'Spark', 'ETL Pipelines', 'Feature Engineering'] },
    { label: 'ML & MLOps', items: ['Model Training & Serving', 'Monitoring & Drift Detection', 'Experiment Tracking', 'TensorFlow', 'PyTorch'] },
    { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'NoSQL'] },
    { label: 'DevOps & Cloud', items: ['AWS (SageMaker, Lambda, API Gateway)', 'Docker', 'CI/CD', 'Vercel', 'Netlify', 'Firebase'] },
    { label: 'Observability', items: ['Grafana', 'Prometheus', 'New Relic'] },
    { label: 'AI & Platforms', items: ['OpenAI API', 'AI-driven SaaS'] },
    { label: 'Collaboration', items: ['Git', 'GitHub', 'Jira', 'UML', 'BPMN'] },
    { label: 'Other', items: ['System Design', 'Agile', 'Requirements Gathering', 'Scalability', 'Prototyping'] },
  ],
};
