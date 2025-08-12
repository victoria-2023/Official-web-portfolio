export type SkillCategories = {
  title?: string;
  groups: Array<{
    label: string;
    items: string[];
  }>;
};

// Assumption: Core stack based on this project and your projects list.
// Feel free to edit to match your exact skills.
export const skills: SkillCategories = {
  title: 'Tech stack & skills',
  groups: [
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Python', 'Java'] },
  { label: 'Data & DB', items: ['SQL', 'MySQL'] },
  { label: 'APIs & Testing', items: ['Postman'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { label: 'Platforms', items: ['Vercel', 'Render', 'Netlify'] },
  ],
};
