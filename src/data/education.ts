import { publicAssetPath } from './assetPaths';

export const education = {
  university: 'New Jersey Institute of Technology',
  degree: 'Bachelor of Science in Computer Science',
  college: 'Ying Wu College of Computing',
  location: 'Newark, NJ',
  dates: 'September 2021 - May 2026',
  logos: [
    {
      src: publicAssetPath('/images/logos/njit-logo.png'),
      alt: 'New Jersey Institute of Technology logo',
    },
    {
      src: publicAssetPath('/images/logos/njit-ywcc-logo.png'),
      alt: 'Ying Wu College of Computing logo',
    },
  ],
  coursework: [
    'Advanced Data Structures and Algorithm Design',
    'Design in Software Engineering',
    'Database System Design and Management',
    'Advanced Database Systems',
    'Introduction to Data Science',
    'Intensive Programming in Linux',
  ],
};

