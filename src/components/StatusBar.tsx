import { motion } from "framer-motion";
import { Circle, Mail, Code2 } from "lucide-react";
import { currentStatus } from "@/data/status";

const StatusBar = () => {
  const {
    available,
    availabilityText,
    availabilityColor,
    currentProject,
    contactEmail,
  } = currentStatus;

  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-2 flex items-center justify-between text-xs">
        {/* Left side - Status */}
        <div className="flex items-center gap-4">
          <motion.div
            className="flex items-center gap-1.5"
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
        </div>

        {/* Center - Currently Working On (Spotify-style) */}
        <motion.div
          className="flex items-center gap-2 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Code2 className="w-3.5 h-3.5 text-primary" />
          </motion.div>
          <span className="hidden sm:inline">Currently building</span>
          <span className="font-medium text-foreground">
            {currentProject.title}
          </span>
          <span className="hidden md:inline text-muted-foreground/60">•</span>
          <span className="hidden md:inline text-muted-foreground/60">
            {currentProject.technologies.join(", ")}
          </span>
        </motion.div>

        {/* Right side - CTA */}
        <motion.a
          href={`mailto:${contactEmail}`}
          className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ x: 2, transition: { duration: 0.15 } }}
        >
          <Mail className="w-3 h-3" />
          <span className="hidden sm:inline">Get in touch</span>
          <span className="sm:hidden">Contact</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default StatusBar;
