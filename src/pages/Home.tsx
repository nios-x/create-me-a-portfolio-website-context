import { Link } from "react-router-dom"
import { Section, Container, SectionHeader } from "../components/ui/Section"
import { Button, buttonClasses } from "../components/ui/Button"
import { Badge } from "../components/ui/Badge"
import { ArchitectureDiagrams } from "../components/Home/ArchitectureDiagrams"
import { ExperienceAndStackSection } from "../components/Home/ExperienceAndStackSection"
import { AchievementsAndTerminal } from "../components/Home/AchievementsAndTerminal"
import { Terminal, Shield, ArrowRight, Sparkles as Github, Mail, Sparkles as Linkedin, ExternalLink, Cpu, Database, Network } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* HERO SECTION */}
      <Section className="pt-12 pb-16 border-b border-border/40 relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Bio & Title */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Distributed Systems & High-Throughput APIs</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground">
                  Soumya <span className="text-accent">Jaiswal</span>
                </h1>
                <p className="text-lg sm:text-xl font-mono text-muted-foreground">
                  Backend & Systems Software Engineer
                </p>
              </div>

              <p className="text-base text-foreground/90 leading-relaxed font-body max-w-2xl">
                BCA Computer Science candidate at Sarala Birla University (CGPA 9.29/10). Specializing in distributed job queues (Redis BLMOVE, RabbitMQ DLQ), sub-200ms semantic vector retrieval (pgvector HNSW), agentic LLM sandboxes, and low-latency real-time streaming architectures.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="mailto:soumyajaiswal7708@gmail.com"
                  className={buttonClasses("primary", "md", "gap-2 font-mono")}
                >
                  <Mail className="h-4 w-4" /> Direct Email
                </a>
                <a
                  href="https://github.com/nios-x"
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClasses("outline", "md", "gap-2 font-mono")}
                >
                  <Github className="h-4 w-4 text-primary" /> GitHub Profile <ExternalLink className="h-3 w-3" />
                </a>
                <Link to="/projects" className={buttonClasses("secondary", "md", "gap-2 font-mono")}>
                  View All Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Quick Telemetry Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/50">
                <div className="p-2.5 rounded-ui bg-card border border-border">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Academic Record</div>
                  <div className="text-base font-bold font-heading text-accent">9.29 / 10 CGPA</div>
                </div>
                <div className="p-2.5 rounded-ui bg-card border border-border">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">LeetCode Solved</div>
                  <div className="text-base font-bold font-heading text-foreground">886 Solved</div>
                </div>
                <div className="p-2.5 rounded-ui bg-card border border-border">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Pipeline Scale</div>
                  <div className="text-base font-bold font-heading text-accent">10K+ jobs/day</div>
                </div>
                <div className="p-2.5 rounded-ui bg-card border border-border">
                  <div className="text-[11px] font-mono text-muted-foreground uppercase">Vector Search</div>
                  <div className="text-base font-bold font-heading text-foreground">&lt;200ms Latency</div>
                </div>
              </div>
            </div>

            {/* Right Column: High-tech System Status Card */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-ui p-5 shadow-2xl space-y-4 font-mono text-xs relative">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-accent" />
                    <span className="font-bold text-foreground">SYSTEM_METRICS.log</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] text-accent border-accent/40">
                    ONLINE
                  </Badge>
                </div>

                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center bg-background/60 p-2 rounded border border-border/40">
                    <span>Degree & Institution:</span>
                    <span className="text-foreground font-semibold">Sarala Birla Univ (BCA)</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/60 p-2 rounded border border-border/40">
                    <span>Core Languages:</span>
                    <span className="text-accent font-semibold">C++, TS, Go, Python, SQL</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/60 p-2 rounded border border-border/40">
                    <span>Message Queueing:</span>
                    <span className="text-foreground font-semibold">Redis BLMOVE, RabbitMQ</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/60 p-2 rounded border border-border/40">
                    <span>Real-time Stream:</span>
                    <span className="text-accent font-semibold">WebSockets, SSE, WebRTC</span>
                  </div>
                  <div className="flex justify-between items-center bg-background/60 p-2 rounded border border-border/40">
                    <span>Primary Workstation:</span>
                    <span className="text-foreground font-semibold">Linux (Arch/Ubuntu), Docker</span>
                  </div>
                </div>

                <div className="p-3 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-[11px]">
                  &gt; SDE Intern @ Cnear (Jan - Mar '26)
                  <br />
                  &gt; Open Source Maintainer @ Dinka (19 forks)
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SYSTEMS ARCHITECTURE SPOTLIGHT */}
      <Section className="py-16 border-b border-border/40">
        <Container>
          <SectionHeader
            title="Systems Architecture & Infrastructure Spotlight"
            description="Deep dive into production-grade distributed architectures engineered for fault tolerance, agentic LLM self-repair, and low-latency execution."
            align="left"
          />
          <ArchitectureDiagrams />
        </Container>
      </Section>

      {/* EXPERIENCE & STACK MATRIX */}
      <Section className="py-16 border-b border-border/40">
        <Container>
          <ExperienceAndStackSection />
        </Container>
      </Section>

      {/* ACHIEVEMENTS & INTERACTIVE CLI */}
      <Section className="py-16">
        <Container>
          <AchievementsAndTerminal />
        </Container>
      </Section>
    </div>
  )
}
