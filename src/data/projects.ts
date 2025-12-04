import { TechType } from "@/lib/techColors";

export interface ProjectTag {
  name: string;
  type: TechType;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: ProjectTag[];
  link: string;
  previewImage?: string;
  previewGif?: string;
}

export const projects: Project[] = [
  {
    id: "anubis",
    title: "Anubis",
    description:
      "Weighs the soul of incoming HTTP requests using proof-of-work to stop AI crawlers and other malicious bots. Built with Golang and advanced security algorithms.",
    tags: [
      { name: "Golang", type: "language" },
      { name: "Security", type: "concept" },
      { name: "Anti-bot", type: "concept" },
      { name: "Proof-of-work", type: "concept" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "abacus",
    title: "Abacus",
    description:
      "A highly-scalable and stateless counting API. Simple at its core, designed from the ground up to be scalable, secure and easy to use. Built using Golang, Gin, Docker, and Redis.",
    tags: [
      { name: "Golang", type: "language" },
      { name: "API", type: "concept" },
      { name: "Redis", type: "tool" },
      { name: "Docker", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "realtime-chat",
    title: "RealTime Chat",
    description:
      "Production-ready WebSocket chat application with rooms, typing indicators, and message persistence. Features end-to-end encryption and rich media support.",
    tags: [
      { name: "React", type: "framework" },
      { name: "WebSocket", type: "concept" },
      { name: "Node.js", type: "framework" },
      { name: "MongoDB", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "api-shield",
    title: "API Shield",
    description:
      "Rate limiting and DDoS protection middleware for APIs with intelligent threat detection, automatic blocking, and detailed analytics dashboard.",
    tags: [
      { name: "Golang", type: "language" },
      { name: "Security", type: "concept" },
      { name: "Rate-limiting", type: "concept" },
      { name: "Middleware", type: "concept" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "cloudsync",
    title: "CloudSync",
    description:
      "Cross-platform file synchronization service with conflict resolution, version history, and selective sync. Built for teams with enterprise-grade security.",
    tags: [
      { name: "Rust", type: "language" },
      { name: "Encryption", type: "concept" },
      { name: "Distributed", type: "concept" },
      { name: "AWS", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "logstream",
    title: "LogStream",
    description:
      "Real-time log aggregation and analysis platform with powerful search, custom dashboards, and alerting. Handles millions of events per second.",
    tags: [
      { name: "Go", type: "language" },
      { name: "Elasticsearch", type: "tool" },
      { name: "Kafka", type: "tool" },
      { name: "Monitoring", type: "concept" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "authkit",
    title: "AuthKit",
    description:
      "Complete authentication solution with OAuth2, JWT, MFA, and social login support. Drop-in replacement for auth services with zero configuration.",
    tags: [
      { name: "Node.js", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "PostgreSQL", type: "tool" },
      { name: "Redis", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "graphql-gateway",
    title: "GraphQL Gateway",
    description:
      "High-performance GraphQL API gateway with schema stitching, caching, and automatic documentation. Scales to millions of requests per day.",
    tags: [
      { name: "GraphQL", type: "concept" },
      { name: "Apollo", type: "framework" },
      { name: "Caching", type: "concept" },
      { name: "Microservices", type: "concept" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "taskqueue-pro",
    title: "TaskQueue Pro",
    description:
      "Distributed task queue with retry logic, priority scheduling, and dead letter handling. Perfect for background job processing at scale.",
    tags: [
      { name: "Python", type: "language" },
      { name: "Redis", type: "tool" },
      { name: "Celery", type: "framework" },
      { name: "RabbitMQ", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "container-registry",
    title: "Container Registry",
    description:
      "Self-hosted Docker registry with garbage collection, image scanning, and webhook notifications. Enterprise-ready with RBAC and audit logs.",
    tags: [
      { name: "Go", type: "language" },
      { name: "Docker", type: "tool" },
      { name: "Security", type: "concept" },
      { name: "Kubernetes", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "metrics-collector",
    title: "Metrics Collector",
    description:
      "Lightweight metrics collection agent for infrastructure monitoring. Supports Prometheus, InfluxDB, and custom exporters with minimal overhead.",
    tags: [
      { name: "Go", type: "language" },
      { name: "Monitoring", type: "concept" },
      { name: "Prometheus", type: "tool" },
      { name: "Grafana", type: "tool" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
  {
    id: "db-migrator",
    title: "DB Migrator",
    description:
      "Database migration tool with version control, rollback support, and multi-environment management. Works with PostgreSQL, MySQL, and MongoDB.",
    tags: [
      { name: "TypeScript", type: "language" },
      { name: "Database", type: "concept" },
      { name: "Migrations", type: "concept" },
      { name: "CLI", type: "concept" },
    ],
    link: "https://github.com",
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
    previewGif: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
  },
];

export const getFeaturedProjects = () => projects.slice(0, 2);

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
