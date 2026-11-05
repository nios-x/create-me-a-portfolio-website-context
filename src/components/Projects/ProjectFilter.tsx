import { Cpu, Terminal, Zap, Bot, Sparkles as Code2 } from "lucide-react"

export type TechCategory = "all" | "distributed" | "ai-llm" | "real-time" | "systems"

interface ProjectFilterProps {
  activeCategory: TechCategory
  onSelectCategory: (category: TechCategory) => void
}

const categories: { id: TechCategory; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "all", label: "All Architecture", icon: Code2 },
  { id: "distributed", label: "Distributed Systems", icon: Cpu },
  { id: "ai-llm", label: "AI & LLM Tools", icon: Bot },
  { id: "real-time", label: "Real-Time / SSE / WebRTC", icon: Zap },
  { id: "systems", label: "Sandboxing & Queues", icon: Terminal },
]

export function ProjectFilter({ activeCategory, onSelectCategory }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-ui bg-card border border-border/60">
      {categories.map((cat) => {
        const Icon = cat.icon
        const isActive = activeCategory === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-sm font-mono text-xs transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{cat.label}</span>
          </button>
        )
      })}
    </div>
  )
}
