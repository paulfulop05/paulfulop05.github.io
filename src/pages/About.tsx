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
import CardSwap, { Card } from "@/components/ui/card-swap";
import { motion } from "framer-motion";

const About = () => {
  const languageSkills = {
    proficient: {
      description:
        "I have used these programming languages in various projects throughout my journey.",
      items: ["C", "C++", "C#", "Python", "Java"],
    },
    familiar: {
      description:
        "I have worked with these programming languages at least once in my life, but I don't have as much experience.",
      items: ["Lua", "JavaScript", "TypeScript", "AssemblyScript"],
    },
  };

  const skills = [
    {
      category: "Frameworks",
      description:
        "Software frameworks and libraries that provide structure, reusable components, and tools to build applications efficiently.",
      items: ["Qt", "React", "Tailwind CSS", ".NET"],
      icon: Zap,
      color: "bg-red-500/20 text-red-400 border-red-500/30",
    },
    {
      category: "Tools",
      description:
        "Software and utilities that help build, test, and manage applications efficiently.",
      items: ["SQL Server", "GitHub", "Git", "Vite"],
      icon: Wrench,
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    },
    {
      category: "Concepts",
      description:
        "Core principles and techniques that guide writing efficient, organized, and maintainable code.",
      items: [
        "Object-Oriented Programming",
        "Data Structures",
        "Algorithms",
        "Software Engineering Principles",
      ],
      icon: Lightbulb,
      color: "bg-background text-foreground border-border",
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

  const cardData = [
    {
      title: "UI/UX Design",
      description:
        "Creating beautiful, intuitive interfaces that users love to interact with.",
      icon: Palette,
    },
    {
      title: "Database Design",
      description:
        "Architecting scalable database solutions for high-performance applications.",
      icon: Database,
    },
    {
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and better user experience.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12">
              About <span className="text-primary">Me</span>
            </h1>

            <div className="grid md:grid-cols-[1fr,300px] gap-12 mb-32">
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
                gridSize={21}
                pixelColor="hsl(var(--background))"
                once={false}
                animationStepDuration={0.4}
                aspectRatio="100%"
                className="w-full max-w-[300px] rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10 bg-background"
              />
            </div>

            {/* What I Do Section */}
            <section className="mb-32">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Lightbulb className="w-8 h-8 text-primary" />
                </motion.div>
                What I Do
              </h2>

              <div className="relative h-[350px] md:h-[320px] mt-16">
                <CardSwap
                  width={750}
                  height={200}
                  cardDistance={50}
                  verticalDistance={35}
                  delay={4000}
                  pauseOnHover={false}
                  skewAmount={4}
                  easing="elastic"
                >
                  {cardData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <Card key={index}>
                        <div className="h-full w-full rounded-xl bg-secondary border border-border overflow-hidden">
                          <div className="p-6 h-full flex flex-col">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-foreground">
                              {card.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </CardSwap>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-32">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-10 flex items-center gap-3"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                >
                  <Wrench className="w-8 h-8 text-primary" />
                </motion.div>
                Skills & Technologies
              </motion.h2>

              <div className="flex flex-col gap-4">
                {/* Languages Card - Full Width with Stacked Sub-sections */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-primary">
                      Languages
                    </h3>
                  </div>

                  <div className="flex flex-col gap-6">
                    {/* Proficient */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Proficient
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {languageSkills.proficient.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {languageSkills.proficient.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium border bg-amber-500/20 text-amber-400 border-amber-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Familiar */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Familiar
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {languageSkills.familiar.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {languageSkills.familiar.items.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md text-xs font-medium border bg-amber-500/20 text-amber-400 border-amber-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Other Skills - 3 Column Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                  {skills.map((skillGroup, index) => {
                    const Icon = skillGroup.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index + 1) * 0.1 }}
                        className="p-5 rounded-xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <h3 className="text-base font-bold text-primary">
                            {skillGroup.category}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">
                          {skillGroup.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium border ${skillGroup.color}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold flex items-center gap-3 mb-8"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Trophy className="w-8 h-8 text-primary" />
                </motion.div>
                Achievements
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-xl bg-secondary border border-border overflow-hidden"
              >
                <div
                  className="max-h-[320px] overflow-y-auto p-6 scrollbar-thin"
                  style={{ scrollbarWidth: "thin" }}
                >
                  <div className="space-y-0">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-4">
                        {/* Timeline checkpoint */}
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-primary border-2 border-primary shadow-lg shadow-primary/30 flex-shrink-0" />
                          {index < achievements.length - 1 && (
                            <div className="w-0.5 h-full min-h-[80px] bg-border" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="pb-8 flex-1">
                          <span className="text-xs text-primary font-semibold">
                            {achievement.year}
                          </span>
                          <h3 className="text-base font-bold text-foreground mt-1">
                            {achievement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
