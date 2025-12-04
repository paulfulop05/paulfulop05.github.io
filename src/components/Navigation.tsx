import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();

  const getPathSegments = () => {
    const path = location.pathname;
    if (path === "/") return [{ text: "~/", link: "/" }];

    if (path.startsWith("/projects/")) {
      const projectName = path.split("/")[2];
      return [
        { text: "~/", link: "/" },
        { text: "projects/", link: "/projects" },
        { text: projectName, link: path },
      ];
    }

    if (path === "/projects")
      return [
        { text: "~/", link: "/" },
        { text: "projects/", link: "/projects" },
      ];
    if (path === "/about")
      return [
        { text: "~/", link: "/" },
        { text: "about/", link: "/about" },
      ];
    if (path === "/contact")
      return [
        { text: "~/", link: "/" },
        { text: "contact/", link: "/contact" },
      ];
    if (path === "/cv")
      return [
        { text: "~/", link: "/" },
        { text: "cv/", link: "/cv" },
      ];

    return [{ text: "~/", link: "/" }];
  };

  const segments = getPathSegments();
  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={segment.link}
                className="text-foreground hover:text-primary transition-colors"
              >
                <motion.span
                  whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                >
                  {segment.text}
                </motion.span>
              </Link>
            </motion.div>
          ))}
          <motion.span
            className="inline-block w-2 h-4 bg-primary ml-1.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            className="ml-3 text-xs text-muted-foreground/40 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            ← click to navigate
          </motion.span>
        </motion.div>

        <div className="flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                to={link.to}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                <motion.span
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  className="inline-block"
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1, transition: { duration: 0.15 } }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
