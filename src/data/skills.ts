import { Code2, Zap, Wrench, Lightbulb } from "lucide-react";

export interface LanguageSkills {
  proficient: {
    description: string;
    items: string[];
  };
  familiar: {
    description: string;
    items: string[];
  };
}

export interface SkillCategory {
  category: string;
  description: string;
  items: string[];
  icon: typeof Code2;
  color: string;
}

export const languageSkills: LanguageSkills = {
  proficient: {
    description:
      "I have used these programming languages in various projects throughout my journey.",
    items: ["C", "C++", "C#", "Python", "Java"],
  },
  familiar: {
    description:
      "I have worked with these programming languages at least once in my life, but I don't have as much experience.",
    items: ["Lua", "JavaScript", "TypeScript", "AssemblyScript"],
  },
};

export const skills: SkillCategory[] = [
  {
    category: "Frameworks",
    description:
      "Software frameworks and libraries that provide structure, reusable components, and tools to build applications efficiently.",
    items: ["Qt", "React", "React-Native", "Tailwind CSS", ".NET"],
    icon: Zap,
    color:
      "bg-[hsl(var(--tech-framework-bg))] text-[hsl(var(--tech-framework-text))] border-[hsl(var(--tech-framework-border))]",
  },
  {
    category: "Tools",
    description:
      "Software and utilities that help build, test, and manage applications efficiently.",
    items: ["SQL Server", "GitHub", "Git", "Vite"],
    icon: Wrench,
    color:
      "bg-[hsl(var(--tech-tool-bg))] text-[hsl(var(--tech-tool-text))] border-[hsl(var(--tech-tool-border))]",
  },
  {
    category: "Concepts",
    description:
      "Core principles and techniques that guide writing efficient, organized, and maintainable code.",
    items: [
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Software Engineering Principles",
    ],
    icon: Lightbulb,
    color:
      "bg-[hsl(var(--tech-concept-bg))] text-[hsl(var(--tech-concept-text))] border-[hsl(var(--tech-concept-border))]",
  },
];
