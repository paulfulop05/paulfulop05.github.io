import { ExternalLink, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
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
      "rate-limiting",
      "middleware",
      "monitoring",
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
      "elasticsearch",
      "kafka",
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

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
  id?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  repo,
  id,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectId = id || title.toLowerCase().replace(/\s+/g, "-");
  const projectLink = `/projects/${projectId}`;

  return (
    <Link
      to={projectLink}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
          <div className="relative h-48 bg-muted overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            >
              {isHovered ? (
                <motion.img
                  src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
                  alt={`${title} demo`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>

            {/* Gradient overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                animate={{ rotate: isHovered ? 15 : 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Folder className="w-4 h-4 text-primary flex-shrink-0" />
              </motion.div>
              <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
                {title}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : -10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.span>
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className={`text-xs font-semibold px-2 py-1 rounded border ${getTechColor(
                    tag
                  )}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
