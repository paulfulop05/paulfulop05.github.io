export type TechColorVariant = "yellow" | "cyan" | "purple" | "orange" | "pink" | "default";

export const techColorClasses: Record<TechColorVariant, string> = {
  yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  default: "bg-primary/10 text-foreground border-primary/20",
};

const languageKeywords = [
  "javascript", "typescript", "python", "java", "c++", "go", "rust", "golang"
];

const frameworkKeywords = [
  "react", "next.js", "vue.js", "node.js", "express", "django", "flask",
  "nextjs", "vuejs", "nodejs", "apollo", "celery"
];

const conceptKeywords = [
  "rest api", "graphql", "websocket", "microservices", "ci/cd", "agile",
  "api", "rest", "security", "anti-bot", "proof-of-work", "rate-limiting",
  "middleware", "monitoring", "encryption", "distributed", "caching",
  "migrations", "cli"
];

const toolKeywords = [
  "git", "docker", "postgresql", "mongodb", "redis", "aws", "kubernetes",
  "postgres", "mongo", "elasticsearch", "kafka", "rabbitmq", "prometheus",
  "grafana", "database"
];

const stylingKeywords = ["tailwind", "css", "sass", "scss", "figma"];

export const getTechColorVariant = (tech: string): TechColorVariant => {
  const techLower = tech.toLowerCase();
  
  if (languageKeywords.some((lang) => techLower.includes(lang))) {
    return "yellow";
  }
  if (frameworkKeywords.some((fw) => techLower.includes(fw))) {
    return "cyan";
  }
  if (conceptKeywords.some((concept) => techLower.includes(concept))) {
    return "purple";
  }
  if (toolKeywords.some((tool) => techLower.includes(tool))) {
    return "orange";
  }
  if (stylingKeywords.some((style) => techLower.includes(style))) {
    return "pink";
  }
  return "default";
};

export const getTechColorClasses = (tech: string): string => {
  return techColorClasses[getTechColorVariant(tech)];
};
