import { EducationSvg, LessonSvg, DevJobSvg } from "../../../svgs";

export type experienceDataType = {
  icon: React.ReactNode;
  jobTitle: string;
  subTitle: string;
  date: string;
  text: string;
  id: number;
};

export const experienceData = [
  {
    icon: <EducationSvg />,
    jobTitle: "University of Piraeus",
    subTitle: "Athens, Greece",
    date: "2015 - 2023",
    text: "Department of informatics",
    id: 1,
  },
  {
    icon: <LessonSvg />,
    jobTitle: "Private Lessons",
    subTitle: "With a professional Front-end developer.",
    date: "05/2023 - 12/2023",
    text: "Html, CSS, javascript, React",
    id: 2,
  },
  {
    icon: <DevJobSvg />,
    jobTitle: "SoftOne - Impact",
    subTitle: "FrontEnd Developer",
    date: "03/2023 - Present",
    text: "Html, CSS, Bootstrap, Tailwind, NextJs, ASP.NET Razor",
    id: 2,
  },
];
