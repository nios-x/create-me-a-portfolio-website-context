import { Section, SectionHeader } from "../components/ui/Section"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card"
import { Badge } from "../components/ui/Badge"
import { Button } from "../components/ui/Button"
import { IngestionSimulator } from "../components/ArchitectureSystems/IngestionSimulator"
import { VectorBenchmark } from "../components/ArchitectureSystems/VectorBenchmark"
import { AgenticBuildLoopVisual } from "../components/ArchitectureSystems/AgenticBuildLoopVisual"
import { Download, Cpu, Layers, ShieldCheck, Terminal, Server } from "lucide-react"

export default function ArchitectureSystems() {
  const downloadBlueprintSpec = () => {
    const text = `SOUMYA JAISWAL - ARCHITECTURE & SYSTEMS SPECIFICATIONS
==================================================
Contact: soumyajaiswal7708@gmail.com | github.com/nios-x

1. RWAFTS DISTRIBUTED DEPLOYMENT ARCHITECTURE
- Reliable Job Queues: Redis BLMOVE pattern with orphan requeue on container restarts.
- Isolation: Path-traversal safe child-process execution sandboxes.
- Real-time Telemetry: SSE multiplexed with single Redis Pub/Sub client for zero socket leaks.

2. CNEAR DATA INGESTION PIPELINE
- Throughput: 10,000+ daily listings scraped concurrently via headless Chromium/Playwright.
- Reliability: RabbitMQ Dead-Letter Exchange (DLX) with exponential backoff (2^n seconds).
- Vector Engine: pgvector with HNSW indexing (m=16, ef_construction=64) over sentence-transformers.

3. BEATCODE DISTRIBUTED JUDGE
- Sandbox Engine: Decoupled API/Worker with 5-second SIGKILL limits & blocklist isolation.
- Persistence: PostgreSQL + Prisma schema validation with async result streaming.
`
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = "Soumya_Jaiswal_Systems_Architecture.txt"
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body pb-16">
      {/* Top Banner / System Design Manifesto */}
      <Section className="pt-10 pb-8 border-b border-border/60">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <Badge variant="outline" className="border-accent/40 text-accent bg-accent/10 font-mono text-xs py-1 px-3">
            <Cpu className="h-3.5 w-3.5 mr-1.5 inline" /> DISTRIBUTED SYSTEMS ARCHITECTURE & FAULT TOLERANCE
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight">
            High-Throughput Pipelines & Resilient System Blueprints
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-mono leading-relaxed">
            Case studies and interactive simulations detailing my implementations of distributed queues, sub-200ms vector search, and self-healing build loops.
          </p>
        </div>
      </Section>

      {/* Section 1: Ingestion & Reliable Queue Simulation */}
      <Section className="py-12">
        <SectionHeader
          title="1. RabbitMQ DLQ & Exponential Backoff Ingestion"
          description="Interactive simulation of Cnear's 10,000+ listings/day data ingestion pipeline reaching 99.2% reliability."
          align="left"
        />
        <div className="mt-6">
          <IngestionSimulator />
        </div>
      </Section>

      {/* Section 2: Vector Search Benchmark Visualizer */}
      <Section className="py-12 bg-muted/20">
        <SectionHeader
          title="2. PostgreSQL pgvector HNSW Nearest-Neighbor Indexing"
          description="Comparing HNSW vector search against legacy keyword queries across 50,000+ listings with sub-200ms execution."
          align="left"
        />
        <div className="mt-6">
          <VectorBenchmark />
        </div>
      </Section>

      {/* Section 3: Agentic Build Loop Visual */}
      <Section className="py-12">
        <SectionHeader
          title="3. Rwaft Agentic LLM Self-Healing Sandbox Loop"
          description="Visualizing the automated compiler-error classification and tool-calling self-repair mechanism operating over up to 6 iterations."
          align="left"
        />
        <div className="mt-6">
          <AgenticBuildLoopVisual />
        </div>
      </Section>

      {/* Section 4: System Design Blueprints & Documentation */}
      <Section className="py-12 bg-muted/20">
        <SectionHeader
          title="4. Architectural Documentation & Specifications"
          description="Deep-dive architectural patterns engineered for fault-tolerant microservices and high-concurrency event-driven platforms."
          align="left"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card className="bg-card/70 border-border/80 font-mono">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Server className="h-4 w-4 text-accent" /> Redis BLMOVE Queues
              </CardTitle>
              <CardDescription className="text-xs">Zero-data-loss reliable execution pattern</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Eliminates message loss during worker crashes by atomically moving jobs to in-flight processing lists. Orphaned jobs are safely requeued on worker reboot.
              </p>
              <div className="pt-2">
                <Badge variant="outline" className="text-[10px] border-border">Rwaft Platform</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/80 font-mono">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="h-4 w-4 text-accent" /> Multiplexed SSE Streaming
              </CardTitle>
              <CardDescription className="text-xs">Single Pub/Sub connection multiplexing</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Avoids Redis connection exhaustion by routing per-user build logs through a unified Pub/Sub subscriber and Server-Sent Events channel.
              </p>
              <div className="pt-2">
                <Badge variant="outline" className="text-[10px] border-border">BeatCode & Rwaft</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/80 font-mono">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" /> Sandbox Isolation
              </CardTitle>
              <CardDescription className="text-xs">Code execution security & SIGKILL limits</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-2">
              <p>
                Strict process limits enforcing 5-second timeouts, memory caps, and path-traversal safeguards against malicious code execution submissions.
              </p>
              <div className="pt-2">
                <Badge variant="outline" className="text-[10px] border-border">BeatCode Platform</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spec Download Banner */}
        <div className="mt-10 p-6 rounded-xl border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="h-6 w-6 text-accent shrink-0" />
            <div>
              <h4 className="font-heading text-sm font-bold text-foreground">
                Download Architecture Blueprint Spec Sheet
              </h4>
              <p className="text-xs text-muted-foreground font-mono">
                Get full technical specs for Redis BLMOVE pattern, pgvector HNSW configurations, and DLQ retries.
              </p>
            </div>
          </div>
          <Button onClick={downloadBlueprintSpec} className="font-mono text-xs whitespace-nowrap">
            <Download className="h-4 w-4 mr-2" /> Download Spec (.txt)
          </Button>
        </div>
      </Section>
    </div>
  )
}
