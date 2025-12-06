import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import {
  socialLinks,
  getEmailAddress,
  getGithubUsername,
  getLinkedinUsername,
} from "@/data/profile";

const Contact = () => {
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
              className="text-lg text-muted-foreground max-w-3xl mb-12"
            >
              Have a project in mind or just want to chat? Feel free to reach
              out. I'm open to discussing new projects, creative ideas, or
              opportunities.
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
                            <div>
                              <p className="font-semibold group-hover:text-primary transition-colors">
                                {link.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {link.value}
                              </p>
                            </div>
                          </motion.a>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                      className="p-6 bg-card border border-border rounded-lg"
                    >
                      <h3 className="text-xl font-bold mb-3">Availability</h3>
                      <p className="text-muted-foreground">
                        I'm currently{" "}
                        <motion.span
                          className="text-primary font-semibold inline-block"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          available
                        </motion.span>{" "}
                        for work and new projects.
                      </p>
                    </motion.div>
                  </motion.div>
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
