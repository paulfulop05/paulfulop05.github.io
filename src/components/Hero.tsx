import {
  Github,
  Linkedin,
  Mail,
  X,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import ubb_icon from "../assets/UBB.png";
import cnlr_icon from "../assets/CNLR.png";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef(null);
  const activeBadgeRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("work");
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    placement: "top",
  });

  const handleOrgClick = (orgKey, event) => {
    if (sectionRef.current) {
      const element = event.currentTarget;
      activeBadgeRef.current = element;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const badgeRect = element.getBoundingClientRect();

      const NAVBAR_HEIGHT = 80;
      const MODAL_HEIGHT_ESTIMATE = 400;

      const spaceAbove = badgeRect.top - NAVBAR_HEIGHT;
      const placement = spaceAbove < MODAL_HEIGHT_ESTIMATE ? "bottom" : "top";

      setModalPosition({
        top: badgeRect.top - sectionRect.top,
        left: badgeRect.left - sectionRect.left,
        width: badgeRect.width,
        height: badgeRect.height,
        placement: placement,
      });
      setActiveModal(orgKey);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (activeModal && activeBadgeRef.current) {
        const badgeRect = activeBadgeRef.current.getBoundingClientRect();

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
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeModal]);

  const workExperience = [
    {
      key: "ubb",
      name: "UBB",
      role: "CTO",
      description:
        "As CTO, I led the development of StorageBox, an innovative startup revolutionizing eco-friendly Shopify fulfillment with edge based sustainable warehousing technology and seamless logistics integrations.",
      period: "September 2024 - June 2025",
      website: "https://www.cs.ubbcluj.ro/",
      icon: ubb_icon,
      isPast: false,
    },
    {
      key: "cnlr",
      name: "CNLR",
      role: "Software Engineer",
      description:
        "Worked on cutting-edge projects involving distributed systems and cloud infrastructure, contributing to solutions that served millions of users worldwide.",
      period: "January 2023 - August 2024",
      website: "https://www.cnlr.ro/",
      icon: cnlr_icon,
      isPast: true,
    },
  ];

  const education = [
    {
      key: "ubb-edu",
      name: "UBB",
      role: "Bachelor's in Computer Science",
      description:
        "Focused on software engineering, algorithms, and distributed systems. Graduated with honors and completed multiple research projects in AI and machine learning.",
      period: "September 2020 - June 2024",
      website: "https://www.cs.ubbcluj.ro/",
      icon: ubb_icon,
      isPast: true,
    },
  ];

  const organizations = {
    ubb: workExperience[0],
    cnlr: workExperience[1],
    "ubb-edu": education[0],
  };

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:hello@example.com", icon: Mail, label: "Email" },
  ];

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

  const Modal = ({ org, onClose, position }) => {
    const isTop = position.placement === "top";
    const verticalOffset = 20;

    return (
      <>
        <motion.div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />

        <motion.div
          className={cn(
            "absolute z-50 bg-secondary rounded-[12px] p-4 md:p-6 w-[calc(100vw-2rem)] max-w-96 shadow-2xl border border-border -translate-x-1/2",
            isTop ? "-translate-y-full" : ""
          )}
          style={{
            top: isTop
              ? `${position.top - verticalOffset}px`
              : `${position.top + position.height + verticalOffset}px`,
            left: `${position.left + position.width / 2}px`,
          }}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: isTop ? 20 : -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: isTop ? 20 : -20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary border-border transform rotate-45",
              isTop
                ? "-bottom-1.5 border-r border-b"
                : "-top-1.5 border-l border-t"
            )}
          ></div>

          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-4 h-4" />
          </motion.button>

          <motion.div
            className="flex items-start gap-3 mb-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center flex-shrink-0 overflow-hidden">
              <img
                src={org.icon}
                alt={org.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{org.name}</h3>
              <p className="text-gray-400 text-sm">{org.role}</p>
            </div>
          </motion.div>

          <motion.p
            className="text-gray-300 text-sm leading-relaxed mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {org.description}
          </motion.p>

          <motion.div
            className="flex items-center gap-2 text-xs text-gray-400 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{org.period}</span>
          </motion.div>

          <motion.a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            whileHover={{ x: 5 }}
          >
            Visit Website
            <span className="text-xs">↗</span>
          </motion.a>
        </motion.div>
      </>
    );
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
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hello, I'm{" "}
            <motion.span
              className="text-primary inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Your Name
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed"
          >
            I'm a developer who loves building things that live on the internet.
            I specialize in creating{" "}
            <motion.span
              className="text-primary font-semibold inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              beautiful
            </motion.span>
            ,{" "}
            <motion.span
              className="text-primary font-semibold inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
            >
              functional
            </motion.span>
            , and{" "}
            <motion.span
              className="text-primary font-semibold inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
            >
              user-friendly
            </motion.span>{" "}
            web experiences.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-md text-muted-foreground max-w-3xl mb-8 leading-relaxed"
          >
            Currently building innovative solutions and exploring new
            technologies. I believe in writing clean code and creating products
            that make a difference.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm">{link.label}</span>
              </motion.a>
            ))}
            <span className="text-muted-foreground opacity-30">|</span>
            <motion.a
              href="/about"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-sm">More about me →</span>
            </motion.a>
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
          <div className="w-fit mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {(activeTab === "work" ? workExperience : education).map(
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
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-primary/50 transition-all"
                          whileHover={{ rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
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
                        <motion.span
                          className="text-primary text-lg font-bold"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          /
                        </motion.span>
                      )}
                    </motion.div>
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeModal && (
          <Modal
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
