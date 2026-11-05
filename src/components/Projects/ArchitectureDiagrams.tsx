import { useState } from "react"
import { Play, RotateCcw, Sparkles as CheckCircle2, Sparkles as AlertTriangle, ArrowRight } from "lucide-react"

export function RwaftFlowDiagram() {
  const [step, setStep] = useState<number>(0)
  const steps = [
    { title: "1. Prompt / Git Push", desc: "User triggers build via CLI or REST API. Webhook payload validated with HMAC signature." },
    { title: "2. API Gateway & BLMOVE Queue", desc: "Job pushed to Redis pending queue. BLMOVE atomically shifts payload to in-flight processing buffer." },
    { title: "3. Docker Worker Spawns", desc: "Worker receives job, pulls isolated container environment with CPU & RAM quotas." },
    { title: "4. LLM Agentic Self-Repair Loop", desc: "Gemini/OpenRouter tool calling catches compiler errors, auto-patching code across up to 6 iterations." },
    { title: "5. SSE Multi-Channel Stream", desc: "Logs multiplexed via single Redis Pub/Sub connection and streamed directly to browser client." },
    { title: "6. Edge CDN Deployment", desc: "Artifacts deployed, registered with dynamic path proxy, health check verified (200 OK)." }
  ]

  return (
    <div className="p-4 rounded-ui bg-background/80 border border-border/80 font-mono text-xs">
      <div className="flex items-center justify-between mb-4 border-b border-border/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-foreground font-semibold">RWAFT PIPELINE ORCHESTRATOR</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setStep((prev) => (prev + 1) % steps.length)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
          >
            <Play className="w-3 h-3" /> Step forward
          </button>
          <button
            onClick={() => setStep(0)}
            className="p-1 rounded bg-muted/60 text-muted-foreground hover:text-foreground"
            title="Reset"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-4">
        {steps.map((s, idx) => {
          const isActive = step === idx
          const isPassed = step > idx
          return (
            <div
              key={idx}
              onClick={() => setStep(idx)}
              className={`p-2.5 rounded border transition-all cursor-pointer ${
                isActive
                  ? "bg-primary/15 border-primary text-foreground shadow-sm shadow-primary/20"
                  : isPassed
                  ? "bg-muted/30 border-primary/40 text-muted-foreground"
                  : "bg-card/40 border-border/40 text-muted-foreground/60"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-semibold ${isActive ? "text-primary" : ""}`}>{s.title}</span>
                {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-primary" />}
              </div>
              <p className="text-[11px] leading-relaxed line-clamp-2">{s.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="p-3 rounded bg-card border border-primary/30 text-primary-foreground/90 font-mono text-xs flex items-start gap-2">
        <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <span className="text-primary font-bold uppercase tracking-wider text-[10px] block mb-0.5">Active Execution Phase: Step {step + 1}</span>
          <p className="text-foreground/90 text-xs">{steps[step].desc}</p>
        </div>
      </div>
    </div>
  )
}

export function BeatCodeExecutionBenchmark() {
  const benchmarks = [
    { metric: "Sandboxed Worker Startup", time: "14ms", status: "Optimal", color: "text-emerald-400" },
    { metric: "Redis BLMOVE Queue Overhead", time: "1.2ms", status: "Sub-millisecond", color: "text-emerald-400" },
    { metric: "SIGKILL Timeout Enforcer", time: "5000ms max", status: "Strict Guard", color: "text-accent" },
    { metric: "SSE Log Stream Latency", time: "< 25ms", status: "Real-time", color: "text-emerald-400" },
  ]

  return (
    <div className="p-4 rounded-ui bg-background/80 border border-border/80 font-mono text-xs">
      <div className="flex items-center justify-between mb-3 border-b border-border/60 pb-2">
        <span className="text-foreground font-semibold">BEATCODE EXECUTION BENCHMARKS</span>
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">PostgreSQL + Redis Queue</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {benchmarks.map((item, idx) => (
          <div key={idx} className="p-2.5 rounded bg-card/60 border border-border/50 flex flex-col justify-between">
            <span className="text-[11px] text-muted-foreground">{item.metric}</span>
            <div className="mt-2">
              <div className={`text-base font-bold font-mono ${item.color}`}>{item.time}</div>
              <span className="text-[10px] text-muted-foreground/80">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
