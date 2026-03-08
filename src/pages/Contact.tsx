import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  socialLinks,
  getEmailAddress,
  getGithubUsername,
  getLinkedinUsername,
} from "@/data/profile";
import {
  currentStatus,
  availabilityText,
  availabilityColor,
} from "@/data/status";

const statusColorClasses: Record<
  string,
  { bg: string; text: string; ring: string }
> = {
  "green-500": {
    bg: "bg-green-500",
    text: "text-green-400",
    ring: "ring-green-500/30",
  },
  "red-500": {
    bg: "bg-red-500",
    text: "text-red-400",
    ring: "ring-red-500/30",
  },
  "yellow-500": {
    bg: "bg-yellow-500",
    text: "text-yellow-400",
    ring: "ring-yellow-500/30",
  },
};
const statusColors =
  statusColorClasses[availabilityColor] ?? statusColorClasses["green-500"];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(getEmailAddress()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const contactLinks = socialLinks.map((link) => ({
    href: link.href,
    icon: link.icon,
    title: link.label,
    value:
      link.label === "Email"
        ? getEmailAddress()
        : link.label === "GitHub"
          ? `@${getGithubUsername()}`
          : link.label === "LinkedIn"
            ? `/in/${getLinkedinUsername()}`
            : link.href.split("/").pop() || "",
    external: link.label !== "Email",
  }));

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed"
            >
              Open to roles at official companies — full-time or part-time.{" "}
              <br />
              Not looking for freelance, unpaid, or informal work at the moment.
            </motion.p>

            <div>
              {/* Contact Info */}
              <div>
                <div className="space-y-8">
                  <div>
                    <motion.h2
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-2xl font-bold mb-6"
                    >
                      Connect with me
                    </motion.h2>
                    <div className="space-y-4">
                      {contactLinks.map((link, index) => (
                        <motion.div
                          key={link.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1,
                          }}
                        >
                          <motion.a
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={
                              link.external ? "noopener noreferrer" : undefined
                            }
                            className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.15 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.15 }}
                            >
                              <link.icon className="w-6 h-6 text-primary" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold group-hover:text-primary transition-colors">
                                {link.title}
                              </p>
                              <p className="text-sm text-muted-foreground truncate">
                                {link.value}
                              </p>
                            </div>
                            {link.title === "Email" && (
                              <motion.button
                                onClick={handleCopyEmail}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.15 }}
                                className="ml-auto p-1.5 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                                aria-label="Copy email address"
                              >
                                <AnimatePresence mode="wait" initial={false}>
                                  {copied ? (
                                    <motion.span
                                      key="check"
                                      initial={{ scale: 0.5, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.5, opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                    >
                                      <Check className="w-4 h-4 text-green-500" />
                                    </motion.span>
                                  ) : (
                                    <motion.span
                                      key="copy"
                                      initial={{ scale: 0.5, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.5, opacity: 0 }}
                                      transition={{ duration: 0.15 }}
                                    >
                                      <Copy className="w-4 h-4" />
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                              </motion.button>
                            )}
                          </motion.a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {currentStatus.currentProject.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      className="p-5 bg-card border border-border rounded-lg"
                    >
                      <p className="text-sm text-muted-foreground">
                        Currently working on{" "}
                        <span className="text-foreground font-medium">
                          {currentStatus.currentProject.title}
                        </span>
                        {currentStatus.currentProject.technologies.length >
                          0 && (
                          <>
                            {" "}
                            using{" "}
                            <span className="text-foreground font-medium">
                              {currentStatus.currentProject.technologies.join(
                                ", ",
                              )}
                            </span>
                          </>
                        )}
                        .
                      </p>
                    </motion.div>
                  )}

                  {currentStatus.showAvailability && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.15 }}
                        className="p-6 bg-card border border-border rounded-lg space-y-4"
                      >
                        <h3 className="text-xl font-bold">Availability</h3>

                        {/* Status badge */}
                        <div className="flex items-center gap-3">
                          <span className={`relative flex h-3 w-3`}>
                            <span
                              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusColors.bg}`}
                            />
                            <span
                              className={`relative inline-flex rounded-full h-3 w-3 ${statusColors.bg}`}
                            />
                          </span>
                          <span
                            className={`font-semibold ${statusColors.text}`}
                          >
                            {availabilityText}
                          </span>
                        </div>

                        {/* Current project */}
                        {currentStatus.currentProject.title && (
                          <p className="text-sm text-muted-foreground">
                            Currently working on{" "}
                            <span className="text-foreground font-medium">
                              {currentStatus.currentProject.title}
                            </span>
                            {currentStatus.currentProject.technologies.length >
                              0 && (
                              <>
                                {" "}
                                using{" "}
                                <span className="text-foreground font-medium">
                                  {currentStatus.currentProject.technologies.join(
                                    ", ",
                                  )}
                                </span>
                              </>
                            )}
                            .
                          </p>
                        )}
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
