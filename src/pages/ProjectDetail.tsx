import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronLeft2, Github, Label } from "pixelarticons/react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import TechBadge from "@/components/TechBadge";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild variant="outline">
              <a href="/projects">
                <ChevronLeft2 className="w-5 h-5" />
                Back to Projects
              </a>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Project Demo/Image */}
            <motion.div
              className="mb-10 rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
            >
              <img
                src={project.previewGif || project.previewImage}
                alt={`${project.title} demo`}
                className="w-full max-h-[640px] object-contain"
              />
            </motion.div>

            {/* Project Metadata */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-5 mb-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {project.date || "Date not specified"}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open GitHub repository"
                  aria-label="Open GitHub repository"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Label className="w-6 h-6 mt-1 shrink-0 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <TechBadge
                      key={index}
                      tech={tag.name}
                      type={tag.type}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="border-t border-border mb-8" />

            {/* Project Content */}
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <div className="space-y-10">
                {project.overview && (
                  <section>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>
                  </section>
                )}

                {project.features && project.features.length > 0 && (
                  <section>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      Features
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {project.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.technicalStack && (
                  <section>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      Technical Stack
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.technicalStack}
                    </p>
                  </section>
                )}

                {project.implementation && (
                  <section>
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      Implementation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.implementation}
                    </p>
                  </section>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
