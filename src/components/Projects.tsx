import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A full-stack application that helps teams collaborate in real-time with advanced features and integrations.",
      tags: ["react", "typescript", "node.js", "postgres"],
      stars: 147,
      link: "https://github.com"
    },
    {
      title: "Project Beta",
      description: "An open-source tool for developers to streamline their workflow and boost productivity.",
      tags: ["python", "api", "automation", "devtools"],
      stars: 89,
      link: "https://github.com"
    },
    {
      title: "Project Gamma",
      description: "A lightweight library that simplifies complex tasks with an intuitive API and excellent documentation.",
      tags: ["javascript", "library", "open-source"],
      stars: 234,
      link: "https://github.com"
    },
    {
      title: "Project Delta",
      description: "A modern CLI tool designed for efficiency, featuring smart defaults and powerful customization options.",
      tags: ["go", "cli", "tool", "performance"],
      stars: 56,
      link: "https://github.com"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-primary">⭐</span>
            Featured Projects
          </h2>
          <a 
            href="/projects" 
            className="flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-semibold"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ 
                animationDelay: `${0.1 * index}s`,
                animationFillMode: "forwards"
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
