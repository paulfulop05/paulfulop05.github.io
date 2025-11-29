import ProjectCard from "./ProjectCard";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Anubis",
      description: "Weighs the soul of incoming HTTP requests using proof-of-work to stop AI crawlers and other malicious bots. Built with Golang and advanced security algorithms.",
      tags: ["golang", "security", "anti-bot", "proof-of-work"],
      stars: 1473,
      link: "https://github.com",
      repo: "TechnoROG"
    },
    {
      title: "Abacus",
      description: "A highly-scalable and stateless counting API. Simple at its core, designed from the ground up to be scalable, secure and easy to use. Built using Golang, Gin, Docker, and Redis.",
      tags: ["golang", "api", "redis", "docker"],
      stars: 234,
      link: "https://github.com",
      repo: "yourusername"
    },
    {
      title: "RealTime Chat",
      description: "Production-ready WebSocket chat application with rooms, typing indicators, and message persistence. Features end-to-end encryption and rich media support.",
      tags: ["react", "websocket", "node.js", "mongodb"],
      stars: 892,
      link: "https://github.com",
      repo: "yourusername"
    },
    {
      title: "API Shield",
      description: "Rate limiting and DDoS protection middleware for APIs with intelligent threat detection, automatic blocking, and detailed analytics dashboard.",
      tags: ["golang", "security", "rate-limiting", "middleware"],
      stars: 445,
      link: "https://github.com",
      repo: "yourusername"
    },
    {
      title: "LogStream",
      description: "Real-time log aggregation and analysis platform with powerful search, custom dashboards, and alerting. Handles millions of events per second.",
      tags: ["go", "elasticsearch", "kafka", "monitoring"],
      stars: 1234,
      link: "https://github.com",
      repo: "yourusername"
    },
    {
      title: "Container Registry",
      description: "Self-hosted Docker registry with garbage collection, image scanning, and webhook notifications. Enterprise-ready with RBAC and audit logs.",
      tags: ["go", "docker", "security", "kubernetes"],
      stars: 891,
      link: "https://github.com",
      repo: "yourusername"
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
