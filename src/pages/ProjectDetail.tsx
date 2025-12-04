import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const getTechColor = (tech: string) => {
  const techLower = tech.toLowerCase();
  // Languages
  if (
    [
      "javascript",
      "typescript",
      "python",
      "java",
      "c++",
      "go",
      "rust",
      "golang",
    ].some((lang) => techLower.includes(lang))
  ) {
    return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  }
  // Frameworks
  if (
    [
      "react",
      "next.js",
      "vue.js",
      "node.js",
      "express",
      "django",
      "flask",
      "nextjs",
      "vuejs",
      "nodejs",
    ].some((fw) => techLower.includes(fw))
  ) {
    return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
  }
  // Concepts
  if (
    [
      "rest api",
      "graphql",
      "websocket",
      "microservices",
      "ci/cd",
      "agile",
      "api",
      "rest",
      "security",
      "anti-bot",
      "proof-of-work",
    ].some((concept) => techLower.includes(concept))
  ) {
    return "bg-purple-500/20 text-purple-400 border-purple-500/30";
  }
  // Tools & Databases
  if (
    [
      "git",
      "docker",
      "postgresql",
      "mongodb",
      "redis",
      "aws",
      "kubernetes",
      "postgres",
      "mongo",
    ].some((tool) => techLower.includes(tool))
  ) {
    return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  }
  // Styling & Design
  if (
    ["tailwind", "css", "sass", "scss", "figma"].some((style) =>
      techLower.includes(style)
    )
  ) {
    return "bg-pink-500/20 text-pink-400 border-pink-500/30";
  }
  return "bg-primary/10 text-foreground border-primary/20";
};

const ProjectDetail = () => {
  const { id } = useParams();

  // Sample project data - in real app this would come from a data source
  const project = {
    title:
      id
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "Project",
    description:
      "A comprehensive description of the project. This is a placeholder that would normally contain detailed information about the project's goals, features, and technical implementation.",
    tags: ["react", "typescript", "tailwind"],
    fullDescription: `
      ## Overview
      This project demonstrates advanced web development techniques and best practices.
      
      ## Features
      - Feature 1: Modern and responsive design
      - Feature 2: High performance optimization
      - Feature 3: Scalable architecture
      - Feature 4: Comprehensive testing
      
      ## Technical Stack
      Built with cutting-edge technologies to ensure reliability and maintainability.
      
      ## Implementation Details
      The project follows industry best practices and coding standards.
    `,
  };

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
                  <span
                    key={index}
                    className={`text-xs font-semibold px-2 py-1 rounded border ${getTechColor(
                      tag
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:border-primary"
                >
                  <a
                    href="https://github.com"
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
              className="mb-12 rounded-lg overflow-hidden border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <img
                src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
                alt={`${project.title} demo`}
                className="w-full"
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
                <section>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    This project demonstrates advanced web development
                    techniques and best practices. It showcases modern design
                    patterns, performance optimization, and scalable
                    architecture.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Features
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Modern and responsive design that works across all
                      devices
                    </li>
                    <li>• High performance optimization for fast load times</li>
                    <li>• Scalable architecture that grows with your needs</li>
                    <li>• Comprehensive testing for reliability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Technical Stack
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with cutting-edge technologies including React,
                    TypeScript, and Tailwind CSS to ensure reliability,
                    maintainability, and developer experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Implementation
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The project follows industry best practices and coding
                    standards. Every component is carefully crafted with
                    attention to detail and user experience.
                  </p>
                </section>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
