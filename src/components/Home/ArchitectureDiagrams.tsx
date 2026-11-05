import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Cpu, Terminal, Shield, Zap, ExternalLink, GitBranch, Server, Layers } from "lucide-react"

interface SystemProject {
  id: string
  name: string
  tagline: string
  period: string
  github: string
  tags: string[]
  stats: { label: string; val: string }[]
  steps: { title: string; desc: string; type: "client" | "gateway" | "queue" | "worker" | "db" }[]
  highlights: string[]
}

const projects: SystemProject[] = [
  {
    id: "rwaft",
    name: "Rwaft",
    tagline: "Distributed Deployment Platform & Agentic AI App Builder",
    period: "Aug 2026 – Present",
    github: "https://github.com/nios-x/rwaft",
    tags: ["Bun", "Express", "Redis BLMOVE", "Docker", "SSE", "Gemini Tool Calling"],
    stats: [
      { label: "Reliability", val: "99.9% queue uptime" },
      { label: "AI Iterations", val: "Up to 6 self-repairs" },
      { label: "Build Logs", val: "SSE + PubSub multiplexing" },
    ],
    steps: [
      { title: "1. Client & Agentic Trigger", desc: "User pushes Git repo URL or natural language prompt via Next.js dashboard", type: "client" },
      { title: "2. API Gateway & Sandbox", desc: "Express on Bun routes job with rate-limiting to path-traversal-safe sandbox", type: "gateway" },
      { title: "3. Redis BLMOVE Queue", desc: "Reliable dual-list queueing; automatic orphan requeue on SIGTERM worker crash", type: "queue" },
      { title: "4. Build Worker & LLM Repair", desc: "Isolated Docker process compiles assets. On failure, Gemini tool-calling self-fixes errors", type: "worker" },
      { title: "5. CDN & SSE Stream", desc: "Assets pushed to storage; live build terminal logs streamed to user via SSE & Redis PubSub", type: "db" },
    ],
    highlights: [
      "Fault-tolerant Redis BLMOVE reliable queues with in-flight list tracking and graceful restart requeue",
      "Agentic LLM engine executing tool calls in path-traversal-safe sandbox, classifying compiler errors & self-repairing up to 6 cycles",
      "Multiplexed Redis Pub/Sub subscriber broadcasting real-time logs over Server-Sent Events",
    ],
  },
  {
    id: "beatcode",
    name: "BeatCode",
    tagline: "High-Throughput Remote Code Execution Platform",
    period: "Jul 2026 – Present",
    github: "https://github.com/nios-x/beatcode",
    tags: ["TypeScript", "React", "Express", "Redis Queues", "PostgreSQL", "Prisma"],
    stats: [
      { label: "Isolation", val: "5s SIGKILL timeout" },
      { label: "Latency", val: "<120ms queue dispatch" },
      { label: "Protocol", val: "1-way SSE streaming" },
    ],
    steps: [
      { title: "1. Code Submission", desc: "Developer submits JS/Python snippet; JWT validated & code screened against blocklist", type: "client" },
      { title: "2. Ingestion API", desc: "Express API persists submission in PostgreSQL & enqueues job to Redis execution queue", type: "gateway" },
      { title: "3. Redis Task Broker", desc: "Decouples web server from CPU-heavy code runtime processes", type: "queue" },
      { title: "4. Sandbox Worker", desc: "Decoupled isolate worker runs code with 5-second hard SIGKILL wall limits", type: "worker" },
      { title: "5. Real-Time Result Feed", desc: "Stdout/stderr streamed back via Redis Pub/Sub & SSE directly to web console", type: "db" },
    ],
    highlights: [
      "Decoupled asynchronous worker model ensuring heavy computational workloads never block HTTP response threads",
      "Strict security boundaries with payload blocklist screening & resource-constrained execution runtimes",
      "Event-driven architecture using Server-Sent Events for lightweight single-direction output streams",
    ],
  },
  {
    id: "dinka",
    name: "Dinka",
    tagline: "Open-Source Real-Time Social Platform & Peer-to-Peer Calls",
    period: "Jul 2025 – Present",
    github: "https://github.com/nios-x/dinka",
    tags: ["Next.js", "PostgreSQL", "Prisma", "WebSockets", "WebRTC"],
    stats: [
      { label: "Community", val: "19 GitHub Forks" },
      { label: "Deployments", val: "100+ Vercel Instances" },
      { label: "Voice/Video", val: "Low-latency WebRTC" },
    ],
    steps: [
      { title: "1. Client Connection", desc: "Next.js frontend connects via WebSocket hub & establishes WebRTC peer signaling", type: "client" },
      { title: "2. Real-Time Gateway", desc: "WebSocket server handles live presence, typing status, and SDP handshake exchanges", type: "gateway" },
      { title: "3. Direct P2P Stream", desc: "WebRTC peer connection streams audio/video media streams directly between users", type: "worker" },
      { title: "4. Database Persistence", desc: "PostgreSQL & Prisma handle infinite social feed indexing, relationships & security", type: "db" },
    ],
    highlights: [
      "Open-source repository with 19 community forks and 100+ production deployments across Vercel",
      "Sub-second WebRTC signaling for crisp video/audio conferencing integrated with real-time WebSocket messaging",
      "Infinite timeline feed query optimization with Prisma ORM and relational cursor pagination",
    ],
  },
]

