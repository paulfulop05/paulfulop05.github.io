import ubb_icon from "../assets/UBB.png";
import cnlr_icon from "../assets/CNLR.png";

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
    name: "UBB FMI",
    role: "Bachelor's in Computer Science",
    description:
      "I am currently studying at Babeș-Bolyai University in the Faculty of Mathematics and Computer Science. My coursework covers operating systems (C, Bash, basic architecture and assembly), networks, databases, web programming, and software engineering. I have strengthened my object-oriented programming skills with C++, Java, and Python, and have deepened my knowledge of data structures, algorithms, system design, and machine learning.",
    period: "October 2024 - July 2027",
    website: "https://www.cs.ubbcluj.ro/",
    icon: ubb_icon,
    isPast: false,
  },

  {
    key: "cnlr_edu",
    name: "CNLR",
    role: "Computer-Science and Mathematics Student",
    description:
      "I studied at Colegiul Național Liviu Rebreanu in Romania, where I focused on computer science and mathematics for four years. I built a solid base in C++, C#, the .NET framework, and SQL, and I learned key algorithm and problem-solving concepts such as dynamic programming and object-oriented programming.",
    website: "https://www.cnlr.ro/",
    period: "September 2020 - June 2024",
    icon: cnlr_icon,
    isPast: true,
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
