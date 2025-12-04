import { ExternalLink, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import { ProjectTag } from "@/data/projects";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTag[];
  link: string;
  repo?: string;
  id?: string;
  previewImage?: string;
  previewGif?: string;
}

const DEFAULT_PREVIEW_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop";
const DEFAULT_PREVIEW_GIF =
  "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif";

const ProjectCard = ({
  title,
  description,
  tags,
  id,
  previewImage,
  previewGif,
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
      onClick={() => window.scrollTo(0, 0)}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
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
                  src={previewGif || DEFAULT_PREVIEW_GIF}
                  alt={`${title} demo`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <img
                  src={previewImage || DEFAULT_PREVIEW_IMAGE}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>

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
                <TechBadge
                  key={index}
                  tech={tag.name}
                  type={tag.type}
                  index={index}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
