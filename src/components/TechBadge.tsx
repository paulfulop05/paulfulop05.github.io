import { motion } from "framer-motion";
import { getTechColorClasses, TechType } from "@/lib/techColors";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  tech: string;
  type?: TechType;
  index?: number;
  animated?: boolean;
  className?: string;
}

const TechBadge = ({
  tech,
  type,
  index = 0,
  animated = true,
  className,
}: TechBadgeProps) => {
  const colorClasses = getTechColorClasses(type);

  if (animated) {
    return (
      <motion.span
        className={cn(
          "text-xs font-semibold px-2 py-1 rounded border",
          colorClasses,
          className
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ scale: 1.1, y: -2, transition: { duration: 0.15 } }}
      >
        {tech}
      </motion.span>
    );
  }

  return (
    <span
      className={cn(
        "text-xs font-semibold px-2 py-1 rounded border",
        colorClasses,
        className
      )}
    >
      {tech}
    </span>
  );
};

export default TechBadge;
