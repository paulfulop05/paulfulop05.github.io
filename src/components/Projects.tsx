import ProjectCard from "./ProjectCard";
import { ArrowRight, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Anubis",
      description:
        "Weighs the soul of incoming HTTP requests using proof-of-work to stop AI crawlers and other malicious bots. Built with Golang and advanced security algorithms.",
      tags: ["golang", "security", "anti-bot", "proof-of-work"],
      stars: 1473,
      link: "https://github.com",
      repo: "TechnoROG",
    },
    {
      title: "Abacus",
      description:
        "A highly-scalable and stateless counting API. Simple at its core, designed from the ground up to be scalable, secure and easy to use. Built using Golang, Gin, Docker, and Redis.",
      tags: ["golang", "api", "redis", "docker"],
      stars: 234,
      link: "https://github.com",
      repo: "yourusername",
    },
  ];

  return (
    <section className="pt-0 pb-4 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Star className="w-8 h-8 text-primary" />
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
                animationFillMode: "forwards",
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
