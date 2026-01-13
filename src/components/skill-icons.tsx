import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGit,
} from "react-icons/si";

// Custom SVG components for technologies not available in react-icons
const SnowflakeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 0L9.5 4.5L12 9L14.5 4.5L12 0ZM12 15L9.5 19.5L12 24L14.5 19.5L12 15ZM4.5 9L0 12L4.5 15L9 12L4.5 9ZM19.5 9L15 12L19.5 15L24 12L19.5 9ZM7.5 7.5L12 12L16.5 7.5L12 3L7.5 7.5ZM7.5 16.5L12 12L16.5 16.5L12 21L7.5 16.5Z"/>
  </svg>
);

const LangGraphIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18.5 9 12 12.5 5.5 9 12 4.5zM4 9.5l8 4v7l-8-4V9.5zm16 0v7l-8 4v-7l8-4z"/>
  </svg>
);

const LlamaIndexIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const PgVectorIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L18.5 9 12 12.5 5.5 9 12 4.5zM4 9.5l8 4v7l-8-4V9.5zm16 0v7l-8 4v-7l8-4z"/>
  </svg>
);

const RagIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 4h7v5h5v11H6V4zm2 8h8v2H8v-2zm0 4h8v2H8v-2z"/>
  </svg>
);

const AgenticIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

// Generic fallback icons
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 4.01 2 6.5v11C2 19.99 6.48 22 12 22s10-2.01 10-4.5v-11C22 4.01 17.52 2 12 2zM12 4c3.86 0 7 .93 7 2.5S15.86 9 12 9s-7-.93-7-2.5S8.14 4 12 4zm7 13.5c0 1.57-3.14 2.5-7 2.5s-7-.93-7-2.5V11c0-1.57 3.14-2.5 7-2.5s7 .93 7 2.5v6.5z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
  </svg>
);

// Skill to icon mapping with available icons and fallbacks
export const skillIcons: Record<string, { icon: React.ComponentType<any>; color: string }> = {
  // Languages
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: CodeIcon, color: "#ED8B00" },
  TypeScript: { icon: CodeIcon, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "C++": { icon: CodeIcon, color: "#00599C" },
  SQL: { icon: DatabaseIcon, color: "#336791" },

  // Frameworks & Libraries
  "Spring Boot": { icon: CodeIcon, color: "#6DB33F" },
  FastAPI: { icon: SiPython, color: "#009688" },
  "Spring Cloud": { icon: CodeIcon, color: "#6DB33F" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: CodeIcon, color: "#000000" },
  Angular: { icon: CodeIcon, color: "#DD0031" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },

  // Databases
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  MySQL: { icon: DatabaseIcon, color: "#4479A1" },
  Elasticsearch: { icon: CodeIcon, color: "#005571" },

  // Cloud & DevOps
  AWS: { icon: CloudIcon, color: "#FF9900" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Git: { icon: SiGit, color: "#F05032" },

  // Everything else uses generic icons
  "Apache Kafka": { icon: CodeIcon, color: "#000000" },
  RabbitMQ: { icon: CodeIcon, color: "#FF6600" },
  Flink: { icon: CodeIcon, color: "#E6526F" },
  Hibernate: { icon: CodeIcon, color: "#59666C" },
  LangGraph: { icon: CodeIcon, color: "#FF6B6B" },
  LlamaIndex: { icon: CodeIcon, color: "#FF6B6B" },
  "Agentic Workflows": { icon: CodeIcon, color: "#8B5CF6" },
  PgVector: { icon: DatabaseIcon, color: "#336791" },
  "RAG Pipelines": { icon: CodeIcon, color: "#10B981" },
  Oracle: { icon: DatabaseIcon, color: "#F80000" },
  Snowflake: { icon: DatabaseIcon, color: "#29B5E8" },
  Airflow: { icon: CloudIcon, color: "#017CEE" },
  "Apache Tomcat": { icon: CodeIcon, color: "#D22128" },
  NginX: { icon: CodeIcon, color: "#009639" },
  Maven: { icon: CodeIcon, color: "#C71A36" },
  Prometheus: { icon: CloudIcon, color: "#E6522C" },
  Grafana: { icon: CloudIcon, color: "#F46800" },
};