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
        <div className="bg-[#1e1e1e] p-4 border-b border-border/50">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-xs">
              <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
              <span>{stars}</span>
            </div>
          </div>
          <div className="text-sm flex items-center gap-2">
            <Folder className="w-4 h-4 text-primary" />
            {repo && (
              <>
                <span className="text-muted-foreground">{repo}</span>
                <span className="text-muted-foreground"> / </span>
              </>
            )}
            <span className="text-foreground font-semibold">{title.toLowerCase().replace(/\s+/g, '-')}</span>
          </div>
          <div className="mt-2 text-xs text-muted-foreground line-clamp-2">
            {description}
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
            {title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
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
