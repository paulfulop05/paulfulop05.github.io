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
    items: [
      "C",
      "C++",
      "C#",
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "HTML",
      "CSS",
    ],
  },
  familiar: {
    description:
      "I have worked with these programming languages before, but I don't have as much experience.",
    items: ["Lua", "AssemblyScript", "PHP"],
  },
};

export const skills: SkillCategory[] = [
  {
    category: "Frameworks",
    description:
      "Software frameworks and libraries that provide structure, reusable components, and tools to build applications efficiently.",
    items: [
      "Qt",
      "WinUI",
      "React",
      "React-Native",
      "Node.js",
      "Next.js",
      "Tailwind CSS",
      "ASP.NET Core",
      "Entity Framework",
      "TensorFlow",
      "JavaFX",
      "JSP with Servlets",
    ],
    icon: Zap,
    color:
      "bg-[hsl(var(--tech-framework-bg))] text-[hsl(var(--tech-framework-text))] border-[hsl(var(--tech-framework-border))]",
  },
  {
    category: "Tools",
    description:
      "Software and utilities that help build, test, and manage applications efficiently.",
    items: [
      "Microsoft SQL Server",
      "MySql",
      "PostgreSQL",
      "GitHub",
      "Postman",
      "Git",
      "Prisma",
    ],
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
      "Design Patterns",
      "Software Engineering Principles",
      "Machine Learning",
      "Operating Systems",
      "RestAPI",
    ],
    icon: Lightbulb,
    color:
      "bg-[hsl(var(--tech-concept-bg))] text-[hsl(var(--tech-concept-text))] border-[hsl(var(--tech-concept-border))]",
  },
];
