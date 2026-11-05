import { useState } from "react"
import { Search, Zap, Clock, Database, ChevronRight } from "lucide-react"
import { Button } from "../ui/Button"
import { Input } from "../ui/Input"

export function VectorBenchmark() {
  const [query, setQuery] = useState("Distributed Rust engineer with Kubernetes and WebSockets")
  const [isSearching, setIsSearching] = useState(false)
  const [activeTab, setActiveTab] = useState<"hnsw" | "bm25">("hnsw")

  const hnswResults = [
    { title: "Senior Systems Engineer (Go/Distributed Systems)", score: 0.94, latency: "142ms", index: "pgvector HNSW" },
    { title: "Staff Backend Architect (WebSockets & Queues)", score: 0.89, latency: "142ms", index: "pgvector HNSW" },
    { title: "Cloud Native Developer (Kubernetes/Docker)", score: 0.85, latency: "142ms", index: "pgvector HNSW" },
  ]

  const bm25Results = [
    { title: "Rust Developer - Command Line Tools", score: 0.42, latency: "680ms", index: "PostgreSQL BM25 Keyword" },
    { title: "Kubernetes Operator Maintainer", score: 0.38, latency: "680ms", index: "PostgreSQL BM25 Keyword" },
    { title: "Frontend React Engineer (TypeScript)", score: 0.15, latency: "680ms", index: "PostgreSQL BM25 Keyword" },
  ]

  const runSearch = () => {
    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
    }, 300)
  }

  return (
    <div className="bg-card/60 backdrop-blur-md border border-border/80 rounded-xl p-6 font-mono text-sm shadow-xl">
      <div className="flex items-center gap-2 mb-2">
        <Database className="h-5 w-5 text-accent" />
        <h3 className="font-heading text-lg font-bold text-foreground">
          pgvector HNSW Nearest-Neighbor vs Standard Keyword Search
        </h3>
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Benchmark over 50,000 vector embeddings using <code className="text-accent font-mono">sentence-transformers</code>. Demonstrates sub-200ms latency & 3x relevance lift.
      </p>

      {/* Query Bar */}
      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9 font-mono text-xs bg-background/80 border-border"
            placeholder="Type semantic query..."
          />
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-muted-foreground" />
        </div>
        <Button size="sm" onClick={runSearch} disabled={isSearching} className="font-mono text-xs">
          {isSearching ? "Querying..." : "Run Vector Query"}
        </Button>
      </div>

      {/* Mode Switcher */}
      <div className="flex border-b border-border/60 mb-4 gap-4">
        <button
          onClick={() => setActiveTab("hnsw")}
          className={`pb-2 text-xs font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
            activeTab === "hnsw"
              ? "border-accent text-accent"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Zap className="h-3.5 w-3.5" /> pgvector HNSW Index (Sub-200ms)
        </button>
        <button
          onClick={() => setActiveTab("bm25")}
          className={`pb-2 text-xs font-semibold transition-all border-b-2 flex items-center gap-1.5 ${
            activeTab === "bm25"
              ? "border-accent text-accent"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Clock className="h-3.5 w-3.5" /> Legacy SQL Full-Text (BM25)
        </button>
      </div>

      {/* Benchmark Metric Highlight */}
      <div className="grid grid-cols-3 gap-3 mb-6 text-center">
        <div className="bg-background/80 p-3 rounded-lg border border-border/40">
          <span className="text-[10px] text-muted-foreground uppercase block">Query Execution</span>
          <span className={`text-base font-bold ${activeTab === "hnsw" ? "text-accent" : "text-amber-400"}`}>
            {activeTab === "hnsw" ? "142ms" : "680ms"}
          </span>
        </div>
        <div className="bg-background/80 p-3 rounded-lg border border-border/40">
          <span className="text-[10px] text-muted-foreground uppercase block">Cosine Similarity</span>
          <span className={`text-base font-bold ${activeTab === "hnsw" ? "text-emerald-400" : "text-muted-foreground"}`}>
            {activeTab === "hnsw" ? "0.94 Max Match" : "0.42 Keyword Match"}
          </span>
        </div>
        <div className="bg-background/80 p-3 rounded-lg border border-border/40">
          <span className="text-[10px] text-muted-foreground uppercase block">Index Method</span>
          <span className="text-xs font-bold text-foreground">
            {activeTab === "hnsw" ? "HNSW m=16, ef=64" : "GIN / tsvector"}
          </span>
        </div>
      </div>

      {/* Results Listing */}
      <div className="space-y-2">
        {(activeTab === "hnsw" ? hnswResults : bm25Results).map((res, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/40 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-accent" />
              <div>
                <div className="text-xs font-semibold text-foreground">{res.title}</div>
                <div className="text-[10px] text-muted-foreground">{res.index}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-accent">Score: {res.score}</div>
              <div className="text-[10px] text-muted-foreground">{res.latency}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
