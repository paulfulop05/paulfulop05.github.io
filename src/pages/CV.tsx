import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CV = () => {
  const cvPdfPath = "/PAUL_FÜLÖP_CV.pdf";
  const privateCvPdfPath = "/PAUL_FÜLÖP_CV_PRIVATE.pdf";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <motion.div
        className="pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <motion.a
                href={privateCvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg hover:border-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden xs:inline">Open in New Tab</span>
                <span className="xs:hidden">Open</span>
              </motion.a>
              <motion.a
                href={cvPdfPath}
                download
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 md:px-4 py-2 text-xs md:text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </motion.a>
            </div>
          </motion.div>

          {/* PDF Viewer - Hidden on mobile, show download prompt instead */}
          <motion.div
            className="hidden md:block w-full bg-muted rounded-xl overflow-hidden border border-border shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <iframe
              src={privateCvPdfPath}
              className="w-full h-[calc(100vh-200px)] min-h-[500px]"
              title="CV"
            />
          </motion.div>

          {/* Mobile: Show download card instead of iframe */}
          <motion.div
            className="md:hidden w-full bg-muted/50 rounded-xl border border-border p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-lg font-semibold mb-2">View My CV</h2>
              <p className="text-sm text-muted-foreground mb-6">
                For the best viewing experience on mobile, download the PDF or
                open it in a new tab.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <motion.a
                href={cvPdfPath}
                download
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </motion.a>
              <motion.a
                href={privateCvPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-lg hover:border-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Fallback message - Desktop only */}
          <motion.p
            className="hidden md:block text-center text-sm text-muted-foreground mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Having trouble viewing the PDF?{" "}
            <a
              href={cvPdfPath}
              download
              className="text-primary hover:underline"
            >
              Download it directly
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default CV;
