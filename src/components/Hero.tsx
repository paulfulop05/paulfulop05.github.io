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

const Hero = () => {
  const sectionRef = useRef(null);
  const activeBadgeRef = useRef(null); // Ref to track the currently clicked badge element
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState("work"); // 'work' or 'education'
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    placement: "top", // 'top' or 'bottom'
  });

  const handleOrgClick = (orgKey, event) => {
    if (sectionRef.current) {
      const element = event.currentTarget;
      activeBadgeRef.current = element; // Store reference for scroll handling

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const badgeRect = element.getBoundingClientRect();

      // Constants for positioning logic
      const NAVBAR_HEIGHT = 80; // Approximate height of the fixed navbar
      const MODAL_HEIGHT_ESTIMATE = 400; // Estimated height of modal including offset

      // Check if there is enough space above the badge to fit the modal without hitting the navbar
      const spaceAbove = badgeRect.top - NAVBAR_HEIGHT;
      const placement = spaceAbove < MODAL_HEIGHT_ESTIMATE ? "bottom" : "top";

      setModalPosition({
        // Top relative to the section
        top: badgeRect.top - sectionRect.top,
        // Left relative to the section
        left: badgeRect.left - sectionRect.left,
        width: badgeRect.width,
        height: badgeRect.height,
        placement: placement,
      });
      setActiveModal(orgKey);
    }
  };

  // Effect to handle real-time position updates on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeModal && activeBadgeRef.current) {
        const badgeRect = activeBadgeRef.current.getBoundingClientRect();

        const NAVBAR_HEIGHT = 80;
        const MODAL_HEIGHT_ESTIMATE = 400;

        // Calculate available space in real-time
        const spaceAbove = badgeRect.top - NAVBAR_HEIGHT;
        const newPlacement =
          spaceAbove < MODAL_HEIGHT_ESTIMATE ? "bottom" : "top";

        setModalPosition((prev) => {
          // Only update state if placement actually changes to avoid unnecessary re-renders
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

  const Modal = ({ org, onClose, position }) => {
    const isTop = position.placement === "top";
    const verticalOffset = 20; // The gap between badge and modal

    return (
      <>
        {/* Fixed Backdrop */}
        <div className="fixed inset-0 z-40" onClick={onClose} />

        {/* Absolute Modal */}
        <div
          className={cn(
            "absolute z-50 bg-secondary rounded-[12px] p-4 md:p-6 w-[calc(100vw-2rem)] max-w-96 shadow-2xl border border-border -translate-x-1/2 transition-all duration-200 ease-out",
            // If top, translate up by 100% to sit above. If bottom, no Y translation needed (starts from calculated top).
            isTop ? "-translate-y-full" : ""
          )}
          style={{
            top: isTop
              ? `${position.top - verticalOffset}px` // Above: Badge Top - Offset
              : `${position.top + position.height + verticalOffset}px`, // Below: Badge Top + Badge Height + Offset
            left: `${position.left + position.width / 2}px`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Arrow */}
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary border-border transform rotate-45 transition-all duration-200",
              isTop
                ? "-bottom-1.5 border-r border-b" // Points down
                : "-top-1.5 border-l border-t" // Points up
            )}
          ></div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-start gap-3 mb-4">
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
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {org.description}
          </p>

          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>{org.period}</span>
          </div>

          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1 transition-colors"
          >
            Visit Website
            <span className="text-xs">↗</span>
          </a>
        </div>
      </>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-[85vh] flex items-center pt-20 pb-8 relative"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-4 leading-relaxed">
            I'm a developer who loves building things that live on the internet.
            I specialize in creating{" "}
            <span className="text-primary font-semibold">beautiful</span>,{" "}
            <span className="text-primary font-semibold">functional</span>, and{" "}
            <span className="text-primary font-semibold">user-friendly</span>{" "}
            web experiences.
          </p>

          <p className="text-md text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Currently building innovative solutions and exploring new
            technologies. I believe in writing clean code and creating products
            that make a difference.
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
            <span className="text-muted-foreground opacity-30">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <span className="text-muted-foreground opacity-30">|</span>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm">Email</span>
            </a>
            <span className="text-muted-foreground opacity-30">|</span>
            <a
              href="/about"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm">More about me →</span>
            </a>
          </div>
        </div>

        {/* Work & Education Section */}
        <div
          className="mt-20 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          {/* Tab Toggle - Bigger Text with Borders */}
          <div className="flex items-center gap-8 mb-8 w-fit">
            <button
              onClick={() => setActiveTab("work")}
              className={cn(
                "text-lg font-semibold transition-all duration-200 pb-2",
                activeTab === "work"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              )}
            >
              Work
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={cn(
                "text-lg font-semibold transition-all duration-200 pb-2",
                activeTab === "education"
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              )}
            >
              Education
            </button>
          </div>

          {/* Organization Badges with Names */}
          <div className="w-fit mb-8">
            <div className="flex items-center gap-6">
              {(activeTab === "work" ? workExperience : education).map(
                (org, index, array) => (
                  <div key={org.key} className="flex items-center gap-6">
                    <div
                      className="flex items-center gap-3 cursor-pointer group"
                      onClick={(e) => handleOrgClick(org.key, e)}
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-primary/50 transition-all">
                        <img
                          src={org.icon}
                          alt={org.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                    </div>
                    {index < array.length - 1 && (
                      <span className="text-primary text-lg font-bold">/</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <Modal
          org={organizations[activeModal]}
          onClose={() => setActiveModal(null)}
          position={modalPosition}
        />
      )}
    </section>
  );
};

export default Hero;
