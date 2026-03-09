import { motion } from "framer-motion";
import { Circle, Code2 } from "lucide-react";
import {
  currentStatus,
  availabilityText,
  availabilityColor,
} from "@/data/status";

const StatusBar = () => {
  const { available, currentProject, showAvailability } = currentStatus;

  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs">
        {/* Availability status */}
        {showAvailability && (
          <motion.div
            className="flex items-center gap-1.5 shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              animate={available ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Circle
                className={`w-2 h-2 fill-${availabilityColor} text-${availabilityColor}`}
              />
            </motion.div>
            <span className="text-muted-foreground">{availabilityText}</span>
          </motion.div>
        )}

        {/* Currently Working On */}
        <motion.div
          className="flex items-center gap-2 text-muted-foreground min-w-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="shrink-0"
          >
            <Code2 className="w-3.5 h-3.5 text-primary" />
          </motion.div>
          <span className="hidden sm:inline shrink-0">
            Currently working on
          </span>
          <span className="sm:hidden shrink-0">Working on</span>
          <span className="font-medium text-foreground truncate">
            {currentProject.title}
          </span>
          <span className="hidden md:inline text-muted-foreground/60 shrink-0">
            •
          </span>
          <span className="hidden md:inline text-muted-foreground/60 truncate">
            {currentProject.technologies.join(", ")}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatusBar;
