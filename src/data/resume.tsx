import { Icons } from "@/components/icons";

export const DATA = {
  name: "Kshitij Kumar",
  initials: "KK",
  url: "https://kshitij-kumar.vercel.app",
  summary: "Full-Stack Software Engineer specializing in <span class='text-blue-400'>TypeScript</span>, <span class='text-green-400'>Python</span>, and <span class='text-orange-400'>Java</span> development. Expert in building scalable <span class='text-purple-400'>Distributed Systems</span> and cutting-edge <span class='text-pink-400'>Agentic AI</span> solutions. Proficient in modern <span class='text-cyan-400'>databases</span> including PostgreSQL, MongoDB, and cloud architectures. Passionate about engineering excellence, delivering high-performance, fault-tolerant applications with rigorous code quality and low-latency optimizations.",
  avatarUrl: "/avatar.png",
  skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL", "Spring Boot", "FastAPI", "Spring Cloud", "Node.js", "Apache Kafka", "RabbitMQ", "Flink", "Hibernate", "LangGraph", "LlamaIndex", "Agentic Workflows", "PgVector", "RAG Pipelines", "React", "Next.js", "Angular", "HTML", "CSS", "PostgreSQL", "MongoDB", "Redis", "Oracle", "MySQL", "Snowflake", "Elasticsearch", "AWS", "Docker", "Kubernetes", "Airflow", "Git", "Apache Tomcat", "NginX", "Maven", "Prometheus", "Grafana"],
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "#projects", icon: Icons.code, label: "Projects" },
    { href: "#about", icon: Icons.user, label: "About" },
    { href: "#contact", icon: Icons.mail, label: "Contact" },
  ],
  contact: {
    email: "kshitijkumar3@gmail.com",
    tel: "+1-716-903-5420",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/kshitij", icon: Icons.github },
      LinkedIn: { name: "LinkedIn", url: "https://linkedin.com/in/kshitij", icon: Icons.linkedin },
      X: { name: "X (Twitter)", url: "https://twitter.com/kshitij", icon: Icons.twitter },
      email: { name: "Send Email", url: "mailto:kshitijkumar3@gmail.com", icon: Icons.mail },
    },
  },
  work: [
    {
      company: "Wipro Ltd.",
      href: "https://www.wipro.com/",
      badges: ["Java", "Spring Boot", "Apache Kafka"],
      location: "Bangalore, India",
      title: "Software Engineer",
      logoUrl: "/wipro-logo.png",
      start: "Aug 2021",
      end: "Aug 2024",
      description: "Engineered a migration pipeline in Java, Spring Boot, leveraging Debezium for CDC and Apache Kafka to stream updates from sources (Oracle Redo Logs, MySQL Binlogs, PostgreSQL WALs) to diverse targets (PostgreSQL, MSSQL, Snowflake, BigQuery, Redshift). Implemented Dead Letter Queues to isolate and replay less than 0.5% of failed events and drifted data, preventing pipeline blockage during complex schema conversions. Architected a real-time validation software utilizing LSN-based watermarking to monitor Eventual Consistency and Replication Lag, ensuring 99.999% data integrity across cross-vendor ecosystems. Spearheaded the transition to Microservices, implementing an API Gateway with granular Token Bucket rate limiting policies to prevent Noisy Neighbor issues and DDoS attacks. Optimized the Data Validation module by combining queries via Apache Drill with CDC stream analysis, verifying records across 10+ database dialects and reducing validation time by ~31%. Partnered with a Principal Architect to develop a predictive DB Selection Framework from scratch using Python and FastAPI; the tool analyzed I/O patterns and storage growth to identify optimal migration targets, projecting cloud infrastructure savings of ~25%. Secured stakeholder interest by demonstrating this framework to 10+ potential clients including ANZ Bank, Mazda, Bank of America, Charles Schwab and Ford. Wrote clean, maintainable, and testable code following CI/CD best practices using Git and Maven while mentoring and conducting code reviews for a team of 2 junior developers.",
    },
  ],
  projects: [
    {
      title: "K-Docs: A Google Docs Replica",
      href: "https://k-docs-demo.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description: "Implemented a real-time collaborative editor replicating Google Docs. Used Yjs (CRDTs) and WebSockets to enable conflict-free concurrent editing, ensuring eventual consistency and sub-100ms latency for multiple users without central locking. Designed a secure document storage layer using PostgreSQL and Node.js, implementing granular Role-Based Access Control (RBAC) within a containerized Docker environment hosted on AWS.",
      technologies: ["TypeScript", "Docker", "React", "PostgreSQL", "AWS", "WebSocket", "Yjs", "CRDTs"],
      links: [
        { type: "Website", href: "https://k-docs-demo.vercel.app", icon: Icons.globe },
        { type: "Source", href: "https://github.com/kshitij/k-docs", icon: Icons.github },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Code Reviewer",
      href: "https://ai-code-reviewer.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description: "Engineered an event-driven AI agent that consumes GitHub Webhooks via Apache Kafka to scale to 500+ concurrent PRs, utilizing Google Gemini to provide automated Quality Scores (0-100), Security audits, and Code Smell detection directly on Pull Requests. This reduces manual review cycles by 60%.",
      technologies: ["TypeScript", "Python", "FastAPI", "Apache Kafka", "Next.js", "Gemini API", "LLM", "MySQL", "GitHub Webhooks"],
      links: [
        { type: "Website", href: "https://ai-code-reviewer.vercel.app", icon: Icons.globe },
        { type: "Source", href: "https://github.com/kshitij/ai-code-reviewer", icon: Icons.github },
      ],
      image: "",
      video: "",
    },
    {
      title: "Vibe Matcher",
      href: "https://vibe-matcher.vercel.app",
      dates: "2022 - 2023",
      active: true,
      description: "Developed a fault-tolerant microservices ecosystem using Spring Cloud and RabbitMQ for asynchronous messaging, integrating Hystrix Circuit Breakers and Spring Security to ensure high availability and secure data access across distributed services.",
      technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "PostgreSQL", "RabbitMQ", "Spring Cloud", "Hystrix", "Microservices"],
      links: [
        { type: "Website", href: "https://vibe-matcher.vercel.app", icon: Icons.globe },
        { type: "Source", href: "https://github.com/kshitij/vibe-matcher", icon: Icons.github },
      ],
      image: "",
      video: "",
    },
  ],
};