import { ExternalLink, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  repo?: string;
  id?: string;
}

const ProjectCard = ({ title, description, tags, link, repo, id }: ProjectCardProps) => {
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
      <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 bg-muted overflow-hidden">
          {isHovered ? (
            <img 
              src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"
              alt={`${title} demo`}
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop" 
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Folder className="w-4 h-4 text-primary flex-shrink-0" />
            <h3 className="text-xl font-bold flex items-center gap-2 group-hover:text-primary transition-colors">
              {title}
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;
