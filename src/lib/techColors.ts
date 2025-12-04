export type TechType = "language" | "framework" | "tool" | "concept";

// Color classes matching the About page section colors
export const techTypeColors: Record<TechType, string> = {
  language:
    "bg-[hsl(var(--tech-language-bg))] text-[hsl(var(--tech-language-text))] border-[hsl(var(--tech-language-border))]",
  framework:
    "bg-[hsl(var(--tech-framework-bg))] text-[hsl(var(--tech-framework-text))] border-[hsl(var(--tech-framework-border))]",
  tool: "bg-[hsl(var(--tech-tool-bg))] text-[hsl(var(--tech-tool-text))] border-[hsl(var(--tech-tool-border))]",
  concept:
    "bg-[hsl(var(--tech-concept-bg))] text-[hsl(var(--tech-concept-text))] border-[hsl(var(--tech-concept-border))]",
};

export const getTechColorClasses = (type: TechType = "concept"): string => {
  return techTypeColors[type];
};
