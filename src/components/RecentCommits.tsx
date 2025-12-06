import { useState, useEffect } from "react";
import { GitCommit, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Commit {
  sha: string;
  message: string;
  repo: string;
  url: string;
  additions: number;
  deletions: number;
  date: string;
}

const RecentCommits = () => {
  const [mainCommits, setMainCommits] = useState<Commit[]>([]);
  const [studentCommits, setStudentCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"main" | "student">("main");

  const accounts = {
    main: { username: "paulfulop05" },
    student: { username: "PaulFulop" },
  };

  useEffect(() => {
    const fetchCommitsForAccount = async (
      username: string
    ): Promise<Commit[]> => {
      try {
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=100`
        );

        if (!eventsRes.ok) {
          console.error(
            `Failed to fetch events for ${username}:`,
            eventsRes.status,
            eventsRes.statusText
          );
          return [];
        }

        const events = await eventsRes.json();

        const pushEvents = events.filter(
          (event: any) => event.type === "PushEvent"
        );

        const recentCommits: Commit[] = [];
        const seenShas = new Set<string>();

        for (const event of pushEvents) {
          if (recentCommits.length >= 4) break;

          const [owner, repo] = event.repo.name.split("/");

          if (!event.payload.commits || event.payload.commits.length === 0) {
            try {
              const repoCommitsRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`
              );

              if (!repoCommitsRes.ok) {
                continue;
              }

              const repoCommits = await repoCommitsRes.json();
              if (repoCommits.length === 0) continue;

              const latestCommit = repoCommits[0];

              if (seenShas.has(latestCommit.sha)) continue;
              seenShas.add(latestCommit.sha);

              const fullCommitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${latestCommit.sha}`
              );

              let additions = 0;
              let deletions = 0;

              if (fullCommitRes.ok) {
                const fullCommit = await fullCommitRes.json();
                additions = fullCommit.stats?.additions || 0;
                deletions = fullCommit.stats?.deletions || 0;
              }

              recentCommits.push({
                sha: latestCommit.sha.substring(0, 7),
                message: latestCommit.commit.message.split("\n")[0],
                repo: event.repo.name,
                url: latestCommit.html_url,
                additions,
                deletions,
                date: latestCommit.commit.author.date,
              });

              continue;
            } catch (err) {
              console.error(
                `Error fetching from repo ${event.repo.name}:`,
                err
              );
              continue;
            }
          }

          const commits = event.payload.commits || [];

          for (const commit of commits) {
            if (recentCommits.length >= 4) break;

            if (seenShas.has(commit.sha)) continue;
            seenShas.add(commit.sha);

            try {
              const commitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`
              );

              if (!commitRes.ok) {
                recentCommits.push({
                  sha: commit.sha.substring(0, 7),
                  message: commit.message.split("\n")[0],
                  repo: event.repo.name,
                  url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
                  additions: 0,
                  deletions: 0,
                  date: event.created_at,
                });
                continue;
              }

              const commitData = await commitRes.json();

              recentCommits.push({
                sha: commit.sha.substring(0, 7),
                message: commit.message.split("\n")[0],
                repo: event.repo.name,
                url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
                additions: commitData.stats?.additions || 0,
                deletions: commitData.stats?.deletions || 0,
                date: event.created_at,
              });
            } catch (err) {
              recentCommits.push({
                sha: commit.sha.substring(0, 7),
                message: commit.message.split("\n")[0],
                repo: event.repo.name,
                url: `https://github.com/${owner}/${repo}/commit/${commit.sha}`,
                additions: 0,
                deletions: 0,
                date: event.created_at,
              });
            }
          }
        }

        return recentCommits;
      } catch (error) {
        console.error(`Error fetching commits for ${username}:`, error);
        return [];
      }
    };

    const fetchAllCommits = async () => {
      setLoading(true);
      try {
        const [main, student] = await Promise.all([
          fetchCommitsForAccount(accounts.main.username),
          fetchCommitsForAccount(accounts.student.username),
        ]);
        setMainCommits(main);
        setStudentCommits(student);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCommits();

    const interval = setInterval(fetchAllCommits, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      className="border border-border rounded-lg bg-card/50 p-4 h-full flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: hsl(var(--muted) / 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: hsl(var(--border));
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--primary) / 0.6);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: hsl(var(--border)) hsl(var(--muted) / 0.2);
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <h3 className="text-sm font-semibold flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <GitCommit className="w-4 h-4 text-primary" />
          </motion.div>
          Recent Commits
        </h3>
        <motion.a
          href={`https://github.com/${accounts.main.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
          whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
        >
          [info]
        </motion.a>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-1 text-xs mb-3 pb-2 border-b border-border flex-shrink-0">
        {["main", "student"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab as "main" | "student")}
            className={`px-3 py-1 transition-colors relative ${
              activeTab === tab
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            whileHover={{ y: -1, transition: { duration: 0.15 } }}
            whileTap={{ scale: 0.98 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="commitTab"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Commits List */}
      <div className="flex-1 overflow-y-scroll pr-2 custom-scrollbar min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="space-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {loading ? (
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="h-3 bg-border rounded w-3/4 mb-1"></div>
                    <div className="h-2 bg-border rounded w-1/3"></div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <>
                {(activeTab === "main" ? mainCommits : studentCommits).length >
                0 ? (
                  (activeTab === "main" ? mainCommits : studentCommits).map(
                    (commit, index) => (
                      <motion.a
                        key={commit.sha + index}
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        variants={itemVariants}
                        whileHover={{ x: 4, transition: { duration: 0.15 } }}
                      >
                        <motion.div
                          className="border border-border/50 rounded-md px-2 py-1.5 hover:border-primary/50 hover:bg-card/80 transition-all"
                          whileHover={{
                            scale: 1.01,
                            transition: { duration: 0.15 },
                          }}
                        >
                          <div className="flex items-start gap-1.5 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-medium text-primary/80">
                                {commit.repo.split("/")[1]}
                              </p>
                              <p className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {commit.message}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center justify-between mt-1 pt-1 border-t border-border/30">
                            <div className="flex items-center gap-3 text-xs">
                              <span className="font-mono text-muted-foreground">
                                {commit.sha}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1 text-green-500">
                                  <span className="text-[10px]">●</span>
                                  <span className="font-medium">
                                    +{commit.additions}
                                  </span>
                                </span>
                                <span className="flex items-center gap-1 text-red-500">
                                  <span className="text-[10px]">●</span>
                                  <span className="font-medium">
                                    -{commit.deletions}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                            >
                              <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.a>
                    )
                  )
                ) : (
                  <p className="text-xs text-muted-foreground py-2">
                    No recent commits
                  </p>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RecentCommits;
