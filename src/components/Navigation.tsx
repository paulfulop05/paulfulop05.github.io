import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const getPathSegments = () => {
    const path = location.pathname;
    if (path === "/") return [{ text: "~/", link: "/" }];
    
    if (path.startsWith("/projects/")) {
      const projectName = path.split("/")[2];
      return [
        { text: "~/", link: "/" },
        { text: "projects/", link: "/projects" },
        { text: projectName, link: path }
      ];
    }
    
    if (path === "/projects") return [{ text: "~/", link: "/" }, { text: "projects/", link: "/projects" }];
    if (path === "/about") return [{ text: "~/", link: "/" }, { text: "about/", link: "/about" }];
    if (path === "/contact") return [{ text: "~/", link: "/" }, { text: "contact/", link: "/contact" }];
    
    return [{ text: "~/", link: "/" }];
  };

  const segments = getPathSegments();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center text-lg">
          {segments.map((segment, index) => (
            <Link 
              key={index}
              to={segment.link} 
              className="text-foreground hover:text-primary transition-colors"
            >
              {segment.text}
            </Link>
          ))}
          <span className="inline-block w-2 h-4 bg-primary ml-1.5 animate-cursor-blink"></span>
        </div>
        
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
