import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-foreground hover:text-primary transition-colors flex items-center">
          <span className="text-lg">~/</span>
          <span className="inline-block w-1.5 h-4 bg-foreground ml-1 animate-cursor-blink"></span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/about" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors link-hover"
          >
            About
          </Link>
          <Link 
            to="/projects" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors link-hover"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            className="text-sm text-muted-foreground hover:text-primary transition-colors link-hover"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
