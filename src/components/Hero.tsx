import { ChevronRight, FileText } from "pixelarticons/react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience, education, getOrganizations } from "@/data/experience";
import { socialLinks } from "@/data/profile";
import OrganizationModal, { ModalPosition } from "./OrganizationModal";

const Hero = () => {
  const activeBadgeRef = useRef<HTMLElement | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState<ModalPosition>({
    badgeTopAbsolute: 0,
    badgeBottomAbsolute: 0,
    centerX: 0,
    badgeHeight: 0,
    placement: "top",
  });

  const organizations = getOrganizations();
  const allOrganizations = [...workExperience, ...education];

  const handleOrgClick = (orgKey, event) => {
    const element = event.currentTarget;
    activeBadgeRef.current = element;

    const badgeRect = element.getBoundingClientRect();
    const scrollY = window.scrollY;

    const NAVBAR_HEIGHT = 80;
    const MODAL_HEIGHT_ESTIMATE = 400;

    const spaceAbove = badgeRect.top - NAVBAR_HEIGHT;
    const placement = spaceAbove < MODAL_HEIGHT_ESTIMATE ? "bottom" : "top";

    setModalPosition({
      // Store absolute position (document-relative)
      badgeTopAbsolute: badgeRect.top + scrollY,
      badgeBottomAbsolute: badgeRect.bottom + scrollY,
      centerX: badgeRect.left + badgeRect.width / 2,
      badgeHeight: badgeRect.height,
      placement: placement,
    });
    setActiveModal(orgKey);
  };

  // Handle placement flip when navbar would overlap modal
  useEffect(() => {
    if (!activeModal || !activeBadgeRef.current) return;

    const handleScroll = () => {
      const badgeRect = activeBadgeRef.current?.getBoundingClientRect();
      if (!badgeRect) return;

      const NAVBAR_HEIGHT = 80;
      const MODAL_HEIGHT_ESTIMATE = 400;

      const spaceAbove = badgeRect.top - NAVBAR_HEIGHT;
      const newPlacement =
        spaceAbove < MODAL_HEIGHT_ESTIMATE ? "bottom" : "top";

      setModalPosition((prev) => {
        if (prev.placement !== newPlacement) {
          return { ...prev, placement: newPlacement };
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeModal]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="min-h-[60vh] flex items-center pt-28 pb-8 relative">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-5xl font-bold mb-6"
          >
            Hello, I'm{" "}
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
            >
              Paul Fülöp
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-left text-lg md:text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed"
          >
            21-year-old undergrad CS student at Babeș-Bolyai University in
            Romania. My work is centered around{" "}
            <motion.span
              className="text-primary inline-block"
              whileHover={{
                scale: 1.1,
                rotate: -2,
                transition: { duration: 0.15 },
              }}
            >
              tech innovation
            </motion.span>
            ,{" "}
            <motion.span
              className="text-primary inline-block"
              whileHover={{
                scale: 1.1,
                rotate: 2,
                transition: { duration: 0.15 },
              }}
            >
              software development
            </motion.span>
            , and{" "}
            <motion.span
              className="text-primary inline-block"
              whileHover={{
                scale: 1.1,
                rotate: -2,
                transition: { duration: 0.15 },
              }}
            >
              problem-solving
            </motion.span>
            . I have a strong enthusiasm for learning new concepts and applying
            them to develop meaningful, challenging projects.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-left text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          ></motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/cv"
                className="flex items-center gap-2 px-3 py-1.5 text-sm border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <FileText className="w-5 h-5" />
                <span>CV</span>
              </motion.a>
            </motion.div>
            <span className="text-muted-foreground opacity-30 hidden sm:inline">
              |
            </span>
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <motion.a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <link.icon className="w-5 h-5" />
                  <span className="text-sm">{link.label}</span>
                </motion.a>
              </motion.div>
            ))}
            <span className="text-muted-foreground opacity-30 hidden sm:inline">
              |
            </span>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.a
                href="/about"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.15 }}
              >
                <span className="text-sm">More about me</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Experience and education badges */}
        <motion.div
          className="mt-20 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="w-full mb-8">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {allOrganizations.length === 0 ? (
                <span className="text-muted-foreground text-sm italic">
                  No experience or education entries yet :(
                </span>
              ) : (
                allOrganizations.map((org, index) => (
                  <div key={org.key} className="flex items-center gap-6">
                    <div
                      className={`flex items-center gap-3 cursor-pointer group transition-[filter,opacity] duration-200 ${org.isPast ? "brightness-50 opacity-70 hover:brightness-75 hover:opacity-100" : "brightness-100 hover:brightness-75"}`}
                      onClick={(e) => handleOrgClick(org.key, e)}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img
                          src={org.icon}
                          alt={org.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-base font-bold text-foreground/70">
                          {org.name}
                        </span>
                        {org.isPast && (
                          <span className="text-xs text-muted-foreground">
                            (Past)
                          </span>
                        )}
                      </div>
                    </div>
                    {index < allOrganizations.length - 1 && (
                      <span className="text-primary text-lg font-bold hidden md:inline">
                        /
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <OrganizationModal
            org={organizations[activeModal]}
            onClose={() => setActiveModal(null)}
            position={modalPosition}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
