export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'design' | 'tools' | 'language';
}

export const skills: Skill[] = [
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 85, category: 'language' },
  { name: 'Node.js', icon: 'nodejs', level: 80, category: 'backend' },
  { name: 'Tailwind CSS', icon: 'tailwind', level: 90, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', level: 85, category: 'frontend' },
  { name: 'MongoDB', icon: 'mongodb', level: 75, category: 'backend' },
  { name: 'PostgreSQL', icon: 'postgresql', level: 70, category: 'backend' },
  { name: 'GraphQL', icon: 'graphql', level: 75, category: 'backend' },
  { name: 'Figma', icon: 'figma', level: 80, category: 'design' },
  { name: 'Docker', icon: 'docker', level: 65, category: 'tools' }
];