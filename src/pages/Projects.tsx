import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

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
            <p className="text-lg text-muted-foreground max-w-3xl">
              A collection of projects I've built over the years. From full-stack applications 
              to open-source libraries, each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: `${0.05 * index}s`,
                  animationFillMode: "forwards"
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
