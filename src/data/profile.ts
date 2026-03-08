import { Github, Linkedin, Mail, Code, Brain, Rocket } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: typeof Github;
  label: string;
}

export interface WhatIDoCard {
  title: string;
  description: string;
  icon: typeof Code;
}

export const socialLinks: SocialLink[] = [
  { href: "https://github.com/paulfulop05", icon: Github, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/paul-f%C3%BCl%C3%B6p/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  { href: "mailto:paulfulop52@gmail.com", icon: Mail, label: "Email" },
];

// Helper functions to get specific links
export const getEmailLink = () =>
  socialLinks.find((link) => link.label === "Email")?.href || "";
export const getEmailAddress = () => getEmailLink().replace("mailto:", "");
export const getGithubLink = () =>
  socialLinks.find((link) => link.label === "GitHub")?.href || "";
export const getGithubUsername = () => getGithubLink().split("/").pop() || "";
export const getLinkedinLink = () =>
  socialLinks.find((link) => link.label === "LinkedIn")?.href || "";
export const getLinkedinUsername = () => {
  const link = getLinkedinLink();
  const match = link.match(/\/in\/([^/]+)/);
  return match ? decodeURIComponent(match[1]) : "";
};

// unused for now, i'll see what i do with this in the future maybe
export const whatIDoCards: WhatIDoCard[] = [
  {
    title: "Building My Skillset",
    description:
      "Developing beginner/intermediate-level projects and games while steadily improving my full-stack abilities.",
    icon: Code,
  },
  {
    title: "Problem Solving",
    description:
      "Tackling algorithmic challenges and developing efficient solutions through logical thinking.",
    icon: Brain,
  },
  {
    title: "Learning & Building",
    description:
      "Constantly exploring new technologies and applying them through personal projects.",
    icon: Rocket,
  },
];
