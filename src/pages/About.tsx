import Navigation from "@/components/Navigation";
import { Code2, Trophy, Lightbulb, Wrench } from "lucide-react";
import profileImage from "../assets/avatar.jpg";
import profileImageGlasses from "../assets/avatar_with_glasses.jpg";
import PixelTransition from "@/components/ui/pixel_transition";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { motion } from "framer-motion";
import { languageSkills, skills } from "@/data/skills";
import { achievements } from "@/data/achievements";
import { whatIDoCards } from "@/data/profile";
import { useState, useEffect } from "react";

const getCardDimensions = (viewportWidth: number) => {
  if (viewportWidth < 400) {
    return {
      cardWidth: viewportWidth - 100,
      cardHeight: 220,
      cardDistance: 25,
      verticalDistance: 20,
    };
  } else if (viewportWidth < 480) {
    return {
      cardWidth: viewportWidth - 120,
      cardHeight: 210,
      cardDistance: 30,
      verticalDistance: 22,
    };
  } else if (viewportWidth < 640) {
    return {
      cardWidth: viewportWidth - 140,
      cardHeight: 200,
      cardDistance: 35,
      verticalDistance: 25,
    };
  } else if (viewportWidth < 768) {
    return {
      cardWidth: Math.min(500, viewportWidth - 150),
      cardHeight: 220,
      cardDistance: 40,
      verticalDistance: 28,
    };
  } else if (viewportWidth < 900) {
    return {
      cardWidth: Math.min(550, viewportWidth - 200),
      cardHeight: 230,
      cardDistance: 45,
      verticalDistance: 30,
    };
  } else if (viewportWidth < 1024) {
    return {
      cardWidth: Math.min(650, viewportWidth - 200),
      cardHeight: 210,
      cardDistance: 48,
      verticalDistance: 32,
    };
  } else {
    return {
      cardWidth: 750,
      cardHeight: 200,
      cardDistance: 50,
      verticalDistance: 35,
    };
  }
};

const getInitialDimensions = () => {
  if (typeof window !== "undefined") {
    return getCardDimensions(window.innerWidth);
  }
  return { cardWidth: 750, cardHeight: 200, cardDistance: 50, verticalDistance: 35 };
};

const About = () => {
  const [dimensions, setDimensions] = useState(getInitialDimensions);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions(getCardDimensions(window.innerWidth));
    };

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-12">
              About <span className="text-primary">Me</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 mb-32">
              {/* Image - right on desktop, top on mobile */}
              <div className="flex justify-center md:justify-end flex-shrink-0 order-1 md:order-2">
                <PixelTransition
                  firstContent={
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover object-center"
                    />
                  }
                  secondContent={
                    <img
                      src={profileImageGlasses}
                      alt="Profile with glasses"
                      className="w-full h-full object-cover object-center"
                    />
                  }
                  gridSize={21}
                  pixelColor="hsl(var(--background))"
                  once={false}
                  animationStepDuration={0.4}
                  aspectRatio=""
                  className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10 bg-background"
                />
              </div>

              {/* Text - left on desktop, bottom on mobile */}
              <div className="prose prose-invert max-w-none flex-1 order-2 md:order-1">
                <p className="text-md text-muted-foreground leading-relaxed mb-6">
                  I am an undergraduate student in Computer Science and
                  Mathematics with a strong interest in technology,
                  problem-solving, and software development. I’ve built a strong
                  foundation in algorithms, data structures, and analytical
                  thinking, and I enjoy putting these concepts into practice
                  through personal projects.
                </p>
                <p className="text-md text-muted-foreground leading-relaxed mb-6">
                  I like exploring new ideas and working on projects that help
                  me grow as a developer. I’m especially interested in game
                  development and look forward to learning more about artificial
                  intelligence and machine learning as I progress.
                </p>

                <p className="text-md text-muted-foreground leading-relaxed mb-6">
                  Outside my studies, I train consistently as a calisthenics
                  athlete and I also like playing chess, both casually and
                  online. These activities give me a steady, enjoyable balance
                  alongside my academic work.
                </p>
              </div>
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

              <div className="relative h-[420px] sm:h-[450px] mt-8 sm:mt-16">
                <CardSwap
                  width={dimensions.cardWidth}
                  height={dimensions.cardHeight}
                  cardDistance={dimensions.cardDistance}
                  verticalDistance={dimensions.verticalDistance}
                  delay={4000}
                  pauseOnHover={false}
                  skewAmount={4}
                  easing="elastic"
                >
                  {whatIDoCards.map((card, index) => {
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
                            className="px-2.5 py-1 rounded-md text-xs font-medium border bg-[hsl(var(--tech-language-bg))] text-[hsl(var(--tech-language-text))] border-[hsl(var(--tech-language-border))]"
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
                            className="px-2.5 py-1 rounded-md text-xs font-medium border bg-[hsl(var(--tech-language-bg))] text-[hsl(var(--tech-language-text))] border-[hsl(var(--tech-language-border))]"
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
