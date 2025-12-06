import ubb_icon from "../assets/UBB.png";

export interface Experience {
  key: string;
  name: string;
  role: string;
  description: string;
  period: string;
  website: string;
  icon: string;
  isPast: boolean;
}

export const workExperience: Experience[] = [];

export const education: Experience[] = [
  {
    key: "ubb-edu",
    name: "UBB",
    role: "Bachelor's in Computer Science",
    description:
      "Focused on software engineering, algorithms, and distributed systems. Completed multiple personal projects in web development and problem-solving.",
    period: "September 2023 - Present",
    website: "https://www.cs.ubbcluj.ro/",
    icon: ubb_icon,
    isPast: false,
  },
];

export const getOrganizations = (): Record<string, Experience> => {
  const orgs: Record<string, Experience> = {};
  workExperience.forEach((exp) => {
    orgs[exp.key] = exp;
  });
  education.forEach((edu) => {
    orgs[edu.key] = edu;
  });
  return orgs;
};
