import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey! I'm{" "}
            <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            I'm a developer who loves building things that live on the internet. 
            I specialize in creating{" "}
            <span className="text-primary font-semibold">beautiful</span>,{" "}
            <span className="text-primary font-semibold">functional</span>, and{" "}
            <span className="text-primary font-semibold">user-friendly</span> web experiences.
          </p>
          
          <p className="text-md text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Currently building innovative solutions and exploring new technologies. 
            I believe in writing clean code and creating products that make a difference.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-16 flex items-center gap-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">C1</span>
            </div>
            <span className="text-sm text-muted-foreground">Company One</span>
          </div>
          <span className="text-muted-foreground">/</span>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold text-sm">C2</span>
            </div>
            <span className="text-sm text-muted-foreground">Company Two <span className="text-xs">(Past)</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
