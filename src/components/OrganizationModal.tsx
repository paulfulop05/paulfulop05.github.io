import { X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Experience } from "@/data/experience";

export interface ModalPosition {
  badgeTopAbsolute: number;
  badgeBottomAbsolute: number;
  centerX: number;
  badgeHeight: number;
  placement: "top" | "bottom";
}

interface OrganizationModalProps {
  org: Experience;
  onClose: () => void;
  position: ModalPosition;
}

const OrganizationModal = ({
  org,
  onClose,
  position,
}: OrganizationModalProps) => {
  const isTop = position.placement === "top";
  const verticalOffset = 10; // Small gap between badge and arrow
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get actual modal height after render
  useEffect(() => {
    if (modalRef.current) {
      setModalHeight(modalRef.current.offsetHeight);
    }
  }, []);

  // Calculate top position based on placement
  const getTopPosition = () => {
    if (isTop) {
      // Position above: badge top - modal height - offset
      return position.badgeTopAbsolute - modalHeight - verticalOffset;
    } else {
      // Position below: badge bottom + offset
      return position.badgeBottomAbsolute + verticalOffset;
    }
  };

  // Calculate left position with boundary checking for desktop
  const getLeftPosition = () => {
    const modalWidth = 384; // max-w-96 = 24rem = 384px
    const padding = 16; // 1rem padding from edges
    const viewportWidth = window.innerWidth;

    let left = position.centerX;
    const halfModal = modalWidth / 2;

    // Clamp to viewport bounds
    if (left - halfModal < padding) {
      left = halfModal + padding;
    } else if (left + halfModal > viewportWidth - padding) {
      left = viewportWidth - halfModal - padding;
    }

    return left;
  };

  return (
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/20"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        ref={modalRef}
        className={cn(
          "z-50 bg-secondary rounded-[12px] p-4 md:p-6 shadow-2xl border border-border",
          isMobileView
            ? "fixed left-1/2 top-1/2 w-[calc(100vw-2rem)] max-w-96"
            : "absolute w-[calc(100vw-2rem)] max-w-96"
        )}
        style={
          isMobileView
            ? {
                x: "-50%",
                y: "-50%",
              }
            : {
                top: `${getTopPosition()}px`,
                left: `${getLeftPosition()}px`,
                x: "-50%",
              }
        }
        onClick={(e) => e.stopPropagation()}
        initial={{
          opacity: 0,
          scale: 0.9,
          y: isMobileView ? 0 : isTop ? 20 : -20,
        }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: isMobileView ? 0 : isTop ? 20 : -20,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Arrow pointing to badge - hidden on mobile */}
        {!isMobileView && (
          <div
            className={cn(
              "absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary border-border rotate-45",
              isTop
                ? "-bottom-1.5 border-r border-b"
                : "-top-1.5 border-l border-t"
            )}
          />
        )}

        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
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
          whileHover={{ x: 5, transition: { duration: 0.15 } }}
        >
          Visit Website
          <span className="text-xs">↗</span>
        </motion.a>
      </motion.div>
    </>
  );
};

export default OrganizationModal;
