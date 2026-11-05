import { Badge } from "../ui/Badge"
import { ExternalLink, Sparkles as Github, Terminal, Database, ShieldCheck, Zap } from "lucide-react"

export interface SideProject {
  title: string
  subtitle: string
  tags: string[]
  description: string
  highlights: string[]
  githubUrl: string
  category: "distributed" | "ai-llm" | "real-time" | "systems"
}

const sideProjects: SideProject[] = [
  {
    title: "OWASP Nest Security Fixes",
    subtitle: "Open-Source Security & CI/CD Bug Fixes",
    tags: ["Open Source", "CI/CD", "GitHub Actions", "ZAP Scanner"],
    description: "Authored 3 merged pull requests to OWASP Nest addressing ZAP security scan failures and rewriting search UX flow.",
    highlights: ["Hacktoberfest 2025 Supercontributor", "Maintainer-reviewed production fixes"],
    githubUrl: "https://github.com/nios-x",
    category: "systems"
  },
  {
    title: "TTREX Tokenized Real Estate",
    subtitle: "Innovate-A-Thon 3.0 Finalist (BIT Mesra)",
    tags: ["Solidity", "ERC-721", "ERC-1155", "React Native"],
    description: "Decentralized real estate fractionalization exchange utilizing dual-token standards for liquidity and governance.",
    highlights: ["BIT Mesra Finalist", "Smart Contract Audit-ready structure"],
    githubUrl: "https://github.com/nios-x",
    category: "distributed"
  },
  {
    title: "Cnear Semantic Search Engine",
    subtitle: "pgvector HNSW Sub-200ms Vector Engine",
    tags: ["PostgreSQL", "pgvector", "Python", "Sentence Transformers"],
    description: "Vector search subsystem processing 50K+ embeddings with 3x relevance boost over traditional PostgreSQL text indexes.",
    highlights: ["Sub-200ms nearest neighbor queries", "HNSW indexing"],
    githubUrl: "https://github.com/nios-x",
    category: "ai-llm"
  },
  {
    title: "Webspace POS Sync Engine",
    subtitle: "Real-Time Multi-Tenant Inventory Sync",
    tags: ["WebSockets", "Node.js", "Express", "JWT/RBAC"],
    description: "Bidirectional WebSocket sync engine serving 500+ active daily users, eliminating stock mismatch across physical POS & web store.",
    highlights: ["Reduced stock discrepancies by 40%", "15+ REST API RBAC endpoints"],
    githubUrl: "https://github.com/nios-x",
    category: "real-time"
  }
]

export function SideProjectsGrid({ filterCategory }: { filterCategory: string }) {
  const filtered = sideProjects.filter(p => filterCategory === "all" || p.category === filterCategory)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filtered.map((proj, idx) => (
        <div
          key={idx}
          className="p-5 rounded-ui bg-card border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-heading font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground">{proj.subtitle}</p>
              </div>
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-sm bg-muted/50 text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                title="View Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-body">
              {proj.description}
            </p>

            <ul className="space-y-1.5 mb-4 font-mono text-[11px] text-accent">
              {proj.highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
            {proj.tags.map((t, i) => (
              <Badge key={i} variant="outline" className="text-[10px] font-mono py-0.5 border-border/60">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
