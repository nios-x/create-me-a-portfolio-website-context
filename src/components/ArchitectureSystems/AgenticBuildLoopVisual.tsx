import { useState } from "react"
import { Bot, RefreshCw, Terminal, Sparkles as CheckCircle2, Sparkles as AlertCircle } from "lucide-react"
import { Button } from "../ui/Button"
import { Badge } from "../ui/Badge"

interface IterationStep {
  step: number
  prompt: string
  compilerOutput: string
  aiAction: string
  fixed: boolean
}

const DEMO_STEPS: IterationStep[] = [
  {
    step: 1,
    prompt: "Generate Next.js 15 landing page with tailwind",
    compilerOutput: "TS2307: Cannot find module '@/components/ui/Button' or its corresponding type declarations.",
    aiAction: "Classified TS missing import error. Created auto-stub components/ui/Button.tsx inside sandbox.",
    fixed: false,
  },
  {
    step: 2,
    prompt: "Re-building bundle...",
    compilerOutput: "SyntaxError: Unexpected token '<' in app/page.tsx line 42",
    aiAction: "Tool call repair: Escaped unescaped JSX character '<' to '&lt;' in paragraph tag.",
    fixed: false,
  },
  {
    step: 3,
    prompt: "Re-building bundle...",
    compilerOutput: "Build succeeded! Bundled 14 modules in 420ms.",
    aiAction: "Self-healing complete. Transformed static build into CDN production asset.",
    fixed: true,
  },
]

export function AgenticBuildLoopVisual() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSelfHealing, setIsSelfHealing] = useState(false)

  const handleNext = () => {
    if (currentStep < DEMO_STEPS.length - 1) {
      setIsSelfHealing(true)
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1)
        setIsSelfHealing(false)
      }, 800)
    }
  }

  const handleReset = () => {
    setCurrentStep(0)
  }

  const activeData = DEMO_STEPS[currentStep]

  return (
    <div className="bg-card/60 backdrop-blur-md border border-border/80 rounded-xl p-6 font-mono text-sm shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-accent" />
          <h3 className="font-heading text-lg font-bold text-foreground">
            Rwaft Agentic LLM Self-Repair Build Loop
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-accent/40 text-accent bg-accent/10">
            Max 6 Iteration Cap
          </Badge>
          <Button
            size="sm"
            onClick={handleNext}
            disabled={activeData.fixed || isSelfHealing}
            className="font-mono text-xs"
          >
            {isSelfHealing ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 mr-1 animate-spin" /> Repairing...
              </>
            ) : activeData.fixed ? (
              "Build Repaired"
            ) : (
              "Trigger AI Repair Step"
            )}
          </Button>
          <Button size="sm" variant="ghost" onClick={handleReset} className="font-mono text-xs">
            Reset Loop
          </Button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-6">
        Path-traversal-safe sandbox leveraging Gemini / OpenRouter tool calling to diagnose TypeScript & Vite compilation errors dynamically.
      </p>

      {/* Progress Tracker */}
      <div className="flex items-center justify-between mb-6 bg-background/60 p-3 rounded-lg border border-border/40">
        {DEMO_STEPS.map((s, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div
              className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${
                idx === currentStep
                  ? "bg-accent text-background"
                  : idx < currentStep
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {idx + 1}
            </div>
            <span className="text-xs hidden sm:inline text-muted-foreground">
              {idx === 0 ? "Initial Error" : idx === 1 ? "Syntax Fix" : "Success Target"}
            </span>
            {idx < DEMO_STEPS.length - 1 && <div className="h-[1px] w-6 bg-border mx-2 hidden sm:block" />}
          </div>
        ))}
      </div>

      {/* Terminal Display */}
      <div className="bg-background rounded-lg border border-border/80 p-4 font-mono text-xs space-y-3">
        <div className="flex items-center justify-between text-muted-foreground pb-2 border-b border-border/40">
          <span className="flex items-center gap-1.5">
            <Terminal className="h-3.5 w-3.5 text-accent" /> Sandbox Isolation Execution Output
          </span>
          <span>Iteration {activeData.step} / 6</span>
        </div>

        <div>
          <span className="text-muted-foreground block text-[10px] uppercase">Compiler Output Log:</span>
          <div
            className={`p-2 rounded mt-1 border ${
              activeData.fixed
                ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                : "bg-destructive/10 border-destructive/30 text-destructive-foreground"
            }`}
          >
            {activeData.fixed ? (
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5 inline" /> {activeData.compilerOutput}
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <AlertCircle className="h-3.5 w-3.5 inline text-destructive" /> {activeData.compilerOutput}
              </span>
            )}
          </div>
        </div>

        <div>
          <span className="text-muted-foreground block text-[10px] uppercase">LLM Agentic Tool Decision:</span>
          <p className="text-accent mt-1 bg-accent/10 p-2 rounded border border-accent/20">
            {activeData.aiAction}
          </p>
        </div>
      </div>
    </div>
  )
}
