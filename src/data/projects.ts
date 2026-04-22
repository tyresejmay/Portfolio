export type Project = {
  name: string;
  timeframe: string;
  stack: string[];
  description: string;
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    name: 'Full-Stack Web App with YouTube API Integration',
    timeframe: 'May 2025 - August 2025',
    stack: ['PHP', 'MySQL', 'JSON', 'YouTube Autocomplete API'],
    description:
      'A modular full-stack web application with role-based access control, dynamic search, external API integration, and backend analytics.',
    highlights: [
      'Built dynamic search powered by the YouTube Autocomplete API.',
      'Integrated external APIs with cURL and JSON parsing for real-time data retrieval.',
      'Implemented SQL-based logging and analytics to track user behavior and improve the user experience.',
    ],
  },
  // Add future projects here with GitHub and demo links when they are ready.
];

