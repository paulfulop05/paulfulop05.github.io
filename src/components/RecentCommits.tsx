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

        // Add token if available
        if (token) {
          headers["Authorization"] = `token ${token}`;
        }

        // Fetch user's recent events
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events/public?per_page=100`,
          { headers }
        );
        const events = await eventsRes.json();

        // Filter push events and extract commits
        const pushEvents = events.filter(
          (event: any) => event.type === "PushEvent"
        );

        const recentCommits: Commit[] = [];

        for (const event of pushEvents.slice(0, 3)) {
          const commits = event.payload.commits || [];
          for (const commit of commits.slice(0, 1)) {
            // Take first commit from each push
            if (recentCommits.length >= 2) break;

            // Fetch commit details for additions/deletions
            const [owner, repo] = event.repo.name.split("/");
            try {
              const commitRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits/${commit.sha}`,
                { headers }
              );
              const commitData = await commitRes.json();

              recentCommits.push({
                sha: commit.sha.substring(0, 7),
                message: commit.message.split("\n")[0], // First line only
                repo: event.repo.name,
                url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                additions: commitData.stats?.additions || 0,
                deletions: commitData.stats?.deletions || 0,
                date: event.created_at,
              });
            } catch (err) {
              // If we can't fetch commit details, skip it
              continue;
            }
          }
          if (recentCommits.length >= 2) break;
        }

        return recentCommits;
      } catch (error) {
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
    <div className="border border-border rounded-lg bg-card/50 p-4 h-full">
      <div className="flex items-center justify-between mb-4">
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

      {/* Commits List */}
      <div className="space-y-6">
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
            {/* Main Account Section - Always visible */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-primary rounded"></div>
                <p className="text-xs font-semibold text-primary">
                  Main Account (@{accounts.main.username})
                </p>
              </div>
              <div className="space-y-2">
                {mainCommits.length > 0 ? (
                  mainCommits.map((commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group hover:opacity-80 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1">
                          <span className="font-medium">
                            {commit.repo.split("/")[1]}:
                          </span>{" "}
                          {commit.message}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span className="text-green-400">
                          +{commit.additions}
                        </span>
                        <span className="text-red-400">
                          -{commit.deletions}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground py-2">
                    No recent commits
                  </p>
                )}
              </div>
            </div>

            {/* Student Account Section - Always visible */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-3 bg-primary rounded"></div>
                <p className="text-xs font-semibold text-primary">
                  Student Account (@{accounts.student.username})
                </p>
              </div>
              <div className="space-y-2">
                {studentCommits.length > 0 ? (
                  studentCommits.map((commit, index) => (
                    <a
                      key={index}
                      href={commit.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group hover:opacity-80 transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-xs text-foreground group-hover:text-primary transition-colors line-clamp-1 flex-1">
                          <span className="font-medium">
                            {commit.repo.split("/")[1]}:
                          </span>{" "}
                          {commit.message}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                        <span className="text-green-400">
                          +{commit.additions}
                        </span>
                        <span className="text-red-400">
                          -{commit.deletions}
                        </span>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="text-xs text-muted-foreground py-2">
                    No recent commits
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecentCommits;
