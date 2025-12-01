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

  console.log("RecentCommits - Token check:", {
    mainTokenExists: !!accounts.main.token,
    studentTokenExists: !!accounts.student.token,
    mainTokenLength: accounts.main.token?.length || 0,
    studentTokenLength: accounts.student.token?.length || 0,
  });

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

        console.log(`Fetching events for ${username}...`);

        // Fetch user's recent events (use /events instead of /events/public to include private repos)
        const eventsRes = await fetch(
          `https://api.github.com/users/${username}/events?per_page=100`,
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
        console.log(`Found ${events.length} total events for ${username}`);

        // Filter push events and extract commits
        const pushEvents = events.filter(
          (event: any) => event.type === "PushEvent"
        );

        console.log(`Found ${pushEvents.length} push events for ${username}`);

        // Log first event to debug
        if (pushEvents.length > 0) {
          console.log("First push event sample:", {
            repo: pushEvents[0].repo.name,
            commits: pushEvents[0].payload.commits?.length || 0,
            public: pushEvents[0].public,
          });
        }

        const recentCommits: Commit[] = [];

        for (const event of pushEvents) {
          if (recentCommits.length >= 2) break;

          const [owner, repo] = event.repo.name.split("/");

          // If no commits in payload, fetch from repo directly
          if (!event.payload.commits || event.payload.commits.length === 0) {
            console.log(
              `No commits in payload for ${event.repo.name}, fetching from repo...`
            );

            try {
              // Fetch latest commits from the repository
              const repoCommitsRes = await fetch(
                `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
                { headers }
              );

              if (!repoCommitsRes.ok) {
                console.log(
                  `Cannot access repo ${event.repo.name} (status ${repoCommitsRes.status})`
                );
                continue;
              }

              const repoCommits = await repoCommitsRes.json();
              if (repoCommits.length === 0) continue;

              const latestCommit = repoCommits[0];
              console.log(
                `Got latest commit from ${
                  event.repo.name
                }: ${latestCommit.sha.substring(0, 7)}`
              );

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
          console.log(
            `Event from ${event.repo.name} has ${commits.length} commits in payload (public: ${event.public})`
          );

          // Get the first commit from this push event
          const commit = commits[0];

          console.log(
            `Processing commit ${commit.sha.substring(0, 7)} from ${
              event.repo.name
            } (owner: ${owner}, repo: ${repo})`
          );

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
                )} (status ${commitRes.status}). Trying with basic info...`
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
            console.log(
              `Successfully fetched stats for ${commit.sha.substring(0, 7)}`
            );

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

        console.log(
          `Returning ${recentCommits.length} commits for ${username}`
        );
        return recentCommits;
      } catch (error) {
        console.error(`Error fetching commits for ${username}:`, error);
        return [];
      }
    };

    const fetchAllCommits = async () => {
      setLoading(true);
      try {
        console.log("Starting to fetch commits for both accounts...");
        const [main, student] = await Promise.all([
          fetchCommitsForAccount(accounts.main.username, accounts.main.token),
          fetchCommitsForAccount(
            accounts.student.username,
            accounts.student.token
          ),
        ]);
        console.log(
          "Fetch complete. Main commits:",
          main.length,
          "Student commits:",
          student.length
        );
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
