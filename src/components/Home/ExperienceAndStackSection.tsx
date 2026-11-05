import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Briefcase, Calendar, MapPin, Sparkles as Code2, Server, Database, Cpu, Terminal, Sparkles as CheckCircle2 } from "lucide-react"

export function ExperienceAndStackSection() {
  const experiences = [
    {
      company: "Cnear",
      role: "Software Development Engineer Intern",
      period: "Jan 2026 – Mar 2026",
      location: "Remote / India",
      type: "Internship",
      highlights: [
        "Architected a distributed data ingestion pipeline processing 10K+ job listings/day from 15+ sources using Playwright & headless Chromium.",
        "Implemented RabbitMQ dead-letter queues (DLQ) with exponential-backoff retries, achieving 99.2% ingestion reliability.",
        "Built semantic search on PostgreSQL pgvector with HNSW index using sentence-transformer embeddings (<200ms nearest-neighbor queries over 50K+ vectors, 3x relevance boost over keyword search).",
        "Containerized API, workers, RabbitMQ, and PostgreSQL via Docker Compose with automated GitHub Actions CI/CD pipelines.",
      ],
      tech: ["Playwright", "RabbitMQ", "pgvector", "PostgreSQL", "Docker Compose", "GitHub Actions", "Node.js"],
    },
    {
      company: "Webspace IN",
      role: "Full Stack Developer (Part-Time)",
      period: "Dec 2024 – Mar 2025",
      location: "India",
      type: "Part-Time",
      highlights: [
        "Owned end-to-end delivery of 3 production modules: POS billing, real-time inventory sync, and client dashboards serving 500+ daily active users.",
        "Engineered WebSocket-based live synchronization between inventory and POS systems, eliminating manual reconciliation & reducing stock discrepancies by 40%.",
        "Designed 15+ REST API endpoints with JWT authentication, role-based access control (RBAC), and request schema validation shared by web and mobile clients.",
      ],
      tech: ["React", "React Native", "Node.js", "Express", "WebSockets", "JWT", "RBAC"],
    },
  ]

  const stackCategories = [
    {
      name: "Infrastructure & DevOps",
      icon: Server,
      skills: ["Docker", "Kubernetes", "GitHub Actions CI/CD", "Linux Kernel CLI", "Nginx", "Vercel", "Render", "Git"],
    },
    {
      name: "Backend & Systems Runtimes",
      icon: Cpu,
      skills: ["Node.js", "Express", "Bun", "Next.js", "React", "React Native", "Django", "C++", "TypeScript", "Go", "Solidity"],
    },
    {
      name: "Data Stores & Messaging",
      icon: Database,
      skills: ["PostgreSQL", "pgvector (HNSW)", "Redis (Queues, Pub/Sub)", "RabbitMQ (DLQ)", "Qdrant", "Neo4j", "MongoDB", "Prisma ORM"],
    },
    {
      name: "Distributed Concepts & AI",
      icon: Terminal,
      skills: ["Distributed Systems", "System Design", "REST APIs", "Event-Driven Arch", "Fault Tolerance", "WebSockets", "SSE", "LLM Tool Calling", "RAG"],
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Experience Column */}
      <div className="lg:col-span-7 space-y-6">
        <div className="flex items-center gap-2 text-xl font-heading text-foreground">
          <Briefcase className="h-5 w-5 text-accent" />
          <h2>Industry Experience & Internships</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="border-border bg-card/60 backdrop-blur hover:border-accent/40 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-lg font-heading text-foreground flex items-center gap-2">
                      <span>{exp.role}</span>
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold text-sm mt-0.5">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="text-xs md:text-sm text-foreground/90 font-body flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="outline" className="text-[11px] font-mono bg-background/50">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tech Stack Matrix Column */}
      <div className="lg:col-span-5 space-y-6">
        <div className="flex items-center gap-2 text-xl font-heading text-foreground">
          <Code2 className="h-5 w-5 text-primary" />
          <h2>Technical Skills Matrix</h2>
        </div>

        <div className="space-y-4">
          {stackCategories.map((cat, idx) => {
            const IconComp = cat.icon
            return (
              <Card key={idx} className="border-border bg-card/60 backdrop-blur">
                <CardHeader className="py-3 px-4 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <IconComp className="h-4 w-4 text-accent" />
                    <h3 className="text-sm font-heading text-foreground font-semibold">{cat.name}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((sk) => (
                      <span
                        key={sk}
                        className="px-2.5 py-1 rounded-ui text-xs font-mono bg-background border border-border text-foreground hover:border-accent/50 transition-colors"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
