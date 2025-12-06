import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { getGithubLink } from "@/data/profile";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              Here is some of my technical work. I use these projects to explore
              different challenges and demonstrate my approach to software
              development.
            </p>
            <div className="inline-flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">More on</span>
              <a
                href={getGithubLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 group"
              >
                <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  GitHub
                </span>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="opacity-0 animate-fade-in h-full"
                style={{
                  animationDelay: `${0.05 * index}s`,
                  animationFillMode: "forwards",
                }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
