import { ExternalLink, Folder, Label } from "pixelarticons/react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import { ProjectTag } from "@/data/projects";

interface ProjectCardProps {
  title: string;
  date?: string;
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
  date,
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
        <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
          <div className="relative h-72 md:h-80 bg-muted overflow-hidden flex items-center justify-center">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={false}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            >
              {isHovered ? (
                <motion.img
                  src={previewGif || DEFAULT_PREVIEW_GIF}
                  alt={`${title} demo`}
                  className="w-full h-full object-fill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <img
                  src={previewImage || DEFAULT_PREVIEW_IMAGE}
                  alt={title}
                  className="w-full h-full object-fill"
                />
              )}
            </motion.div>
          </div>

          <CardContent className="p-4 flex flex-col h-full">
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="flex items-center gap-2 min-w-0">
                <motion.div
                  animate={{ rotate: isHovered ? 15 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Folder className="w-4 h-4 text-primary flex-shrink-0" />
                </motion.div>
                <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors min-w-0">
                  <span className="truncate">{title}</span>
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </motion.span>
                </h3>
              </div>
              {date && (
                <span className="shrink-0 text-xs text-muted-foreground text-right">
                  {date}
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3 min-h-20 line-clamp-4 leading-5">
              {description}
            </p>
            <div className="flex items-start gap-2 mt-auto">
              <Label className="w-5 h-5 mt-0.5 shrink-0 text-muted-foreground" />
              <div className="flex flex-wrap gap-1.5">
                {tags.slice(0, 4).map((tag, index) => (
                  <TechBadge
                    key={index}
                    tech={tag.name}
                    type={tag.type}
                    index={index}
                  />
                ))}
                {tags.length > 4 && (
                  <span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                    +{tags.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
