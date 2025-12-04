export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  stars?: number;
  link: string;
  repo: string;
  image?: string;
  gif?: string;
}

export const projects: Project[] = [
  {
    id: "anubis",
    title: "Anubis",
    description:
      "Weighs the soul of incoming HTTP requests using proof-of-work to stop AI crawlers and other malicious bots. Built with Golang and advanced security algorithms.",
    tags: ["golang", "security", "anti-bot", "proof-of-work"],
    stars: 1473,
    link: "https://github.com",
    repo: "TechnoROG",
  },
  {
    id: "abacus",
    title: "Abacus",
    description:
      "A highly-scalable and stateless counting API. Simple at its core, designed from the ground up to be scalable, secure and easy to use. Built using Golang, Gin, Docker, and Redis.",
    tags: ["golang", "api", "redis", "docker"],
    stars: 234,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "realtime-chat",
    title: "RealTime Chat",
    description:
      "Production-ready WebSocket chat application with rooms, typing indicators, and message persistence. Features end-to-end encryption and rich media support.",
    tags: ["react", "websocket", "node.js", "mongodb"],
    stars: 892,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "api-shield",
    title: "API Shield",
    description:
      "Rate limiting and DDoS protection middleware for APIs with intelligent threat detection, automatic blocking, and detailed analytics dashboard.",
    tags: ["golang", "security", "rate-limiting", "middleware"],
    stars: 445,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "cloudsync",
    title: "CloudSync",
    description:
      "Cross-platform file synchronization service with conflict resolution, version history, and selective sync. Built for teams with enterprise-grade security.",
    tags: ["rust", "encryption", "distributed", "aws"],
    stars: 678,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "logstream",
    title: "LogStream",
    description:
      "Real-time log aggregation and analysis platform with powerful search, custom dashboards, and alerting. Handles millions of events per second.",
    tags: ["go", "elasticsearch", "kafka", "monitoring"],
    stars: 1234,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "authkit",
    title: "AuthKit",
    description:
      "Complete authentication solution with OAuth2, JWT, MFA, and social login support. Drop-in replacement for auth services with zero configuration.",
    tags: ["node.js", "typescript", "postgres", "redis"],
    stars: 567,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "graphql-gateway",
    title: "GraphQL Gateway",
    description:
      "High-performance GraphQL API gateway with schema stitching, caching, and automatic documentation. Scales to millions of requests per day.",
    tags: ["graphql", "apollo", "caching", "microservices"],
    stars: 789,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "taskqueue-pro",
    title: "TaskQueue Pro",
    description:
      "Distributed task queue with retry logic, priority scheduling, and dead letter handling. Perfect for background job processing at scale.",
    tags: ["python", "redis", "celery", "rabbitmq"],
    stars: 423,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "container-registry",
    title: "Container Registry",
    description:
      "Self-hosted Docker registry with garbage collection, image scanning, and webhook notifications. Enterprise-ready with RBAC and audit logs.",
    tags: ["go", "docker", "security", "kubernetes"],
    stars: 891,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "metrics-collector",
    title: "Metrics Collector",
    description:
      "Lightweight metrics collection agent for infrastructure monitoring. Supports Prometheus, InfluxDB, and custom exporters with minimal overhead.",
    tags: ["go", "monitoring", "prometheus", "grafana"],
    stars: 356,
    link: "https://github.com",
    repo: "yourusername",
  },
  {
    id: "db-migrator",
    title: "DB Migrator",
    description:
      "Database migration tool with version control, rollback support, and multi-environment management. Works with PostgreSQL, MySQL, and MongoDB.",
    tags: ["typescript", "database", "migrations", "cli"],
    stars: 512,
    link: "https://github.com",
    repo: "yourusername",
  },
];

export const getFeaturedProjects = () => projects.slice(0, 2);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
