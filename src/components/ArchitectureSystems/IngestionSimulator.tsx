import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw, Sparkles as AlertTriangle, Sparkles as CheckCircle2, Sparkles as ShieldAlert, Cpu } from "lucide-react"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"

interface JobItem {
  id: string
  source: string
  attempts: number
  status: "pending" | "processing" | "retry" | "dlq" | "completed"
  delay: number
}

const SOURCES = ["LinkedIn Jobs", "Indeed API", "Glassdoor", "RemoteOK", "YC WorkAtAStartup"]

export function IngestionSimulator() {
  const [jobs, setJobs] = useState<JobItem[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [stats, setStats] = useState({ processed: 0, retried: 0, dlq: 0, successRate: 99.2 })

  const initJobs = () => {
    const initial: JobItem[] = Array.from({ length: 6 }).map((_, i) => ({
      id: `JOB-${1000 + i}`,
      source: SOURCES[i % SOURCES.length],
      attempts: 0,
      status: "pending",
      delay: 0,
    }))
    setJobs(initial)
    setStats({ processed: 0, retried: 0, dlq: 0, successRate: 99.2 })
  }

  useEffect(() => {
    initJobs()
  }, [])

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setJobs((prevJobs) => {
        return prevJobs.map((job) => {
          if (job.status === "completed" || job.status === "dlq") return job

          if (job.status === "pending") {
            return { ...job, status: "processing" }
          }

          if (job.status === "processing") {
            // Simulate random failure (30% chance on attempt 1, 10% on attempt 2)
            const failChance = job.attempts === 0 ? 0.35 : 0.2
            const failed = Math.random() < failChance

            if (failed) {
              const nextAttempt = job.attempts + 1
              if (nextAttempt >= 3) {
                setStats((s) => ({ ...s, dlq: s.dlq + 1 }))
                return { ...job, attempts: nextAttempt, status: "dlq" }
              }
              const backoff = Math.pow(2, nextAttempt) * 1000
              setStats((s) => ({ ...s, retried: s.retried + 1 }))
              return { ...job, attempts: nextAttempt, status: "retry", delay: backoff }
            } else {
              setStats((s) => ({ ...s, processed: s.processed + 1 }))
              return { ...job, status: "completed" }
            }
          }

          if (job.status === "retry") {
            return { ...job, status: "processing" }
          }

          return job
        })
      })
    }, 1800)

    return () => clearInterval(interval)
  }, [isRunning])

  const spawnNewJob = () => {
    const newJob: JobItem = {
      id: `JOB-${Math.floor(1000 + Math.random() * 9000)}`,
      source: SOURCES[Math.floor(Math.random() * SOURCES.length)],
      attempts: 0,
      status: "pending",
      delay: 0,
    }
    setJobs((prev) => [newJob, ...prev.slice(0, 7)])
  }

  return (
    <div className="bg-card/60 backdrop-blur-md border border-border/80 rounded-xl p-6 font-mono text-sm shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-accent" />
            <h3 className="font-heading text-lg font-bold text-foreground">
              RabbitMQ DLQ & Exponential Backoff Ingestion
            </h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Simulating Playwright Chromium scrapers processing 10k+ daily listings with fault tolerance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={isRunning ? "outline" : "primary"}
            size="sm"
            onClick={() => setIsRunning(!isRunning)}
            className="font-mono text-xs"
          >
            {isRunning ? <Pause className="h-3.5 w-3.5 mr-1" /> : <Play className="h-3.5 w-3.5 mr-1" />}
            {isRunning ? "Pause Pipeline" : "Start Simulator"}
          </Button>
          <Button variant="secondary" size="sm" onClick={spawnNewJob} className="font-mono text-xs">
            + Inject Listing
          </Button>
          <Button variant="ghost" size="sm" onClick={initJobs} className="font-mono text-xs">
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-background/80 p-3 rounded-lg border border-border/50">
          <span className="text-xs text-muted-foreground block">Processed Success</span>
          <span className="text-xl font-bold text-accent">{stats.processed}</span>
        </div>
        <div className="bg-background/80 p-3 rounded-lg border border-border/50">
          <span className="text-xs text-muted-foreground block">Backoff Retries</span>
          <span className="text-xl font-bold text-amber-400">{stats.retried}</span>
        </div>
        <div className="bg-background/80 p-3 rounded-lg border border-border/50">
          <span className="text-xs text-muted-foreground block">Dead-Letter Queue</span>
          <span className="text-xl font-bold text-destructive">{stats.dlq}</span>
        </div>
        <div className="bg-background/80 p-3 rounded-lg border border-border/50">
          <span className="text-xs text-muted-foreground block">Target Reliability</span>
          <span className="text-xl font-bold text-emerald-400">{stats.successRate}%</span>
        </div>
      </div>

      {/* Ingestion Stream Pipeline Visualizer */}
      <div className="space-y-3">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Live Scraper Ingestion Queue
        </div>
        <div className="grid gap-2">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/40 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold font-mono text-foreground">{job.id}</span>
                <span className="text-xs text-muted-foreground hidden sm:inline">[{job.source}]</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">Attempts: {job.attempts}/3</span>

                {job.status === "completed" && (
                  <Badge variant="outline" className="border-emerald-500 text-emerald-400 bg-emerald-950/20">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> 200 OK
                  </Badge>
                )}
                {job.status === "processing" && (
                  <Badge variant="secondary" className="animate-pulse bg-accent/20 text-accent border border-accent/30">
                    Processing...
                  </Badge>
                )}
                {job.status === "retry" && (
                  <Badge variant="outline" className="border-amber-500/50 text-amber-400 bg-amber-950/20">
                    <AlertTriangle className="h-3 w-3 mr-1" /> Backoff ({job.attempts * 2}s)
                  </Badge>
                )}
                {job.status === "dlq" && (
                  <Badge variant="outline" className="border-destructive/80 text-destructive bg-destructive/10">
                    <ShieldAlert className="h-3 w-3 mr-1" /> Moved to DLQ
                  </Badge>
                )}
                {job.status === "pending" && (
                  <Badge variant="outline" className="text-muted-foreground">
                    Queued
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
