import { motion } from "framer-motion";
import { Circle, Mail, Code2 } from "lucide-react";
import { currentStatus } from "@/data/status";
import { getEmailLink } from "@/data/profile";

const StatusBar = () => {
  const { available, availabilityText, availabilityColor, currentProject } =
    currentStatus;

  const emailLink = getEmailLink();

  return (
    <motion.div
      className="bg-card/80 backdrop-blur-sm border-t border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6 py-3 sm:py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs">
        {/* Top row on mobile / Left side on desktop - Status & Contact */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
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

          {/* Contact - visible on mobile in top row */}
          <motion.a
            href={emailLink}
            className="flex sm:hidden items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ x: 2, transition: { duration: 0.15 } }}
          >
            <Mail className="w-3 h-3" />
            <span>Contact</span>
          </motion.a>
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
          <span className="sm:hidden">Building</span>
          <span className="font-medium text-foreground">
            {currentProject.title}
          </span>
          <span className="hidden md:inline text-muted-foreground/60">•</span>
          <span className="hidden md:inline text-muted-foreground/60">
            {currentProject.technologies.join(", ")}
          </span>
        </motion.div>

        {/* Right side - CTA (hidden on mobile, shown in top row instead) */}
        <motion.a
          href={emailLink}
          className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ x: 2, transition: { duration: 0.15 } }}
        >
          <Mail className="w-3 h-3" />
          <span>Get in touch</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default StatusBar;
