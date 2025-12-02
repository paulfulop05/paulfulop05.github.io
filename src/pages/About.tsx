import Navigation from "@/components/Navigation";
import {
  Code2,
  Database,
  Palette,
  Zap,
  Lightbulb,
  Wrench,
  Trophy,
} from "lucide-react";
import profileImage from "../assets/avatar.jpg";
import profileImageGlasses from "../assets/avatar_with_glasses.jpg";
import PixelTransition from "@/components/ui/pixel_transition";

const About = () => {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++"],
      color: "text-blue-400",
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Vue.js", "Node.js", "Express"],
      color: "text-green-400",
    },
    {
      category: "Concepts",
      items: ["REST APIs", "GraphQL", "Microservices", "CI/CD", "Agile"],
      color: "text-purple-400",
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "VS Code", "Figma", "Postman"],
      color: "text-orange-400",
    },
  ];

  const achievements = [
    {
      title: "Open Source Contributor",
      description:
        "Active contributor to popular open-source projects with over 1000+ stars combined.",
      year: "2023",
    },
    {
      title: "Hackathon Winner",
      description:
        "First place at National Tech Hackathon for innovative AI-powered solution.",
      year: "2022",
    },
    {
      title: "Published Article",
      description:
        "Technical article on distributed systems published in major tech publication.",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-12">
              About <span className="text-primary">Me</span>
            </h1>

            <div className="grid md:grid-cols-[1fr,300px] gap-12 mb-12">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate developer with over 5 years of experience
                  building web applications. I love working with modern
                  technologies and creating elegant solutions to complex
                  problems.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blog posts, or
                  exploring new frameworks and tools. I believe in continuous
                  learning and sharing knowledge with the community.
                </p>
              </div>

              <PixelTransition
                firstContent={
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                }
                secondContent={
                  <img
                    src={profileImageGlasses}
                    alt="Profile with glasses"
                    className="w-full h-full object-cover"
                  />
                }
                gridSize={12}
                pixelColor="hsl(var(--background))"
                once={false}
                animationStepDuration={0.4}
                aspectRatio="100%"
                className="w-full max-w-[300px] rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10 bg-background"
              />
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
                  <h3 className="text-xl font-bold mb-3">
                    Full Stack Development
                  </h3>
                  <p className="text-muted-foreground">
                    Building end-to-end web applications with modern frameworks
                    and best practices.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Palette className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    Creating beautiful, intuitive interfaces that users love to
                    interact with.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Database Design</h3>
                  <p className="text-muted-foreground">
                    Architecting scalable database solutions for
                    high-performance applications.
                  </p>
                </div>

                <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">
                    Performance Optimization
                  </h3>
                  <p className="text-muted-foreground">
                    Optimizing applications for speed, efficiency, and better
                    user experience.
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
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-primary/10 ${skillGroup.color} rounded text-sm font-semibold border border-primary/20`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Trophy className="w-8 h-8 text-primary" />
                Achievements
              </h2>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-primary pl-6 pb-8 relative"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
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
