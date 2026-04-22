export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'C/C++', 'SQL/PostgreSQL', 'JavaScript', 'HTML/CSS', 'PHP', 'Bash'],
  },
  {
    label: 'Data & Analytics',
    skills: ['Power BI', 'Pandas', 'NumPy', 'Matplotlib', 'Dash', 'Scikit-learn', 'Data Visualization'],
  },
  {
    label: 'Developer Tools',
    skills: ['Microsoft Azure', 'Git/GitHub', 'Google Colab', 'VS Code', 'Microsoft Excel'],
  },
  {
    label: 'Professional Strengths',
    skills: ['Dashboarding', 'Reporting', 'Stakeholder Communication', 'Technical Troubleshooting', 'Tutoring'],
  },
  // Add new skill groups here as your toolkit grows.
];

