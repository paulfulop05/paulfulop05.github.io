import { Github, Linkedin, Mail, Database, Palette, Zap } from "lucide-react";

export interface SocialLink {
  href: string;
  icon: typeof Github;
  label: string;
}

export interface WhatIDoCard {
  title: string;
  description: string;
  icon: typeof Palette;
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

export const whatIDoCards: WhatIDoCard[] = [
  {
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces that users love to interact with.",
    icon: Palette,
  },
  {
    title: "Database Design",
    description:
      "Architecting scalable database solutions for high-performance applications.",
    icon: Database,
  },
  {
    title: "Performance",
    description:
      "Optimizing applications for speed, efficiency, and better user experience.",
    icon: Zap,
  },
];
