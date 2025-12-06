import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workExperience, education, getOrganizations } from "@/data/experience";
import { socialLinks } from "@/data/profile";
import OrganizationModal, { ModalPosition } from "./OrganizationModal";

const Hero = () => {
  const sectionRef = useRef(null);
  const activeBadgeRef = useRef<HTMLElement | null>(null);
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("work");
  const [modalPosition, setModalPosition] = useState({
    // Store document-relative Y position (won't change on scroll)
    badgeTopAbsolute: 0,
    badgeBottomAbsolute: 0,
    centerX: 0,
    badgeHeight: 0,
    placement: "top" as "top" | "bottom",
  });

  const organizations = getOrganizations();

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
    <section
      ref={sectionRef}
      className="min-h-[85vh] flex items-center pt-20 pb-8 relative"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
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
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed"
          >
            I'm a 20-year-old CS student at Babeș-Bolyai University in Romania.
            My work is centered around{" "}
            <motion.span
              className="text-primary font-semibold inline-block"
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
              className="text-primary font-semibold inline-block"
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
              className="text-primary font-semibold inline-block"
              whileHover={{
                scale: 1.1,
                rotate: -2,
                transition: { duration: 0.15 },
              }}
            >
              problem-solving
            </motion.span>{" "}
            .
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-md text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          >
            I have a strong enthusiasm for learning new concepts and applying
            them to develop meaningful, challenging projects.
          </motion.p>

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
                <FileText className="w-4 h-4" />
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
                <span className="text-sm">More about me →</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Work & Education Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Tab Toggle */}
          <div className="flex items-center gap-8 mb-8 w-fit">
            {["work", "education"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "text-lg font-semibold transition-all duration-200 pb-2 relative",
                  activeTab === tab
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Organization Badges */}
          <div className="w-full md:w-fit mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex flex-wrap items-center gap-4 md:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {(activeTab === "work" ? workExperience : education).length === 0 ? (
                  <span className="text-muted-foreground text-sm italic">
                    {activeTab === "work" 
                      ? "No work experience yet — currently focused on learning and personal projects."
                      : "No education entries yet."}
                  </span>
                ) : (
                  (activeTab === "work" ? workExperience : education).map(
                    (org, index, array) => (
                      <motion.div
                        key={org.key}
                        className="flex items-center gap-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div
                          className="flex items-center gap-3 cursor-pointer group"
                          onClick={(e) => handleOrgClick(org.key, e)}
                          whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.15 },
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-primary/50 transition-all"
                            whileHover={{
                              rotate: [0, -5, 5, 0],
                              transition: { duration: 0.5 },
                            }}
                          >
                            <img
                              src={org.icon}
                              alt={org.name}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                              {org.name}
                            </span>
                            {org.isPast && (
                              <span className="text-xs text-muted-foreground">
                                (Past)
                              </span>
                            )}
                          </div>
                        </motion.div>
                        {index < array.length - 1 && (
                          <span className="text-primary text-lg font-bold hidden md:inline">
                            /
                          </span>
                        )}
                      </motion.div>
                    )
                  )
                )}
              </motion.div>
            </AnimatePresence>
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
