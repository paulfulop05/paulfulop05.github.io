import { ExternalLink, Star, Folder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  stars: number;
  link: string;
  repo?: string;
}

const ProjectCard = ({ title, description, tags, stars, link, repo }: ProjectCardProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 bg-muted overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop" 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <span>{stars}</span>
          </div>
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
    </a>
  );
};

export default ProjectCard;
