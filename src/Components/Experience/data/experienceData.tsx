import { Sun } from '../../../svgs';

export type experienceDataType = {
  icon: React.ReactNode;
  jobTitle: string;
  address: string;
  date: string;
  text: string;
  id: number;
};

export const experienceData = [
  {
    icon: <Sun />,
    jobTitle: 'JavaScript / TypeScript',
    address: 'Greece',
    date: '2015-Present',
    text: 'Frontend-Dev',
    id: 1,
  },
  {
    icon: <Sun />,
    jobTitle: 'JavaScript / TypeScript',
    address: 'Greece',
    date: '2015-Present',
    text: 'Frontend-Dev',
    id: 2,
  },
];
