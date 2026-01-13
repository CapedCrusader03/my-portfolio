import { Icons } from "@/components/icons";

export const DATA = {
  name: "Kshitij Kumar",
  initials: "KK",
  url: "https://kshitij-kumar.vercel.app",
  summary: "Software Engineer & MS CS Student @ University at Buffalo<br><br>Building scalable <span class='text-purple-400'>Distributed Systems</span> and <span class='text-pink-400'>Agentic AI</span> solutions with <span class='text-blue-400'>TypeScript</span>, <span class='text-green-400'>Python</span>, and <span class='text-orange-400'>Java</span>. With <span class='text-cyan-400'>3 years</span> of experience in <span class='text-red-400'>mission-critical</span> backend engineering, I focus on <span class='text-indigo-400'>database internals</span>, <span class='text-emerald-400'>fault tolerance</span>, and <span class='text-violet-400'>low-latency architectures</span>.",
  avatarUrl: "/avatar.png",
  skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "SQL", "Spring Boot", "FastAPI", "Spring Cloud", "Node.js", "Apache Kafka", "RabbitMQ", "Flink", "Hibernate", "LangGraph", "LlamaIndex", "Agentic Workflows", "PgVector", "RAG Pipelines", "React", "Next.js", "Angular", "HTML", "CSS", "PostgreSQL", "MongoDB", "Redis", "Oracle", "MySQL", "Snowflake", "Elasticsearch", "AWS", "Docker", "Kubernetes", "Airflow", "Git", "Apache Tomcat", "NginX", "Maven", "Prometheus", "Grafana"],
  navbar: [
    { href: "/", icon: Icons.home, label: "Home" },
    { href: "#projects", icon: Icons.code, label: "Projects" },
    { href: "#experience", icon: Icons.briefcase, label: "Experience" },
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
      description: "<ul class='list-disc list-inside space-y-1 text-sm leading-relaxed'><li>Engineered a migration pipeline in <span class='text-orange-400'>Java</span>, <span class='text-green-400'>Spring Boot</span>, leveraging <span class='text-blue-400'>Debezium</span> for CDC and <span class='text-purple-400'>Apache Kafka</span> to stream updates from sources (Oracle Redo Logs, MySQL Binlogs, PostgreSQL WALs) to diverse targets (PostgreSQL, MSSQL, Snowflake, BigQuery, Redshift)</li><li>Implemented <span class='text-cyan-400'>Dead Letter Queues</span> to isolate and replay less than <span class='text-red-400'>0.5%</span> of failed events and drifted data, preventing pipeline blockage during complex schema conversions</li><li>Architected a real-time validation software utilizing <span class='text-indigo-400'>LSN-based watermarking</span> to monitor Eventual Consistency and Replication Lag, ensuring <span class='text-emerald-400'>99.999%</span> data integrity across cross-vendor ecosystems</li><li>Spearheaded the transition to <span class='text-pink-400'>Microservices</span>, implementing an API Gateway with granular <span class='text-violet-400'>Token Bucket rate limiting</span> policies to prevent Noisy Neighbor issues and DDoS attacks</li><li>Optimized the Data Validation module by combining queries via <span class='text-blue-400'>Apache Drill</span> with CDC stream analysis, verifying records across <span class='text-cyan-400'>10+ database dialects</span> and reducing validation time by <span class='text-green-400'>~31%</span></li><li>Partnered with a Principal Architect to develop a predictive DB Selection Framework from scratch using <span class='text-green-400'>Python</span> and <span class='text-blue-400'>FastAPI</span>; the tool analyzed I/O patterns and storage growth to identify optimal migration targets, projecting cloud infrastructure savings of <span class='text-purple-400'>~25%</span></li><li>Secured stakeholder interest by demonstrating this framework to <span class='text-cyan-400'>10+ potential clients</span> including <span class='text-indigo-400'>ANZ Bank</span>, <span class='text-emerald-400'>Mazda</span>, <span class='text-red-400'>Bank of America</span>, <span class='text-blue-400'>Charles Schwab</span> and <span class='text-orange-400'>Ford</span></li><li>Wrote clean, maintainable, and testable code following <span class='text-violet-400'>CI/CD</span> best practices using <span class='text-red-400'>Git</span> and <span class='text-orange-400'>Maven</span> while mentoring and conducting code reviews for a team of 2 junior developers</li></ul>",
    },
  ],
  projects: [
    {
      title: "K-Docs: A Google Docs Replica",
      href: "https://k-docs-demo.vercel.app",
      dates: "2023 - 2024",
      active: true,
      description: "<ul class='list-disc list-inside space-y-1 text-sm leading-relaxed'><li>Implemented a real-time collaborative editor replicating Google Docs</li><li>Used Yjs (CRDTs) and WebSockets to enable conflict-free concurrent editing, ensuring eventual consistency and sub-100ms latency for multiple users without central locking</li><li>Designed a secure document storage layer using PostgreSQL and Node.js, implementing granular Role-Based Access Control (RBAC) within a containerized Docker environment hosted on AWS</li></ul>",
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
      description: "<ul class='list-disc list-inside space-y-1 text-sm leading-relaxed'><li>Engineered an event-driven AI agent that consumes GitHub Webhooks via Apache Kafka to scale to 500+ concurrent PRs, utilizing Google Gemini to provide automated Quality Scores (0-100), Security audits, and Code Smell detection directly on Pull Requests</li><li>This reduces manual review cycles by 60%</li></ul>",
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
      description: "<ul class='list-disc list-inside space-y-1 text-sm leading-relaxed'><li>Developed a fault-tolerant microservices ecosystem using Spring Cloud and RabbitMQ for asynchronous messaging, integrating Hystrix Circuit Breakers and Spring Security to ensure high availability and secure data access across distributed services</li></ul>",
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