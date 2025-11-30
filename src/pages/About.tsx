import Navigation from "@/components/Navigation";
import { Code2, Database, Palette, Zap, Lightbulb, Wrench, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Webpack"] },
  ];

  const experience = [
    {
      company: "Tech Company",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading development of core platform features and mentoring junior developers.",
    },
    {
      company: "Startup Inc",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Built scalable web applications from scratch using modern tech stack.",
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2018 - 2020",
      description: "Developed responsive websites and interactive web experiences for clients.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate developer with over 5 years of experience building web applications. 
                I love working with modern technologies and creating elegant solutions to complex problems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                When I'm not coding, you can find me contributing to open-source projects, writing technical 
                blog posts, or exploring new frameworks and tools. I believe in continuous learning and 
                sharing knowledge with the community.
              </p>
            </div>

            {/* What I Do Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Lightbulb className="w-8 h-8 text-primary" />
                What I Do
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Code2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Full Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building end-to-end web applications with modern frameworks and best practices.
                  </p>
                </div>
                
                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Palette className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Creating beautiful, intuitive interfaces that users love to interact with.
                  </p>
                </div>
                
                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Database Design</h3>
                  <p className="text-muted-foreground">
                    Architecting scalable database solutions for high-performance applications.
                  </p>
                </div>
                
                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Performance Optimization</h3>
                  <p className="text-muted-foreground">
                    Optimizing applications for speed, efficiency, and better user experience.
                  </p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Wrench className="w-8 h-8 text-primary" />
                Skills & Technologies
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-card border border-border rounded-lg"
                  >
                    <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-foreground rounded text-sm border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                Experience
              </h2>
              
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-primary pl-6 pb-8 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{job.role}</h3>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-primary font-semibold mb-2">{job.company}</p>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