export function ArchitectureDiagrams() {
  const [activeTab, setActiveTab] = useState<string>("rwaft")
  const currentProj = projects.find((p) => p.id === activeTab) || projects[0]

  return (
    <div className="space-y-6">
      {/* Project selector tab buttons */}
      <div className="flex flex-wrap gap-3">
        {projects.map((proj) => {
          const isActive = proj.id === activeTab
          return (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-ui text-sm font-medium transition-all cursor-pointer border ${
                isActive
                  ? "bg-accent text-accent-foreground border-accent shadow-sm"
                  : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>{proj.name}</span>
              <Badge variant={isActive ? "default" : "outline"} className="text-xs">
                {proj.period}
              </Badge>
            </button>
          )
        })}
      </div>

      <Card className="border-border bg-card/60 backdrop-blur">
        <CardHeader className="border-b border-border/60 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <CardTitle className="text-2xl font-heading text-foreground">{currentProj.name}</CardTitle>
                <a
                  href={currentProj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  GitHub Repository
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <CardDescription className="text-muted-foreground mt-1 text-sm font-body">
                {currentProj.tagline}
              </CardDescription>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentProj.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-mono text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentProj.stats.map((st, i) => (
              <div key={i} className="p-3 rounded-ui bg-background/50 border border-border">
                <div className="text-xs text-muted-foreground uppercase tracking-wider font-mono">{st.label}</div>
                <div className="text-base font-semibold text-accent font-heading mt-0.5">{st.val}</div>
              </div>
            ))}
          </div>

          {/* Interactive Topology Sequence */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" /> Architecture Flow & Pipeline Sequence
            </h4>
            <div className="space-y-2">
              {currentProj.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-ui bg-background/80 border border-border/80 hover:border-accent/50 transition-colors flex flex-col md:flex-row md:items-center gap-3 group"
                >
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <Badge variant="outline" className="text-xs font-mono uppercase">
                      {step.type}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold font-heading text-foreground group-hover:text-accent transition-colors">
                      {step.title.split(". ")[1] || step.title}
                    </span>
                    <p className="text-xs text-muted-foreground font-body mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deep-Dive Technical Highlights */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" /> Key Distributed Systems Innovations
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {currentProj.highlights.map((item, idx) => (
                <li
                  key={idx}
                  className="p-3 rounded-ui bg-muted/30 border border-border/40 text-xs text-foreground font-body leading-relaxed flex items-start gap-2"
                >
                  <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
