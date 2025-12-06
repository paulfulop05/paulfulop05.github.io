import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
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
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Button asChild variant="outline">
              <a href="/projects">← Back to Projects</a>
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
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Back to Projects */}
            <motion.a
              href="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              whileHover={{ x: 5, transition: { duration: 0.15 } }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <span className="text-sm">← Back to Projects</span>
            </motion.a>

            {/* Project Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <TechBadge
                    key={index}
                    tech={tag.name}
                    type={tag.type}
                    index={index}
                  />
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:border-primary"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Project Demo/Image */}
            <motion.div
              className="mb-12 rounded-lg overflow-hidden border border-border bg-muted flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img
                src={project.previewGif || project.previewImage}
                alt={`${project.title} demo`}
                className="w-full max-h-[500px] object-contain"
              />
            </motion.div>

            {/* Project Content */}
            <motion.div
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="space-y-8">
                {project.overview && (
                  <section>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Overview
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.overview}
                    </p>
                  </section>
                )}

                {project.features && project.features.length > 0 && (
                  <section>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Features
                    </h2>
                    <ul className="space-y-2 text-muted-foreground">
                      {project.features.map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {project.technicalStack && (
                  <section>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Technical Stack
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.technicalStack}
                    </p>
                  </section>
                )}

                {project.implementation && (
                  <section>
                    <h2 className="text-3xl font-bold mb-4 text-foreground">
                      Implementation
                    </h2>
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
