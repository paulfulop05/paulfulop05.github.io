import { useState, useEffect } from "react";
import { GitCommit, ExternalLink } from "lucide-react";

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
    main: {
      username: "paulfulop05",
      token: import.meta.env.VITE_GITHUB_TOKEN_MAIN,
    },
    student: {
      username: "PaulFulop",
      token: import.meta.env.VITE_GITHUB_TOKEN_STUDENT,
    },
  };

  useEffect(() => {
    const fetchCommitsForAccount = async (
      username: string,
      token?: string
    ): Promise<Commit[]> => {
      try {
        const headers: HeadersInit = {};

        // Add authorization header if token is available
        if (token) {
          headers["Authorization"] = `Bearer ${token}`;
        }

        // Fetch user's public events only (client-safe, no authentication needed)
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=100`,
          { headers }
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

        // Filter push events and extract commits
        const pushEvents = events.filter(
          (event: any) => event.type === "PushEvent"
        );

        const recentCommits: Commit[] = [];
        const seenShas = new Set<string>(); // Track unique commits

        for (const event of pushEvents) {
          if (recentCommits.length >= 4) break;

          const [owner, repo] = event.repo.name.split("/");

          // If no commits in payload, fetch from repo directly
          if (!event.payload.commits || event.payload.commits.length === 0) {
            try {
              // Fetch latest commits from the repository
              const repoCommitsRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
                { headers }
              );

              if (!repoCommitsRes.ok) {
                continue;
              }

              const repoCommits = await repoCommitsRes.json();
              if (repoCommits.length === 0) continue;

              const latestCommit = repoCommits[0];

              // Skip if we've already seen this commit
              if (seenShas.has(latestCommit.sha)) continue;
              seenShas.add(latestCommit.sha);

              // Fetch full commit details to get stats
              const fullCommitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${latestCommit.sha}`,
                { headers }
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

          // Process ALL commits in this push event, not just the first one
          for (const commit of commits) {
            if (recentCommits.length >= 4) break;

            // Skip if we've already seen this commit
            if (seenShas.has(commit.sha)) continue;
            seenShas.add(commit.sha);

            try {
              const commitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`,
                { headers }
              );

              if (!commitRes.ok) {
                console.error(
                  `Failed to fetch commit details for ${commit.sha.substring(
                    0,
                    7
                  )} (status ${commitRes.status})`
                );

                // Fallback: use basic commit info without stats
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
              console.error(
                `Error processing commit ${commit.sha.substring(0, 7)}:`,
                err
              );
              // Still add the commit even if we can't get stats
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
          fetchCommitsForAccount(accounts.main.username, accounts.main.token),
          fetchCommitsForAccount(
            accounts.student.username,
            accounts.student.token
          ),
        ]);
        setMainCommits(main);
        setStudentCommits(student);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCommits();

    // Refresh commits every 5 minutes
    const interval = setInterval(fetchAllCommits, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-border rounded-lg bg-card/50 p-4 h-full flex flex-col overflow-hidden">
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
          <GitCommit className="w-4 h-4 text-primary" />
          Recent Commits
        </h3>
        <a
          href={`https://github.com/${accounts.main.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          [info]
        </a>
      </div>

      {/* Tab Switcher - Left aligned with horizontal underline */}
      <div className="flex items-center gap-1 text-xs mb-3 pb-2 border-b border-border flex-shrink-0">
        <button
          onClick={() => setActiveTab("main")}
          className={`px-3 py-1 transition-colors relative ${
            activeTab === "main"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Main
          {activeTab === "main" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
          )}
        </button>
        <span className="text-muted-foreground">/</span>
        <button
          onClick={() => setActiveTab("student")}
          className={`px-3 py-1 transition-colors relative ${
            activeTab === "student"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Student
          {activeTab === "student" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"></div>
          )}
        </button>
      </div>

      {/* Commits List - Scrollable */}
      <div className="flex-1 overflow-y-scroll pr-2 custom-scrollbar min-h-0">
        <div className="space-y-2.5">
          {loading ? (
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-3 bg-border rounded w-3/4 mb-1"></div>
                  <div className="h-2 bg-border rounded w-1/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {(activeTab === "main" ? mainCommits : studentCommits).length >
              0 ? (
                (activeTab === "main" ? mainCommits : studentCommits).map(
                  (commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="border border-border/50 rounded-md p-3 hover:border-primary/50 hover:bg-card/80 transition-all">
                        {/* Commit Message & Repo */}
                        <div className="flex items-start gap-2 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-primary/80 mb-0.5">
                              {commit.repo.split("/")[1]}
                            </p>
                            <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {commit.message}
                            </p>
                          </div>
                        </div>

                        {/* Stats & SHA */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
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
                          <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </a>
                  )
                )
              ) : (
                <p className="text-xs text-muted-foreground py-2">
                  No recent commits
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentCommits;
