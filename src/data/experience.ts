export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'NJIT - Educational Opportunity Program',
    role: 'Program Data Analyst / Office Assistant / Math Tutor',
    location: 'Newark, NJ',
    dates: 'November 2021 - Present',
    summary:
      'Supports student success through data management, academic support, advising workflows, attendance tracking, equipment records, tutoring, and operational reporting.',
    highlights: [
      'Oversees intake and academic support for 150+ students while streamlining advising workflows and tutoring calculus.',
      'Manages scheduling systems, attendance tracking, and equipment loan databases to improve operational accountability.',
      'Maintains inventory spreadsheets and monthly reports that support resource planning for program leadership.',
    ],
  },
  {
    company: 'TEKsystems',
    role: 'Technical Bar Examination Proctor',
    location: 'New York City, NY',
    dates: 'December 2025 - January 2026',
    summary:
      'Supported secure, large-scale testing operations while resolving software, device access, and connectivity issues across Mac and PC systems.',
    highlights: [
      'Administered multi-day bar exam sessions for 100+ candidates with controlled check-in, seating, and security procedures.',
      'Resolved software crashes, login failures, screen freezes, and Wi-Fi issues quickly to minimize exam disruption.',
      'Documented 10+ technical incidents and device deployments for technical leads and administrators.',
    ],
  },
  {
    company: 'Deloitte Touche Tohmatsu Limited',
    role: 'Data Analyst Intern / Performance Engineer Intern',
    location: 'Dallas, TX',
    dates: 'June 2023 - August 2024',
    summary:
      'Worked on analytics and performance engineering projects that improved system visibility, issue response, and stakeholder reporting.',
    highlights: [
      'Designed Azure-based performance dashboards from application logs and system metrics, contributing to a 20% reduction in incident response time.',
      'Partnered with global digital applications and innovation teams on cloud architecture and proof-of-concept solutions.',
      'Placed 2nd and 3rd in Deloitte AI and Innovation Challenges with productivity and collaboration prototypes.',
    ],
  },
  {
    company: 'The Coder School',
    role: 'Software Programming Instructor & Coach',
    location: 'New Jersey',
    dates: 'February 2025 - August 2025',
    summary:
      'Taught programming concepts through hands-on Python and Scratch instruction, project coaching, debugging support, and student progress feedback.',
    highlights: [
      'Led project-based lessons for students learning programming fundamentals.',
      'Coached students individually to strengthen debugging, logic, and problem-solving skills.',
      'Communicated progress through structured feedback and performance reporting.',
    ],
  },
];

