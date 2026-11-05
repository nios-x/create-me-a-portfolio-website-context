import { useState } from "react"
import { Section, Container, SectionHeader } from "../components/ui/Section"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { ProjectFilter, TechCategory } from "../components/Projects/ProjectFilter"
import { RwaftFlowDiagram, BeatCodeExecutionBenchmark } from "../components/Projects/ArchitectureDiagrams"
import { SideProjectsGrid } from "../components/Projects/SideProjectsGrid"
import { Sparkles as Github, ExternalLink, Cpu, Terminal, Zap, ShieldCheck, Sparkles as CheckCircle2, Flame, RefreshCw, GitBranch, Users, Play } from "lucide-react"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("all")
  const [activeLogTab, setActiveLogTab] = useState<"build" | "redis" | "llm">("build")

  const buildLogs = {
    build: `[2026-03-29 14:02:11] [INFO] Worker #04 initialized. Pulling isolated container context...
[2026-03-29 14:02:12] [INFO] Target repository: github.com/nios-x/rwaft-sample-app
[2026-03-29 14:02:13] [BUILD] Bun build starting... Entry: src/index.ts
[2026-03-29 14:02:14] [WARN] TS2304: Cannot find name 'ProcessEnv'. Agentic LLM auto-repair triggered.
[2026-03-29 14:02:15] [LLM-AGENT] Gemini Tool Calling: Inserted @types/node. Retrying iteration 2/6...
[2026-03-29 14:02:16] [SUCCESS] Build output static assets bundled (1.42MB).
[2026-03-29 14:02:17] [DEPLOY] Dynamic Proxy route updated. Dynamic CDN broadcast: 200 OK.`,
    redis: `[REDIS BLMOVE QUEUE] Atomically shifting payload from 'queue:pending' -> 'queue:in_flight'
Payload ID: job_99f2a014b
Command: BLMOVE queue:pending queue:in_flight LEFT RIGHT 0
Orphan Monitor Check: 0 dangling jobs re-queued after SIGTERM check.
Pub/Sub Multiplexer: 1 channel active for client stream session [usr_7708].`,
    llm: `[LLM AGENT LOOP] Initializing sandbox isolation...
Path Traversal Check: PASSED (Root locked to /tmp/rwaft/sandbox_99f2)
Compiler Error Digest: TS2322 Type 'string' is not assignable to type 'number'.
Tool Call Invoked: patch_file({ path: "src/utils.ts", diff: "- const port: number = process.env.PORT;\n+ const port: number = Number(process.env.PORT);" })
Iteration Status: SUCCESS on attempt 2/6. Zero sandbox escape detected.`
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Hero Header */}
      <Section className="pt-10 pb-8 border-b border-border/60 bg-gradient-to-b from-card/30 via-background to-background">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline" className="font-mono text-xs border-primary/40 text-primary">
                  Engineering Deep Dives
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">Updated March 2026</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-foreground mb-3">
                Architectural Breakdown & Production Systems
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-3xl leading-relaxed font-body">
                Detailed breakdowns of self-healing build pipelines, distributed execution workers, custom message queues, and production WebRTC networks built by <span className="text-primary font-mono font-semibold">Soumya Jaiswal</span>.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <ProjectFilter activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
          </div>
        </Container>
      </Section>

      {/* Rwaft Deep Dive Section */}
      {(activeCategory === "all" || activeCategory === "distributed" || activeCategory === "ai-llm") && (
        <Section className="py-12 border-b border-border/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column - Description */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-primary/10 border border-primary/30 text-primary">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Rwaft</h2>
                    <p className="text-xs font-mono text-primary">Distributed Deployment Platform & AI App Builder</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Vercel-inspired autonomous build platform that converts natural language prompts or raw Git repositories into live deployments. Engineered with independent Docker worker scaling and an agentic auto-repair loop.
                </p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 rounded bg-card border border-border/60">
                    <span className="text-primary font-semibold block mb-1">KEY TECHNICAL HIGHLIGHT</span>
                    <p className="text-muted-foreground text-[11px]">
                      Utilizes <span className="text-foreground font-semibold">Redis BLMOVE</span> atomic queues with in-flight list preservation and orphan re-queueing to guarantee zero job loss on container SIGKILL.
                    </p>
                  </div>
                  <div className="p-3 rounded bg-card border border-border/60">
                    <span className="text-primary font-semibold block mb-1">AGENTIC SELF-REPAIR</span>
                    <p className="text-muted-foreground text-[11px]">
                      Tool-calling LLM agent runs inside path-traversal safe sandboxes, parsing compiler diagnostics to automatically patch code across up to 6 iterations.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-mono text-xs">TypeScript</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Bun / Express</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Redis BLMOVE</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Docker</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Next.js</Badge>
                  <Badge variant="outline" className="font-mono text-xs">OpenRouter SSE</Badge>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://github.com/nios-x/rwaft"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-ui bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-4 h-4" /> View GitHub Repository
                  </a>
                  <a
                    href="https://soumya7708.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-ui bg-card border border-border/80 text-foreground font-mono text-xs hover:border-primary/50 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-primary" /> Live Demo
                  </a>
                </div>
              </div>

              {/* Right Column - Architecture Diagram & Interactive Terminal */}
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-ui bg-card border border-border/70 p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-primary" /> Interactive Architecture Flow
                    </span>
                    <span className="text-[10px] font-mono bg-primary/10 text-primary px-2 py-0.5 rounded">
                      Live Simulation
                    </span>
                  </div>
                  <RwaftFlowDiagram />
                </div>

                {/* Live Build Logs Console */}
                <div className="rounded-ui bg-card border border-border/70 p-4 shadow-xl font-mono text-xs">
                  <div className="flex items-center justify-between mb-2 border-b border-border/40 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Streaming Telemetry Log:</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setActiveLogTab("build")}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            activeLogTab === "build" ? "bg-primary text-primary-foreground font-bold" : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          Build Agent
                        </button>
                        <button
                          onClick={() => setActiveLogTab("redis")}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            activeLogTab === "redis" ? "bg-primary text-primary-foreground font-bold" : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          Redis BLMOVE
                        </button>
                        <button
                          onClick={() => setActiveLogTab("llm")}
                          className={`px-2 py-0.5 rounded text-[10px] ${
                            activeLogTab === "llm" ? "bg-primary text-primary-foreground font-bold" : "bg-muted/50 text-muted-foreground"
                          }`}
                        >
                          LLM Repair Loop
                        </button>
                      </div>
                    </div>
                  </div>
                  <pre className="p-3 rounded bg-background/90 text-accent border border-border/60 overflow-x-auto text-[11px] leading-relaxed font-mono whitespace-pre-wrap">
                    {buildLogs[activeLogTab]}
                  </pre>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* BeatCode Architecture Section */}
      {(activeCategory === "all" || activeCategory === "systems" || activeCategory === "real-time") && (
        <Section className="py-12 border-b border-border/40 bg-card/20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column - Benchmarks & Diagram */}
              <div className="lg:col-span-7 space-y-4">
                <div className="rounded-ui bg-card border border-border/70 p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3 border-b border-border/40 pb-2">
                    <span className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                      <Zap className="w-4 h-4 text-accent" /> Decoupled Sandboxed Worker Engine
                    </span>
                    <span className="text-[10px] font-mono bg-accent/10 text-accent px-2 py-0.5 rounded">
                      500ms max latency
                    </span>
                  </div>
                  <BeatCodeExecutionBenchmark />
                </div>

                <div className="p-4 rounded-ui bg-background border border-border/60 font-mono text-xs space-y-2">
                  <div className="text-foreground font-semibold border-b border-border/40 pb-1.5 text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security & Fault Tolerance Enforcements
                  </div>
                  <ul className="space-y-1.5 text-muted-foreground text-[11px]">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">5-Second Hard SIGKILL:</strong> Process monitor issues SIGTERM at 4.5s and hard SIGKILL at 5.0s to stop run-away infinite loops.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">Blocklist Screening:</strong> AST-based static analysis prevents unauthorized child_process spawning and filesystem escapes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span><strong className="text-foreground">SSE One-Way Pipe:</strong> Server-Sent Events selected over WebSockets for lightweight, resilient execution updates.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Deep Breakdown */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-accent/10 border border-accent/30 text-accent">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">BeatCode</h2>
                    <p className="text-xs font-mono text-accent">Distributed Code Execution Platform</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Real-time code execution platform for Node.js and Python. Heavy user submissions are persisted in PostgreSQL, enqueued in Redis queues, and consumed by isolated worker processes to keep API responses instant.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-card border border-border/60">
                    <span className="text-muted-foreground text-[10px] block">Queue Pattern</span>
                    <span className="text-foreground font-semibold">Decoupled Workers</span>
                  </div>
                  <div className="p-3 rounded bg-card border border-border/60">
                    <span className="text-muted-foreground text-[10px] block">Stream Format</span>
                    <span className="text-foreground font-semibold">Redis Pub/Sub + SSE</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-mono text-xs">TypeScript</Badge>
                  <Badge variant="outline" className="font-mono text-xs">React</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Express</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Redis Queues</Badge>
                  <Badge variant="outline" className="font-mono text-xs">PostgreSQL</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Prisma</Badge>
                </div>

                <div className="pt-2">
                  <a
                    href="https://github.com/nios-x/beatcode"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-ui bg-card border border-border/80 text-foreground font-mono text-xs hover:border-primary/50 transition-colors"
                  >
                    <Github className="w-4 h-4 text-primary" /> View Repository Breakdown
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Dinka Showcase Section */}
      {(activeCategory === "all" || activeCategory === "real-time") && (
        <Section className="py-12 border-b border-border/40">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-foreground">Dinka</h2>
                    <p className="text-xs font-mono text-emerald-400">Open-Source Real-Time Social Platform</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open-source platform with real-time chat, WebRTC voice/video calling, and infinite scroll feeds. As open-source maintainer, Soumya reviewed and merged community PRs, growing the platform to extensive deployment adoption.
                </p>

                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3 rounded bg-card border border-border/60 text-center">
                    <span className="text-xl font-bold text-primary block">100+</span>
                    <span className="text-[10px] text-muted-foreground">Vercel Deploys</span>
                  </div>
                  <div className="p-3 rounded bg-card border border-border/60 text-center">
                    <span className="text-xl font-bold text-accent block">19</span>
                    <span className="text-[10px] text-muted-foreground">Repo Forks</span>
                  </div>
                  <div className="p-3 rounded bg-card border border-border/60 text-center">
                    <span className="text-xl font-bold text-emerald-400 block">WebRTC</span>
                    <span className="text-[10px] text-muted-foreground">P2P Mesh</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="font-mono text-xs">Next.js</Badge>
                  <Badge variant="outline" className="font-mono text-xs">PostgreSQL</Badge>
                  <Badge variant="outline" className="font-mono text-xs">Prisma</Badge>
                  <Badge variant="outline" className="font-mono text-xs">WebSockets</Badge>
                  <Badge variant="outline" className="font-mono text-xs">WebRTC</Badge>
                </div>

                <div className="pt-2">
                  <a
                    href="https://github.com/nios-x/dinka"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-ui bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Github className="w-4 h-4" /> Explore Dinka Repository
                  </a>
                </div>
              </div>

              {/* Signaling Flow Terminal Graphic */}
              <div className="lg:col-span-6">
                <div className="p-5 rounded-ui bg-card border border-border/70 font-mono text-xs space-y-4">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="text-foreground font-semibold text-xs">WebRTC Peer Connection Protocol</span>
                    <span className="text-[10px] text-emerald-400">STUN/TURN Fallback Active</span>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="p-2.5 rounded bg-background border border-border/50 flex items-center justify-between">
                      <span className="text-muted-foreground">1. Client A -&gt; Offer SDP</span>
                      <span className="text-primary font-semibold">WebSocket Signal</span>
                    </div>
                    <div className="p-2.5 rounded bg-background border border-border/50 flex items-center justify-between">
                      <span className="text-muted-foreground">2. Client B -&gt; Answer SDP</span>
                      <span className="text-primary font-semibold">Signaling Server</span>
                    </div>
                    <div className="p-2.5 rounded bg-background border border-border/50 flex items-center justify-between">
                      <span className="text-muted-foreground">3. ICE Candidate Exchange</span>
                      <span className="text-emerald-400 font-semibold">Direct P2P Stream Established</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground italic">
                    "Maintained zero media server bandwidth overhead by establishing direct client-to-client WebRTC datachannels, relying on WebSockets purely for initial ICE candidate handshakes."
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Micro-Tools & Side Projects Section */}
      <Section className="py-12 bg-background">
        <Container>
          <SectionHeader
            title="Additional Projects & Open Source Contributions"
            description="Production utilities, hackathon winners, and security patches."
            align="left"
          />
          <div className="mt-6">
            <SideProjectsGrid filterCategory={activeCategory} />
          </div>
        </Container>
      </Section>
    </div>
  )
}
