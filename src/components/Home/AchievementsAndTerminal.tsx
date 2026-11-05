import { useState, useRef, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card"
import { Badge } from "../ui/Badge"
import { Button } from "../ui/Button"
import { Trophy, Code, ShieldCheck, Terminal, Send, Mail, Sparkles as Linkedin, Sparkles as Github, ExternalLink, RefreshCw } from "lucide-react"

export function AchievementsAndTerminal() {
  const [terminalInput, setTerminalInput] = useState("")
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "soumya --init",
      output: "Soumya Jaiswal v2.4 initialized. SBU Ranchi BCA (9.29 CGPA). Type 'help' to inspect available system queries.",
    },
    {
      cmd: "cat achievements.txt",
      output: "1. LeetCode: 886 solved (368 Easy, 412 Med, 106 Hard), Rating: 1640 (Top 19.5%)\n2. OWASP Nest Supercontributor (Hacktoberfest '25)\n3. 1st Place CodeQuest '26 | 1st Place Design Decode '26 (IIT ISM Dhanbad)\n4. Finalist Innovate-A-Thon 3.0 (BIT Mesra - TTREX Tokenized Real Estate)",
    },
  ])

  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const executeCmd = (commandStr: string) => {
    const raw = commandStr.trim().toLowerCase()
    let out = ""

    switch (raw) {
      case "help":
        out = "Available commands: bio, skills, education, projects, contact, clear"
        break
      case "bio":
        out = "Soumya Jaiswal | BCA Candidate (2024-2027) at Sarala Birla University (9.29 CGPA). Backend & Systems Developer specializing in high-throughput distributed infra."
        break
      case "skills":
        out = "Languages: C++, TypeScript, Go, Python, SQL, Solidity\nInfra: Docker, K8s, Redis BLMOVE, RabbitMQ DLQ, pgvector, SSE, WebSockets"
        break
      case "education":
        out = "Sarala Birla University Ranchi, India | BCA Computer Science (Sep 2024 - Jun 2027) | CGPA: 9.29/10"
        break
      case "projects":
        out = "• Rwaft: Distributed deployment & AI app builder (github.com/nios-x/rwaft)\n• BeatCode: Real-time code execution engine (github.com/nios-x/beatcode)\n• Dinka: WebSockets & WebRTC social network (github.com/nios-x/dinka)"
        break
      case "contact":
        out = "Email: soumyajaiswal7708@gmail.com | Phone: +91-7050002946 | GitHub: nios-x | LeetCode: soumyajaiswal7708"
        break
      case "clear":
        setHistory([])
        return
      default:
        out = `Command not recognized: '${commandStr}'. Type 'help' for options.`
        break
    }

    setHistory((prev) => [...prev, { cmd: commandStr, output: out }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!terminalInput.trim()) return
    executeCmd(terminalInput)
    setTerminalInput("")
  }

  return (
    <div className="space-y-12">
      {/* Achievements Grid */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-xl font-heading text-foreground">
          <Trophy className="h-5 w-5 text-accent" />
          <h2>Competitive Honors & Open Source Record</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* LeetCode Card */}
          <Card className="border-border bg-card/60 backdrop-blur">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-heading text-foreground flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" /> LeetCode Stats
                </CardTitle>
                <Badge variant="outline" className="font-mono text-xs">
                  Rating: 1640
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <div className="text-3xl font-bold font-heading text-accent">886</div>
              <p className="text-xs text-muted-foreground font-mono">Problems Solved (Top 19.5% globally across 20 contests)</p>

              <div className="grid grid-cols-3 gap-1.5 pt-2 text-center text-xs font-mono">
                <div className="p-1.5 rounded bg-background border border-border">
                  <span className="text-muted-foreground block text-[10px]">EASY</span>
                  <span className="font-bold text-foreground">368</span>
                </div>
                <div className="p-1.5 rounded bg-background border border-border">
                  <span className="text-muted-foreground block text-[10px]">MEDIUM</span>
                  <span className="font-bold text-foreground">412</span>
                </div>
                <div className="p-1.5 rounded bg-background border border-border">
                  <span className="text-muted-foreground block text-[10px]">HARD</span>
                  <span className="font-bold text-foreground">106</span>
                </div>
              </div>
              <div className="text-xs text-accent font-mono pt-1">★ 1st Place — CodeQuest 2026 (SBU)</div>
            </CardContent>
          </Card>

          {/* Hackathons Card */}
          <Card className="border-border bg-card/60 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-heading text-foreground flex items-center gap-2">
                <Trophy className="h-4 w-4 text-accent" /> Hackathon Trophies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2 text-xs font-body">
              <div className="p-2.5 rounded bg-background border border-border space-y-1">
                <div className="font-semibold font-heading text-foreground text-sm">1st Place — Design Decode '26</div>
                <div className="text-muted-foreground">IIT ISM Dhanbad</div>
              </div>
              <div className="p-2.5 rounded bg-background border border-border space-y-1">
                <div className="font-semibold font-heading text-foreground text-sm">Finalist — Innovate-A-Thon 3.0</div>
                <div className="text-muted-foreground">BIT Mesra (TTREX: Tokenized real-estate exchange with ERC-721/1155)</div>
              </div>
            </CardContent>
          </Card>

          {/* Open Source Card */}
          <Card className="border-border bg-card/60 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-heading text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Open Source Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2 text-xs font-body">
              <div className="space-y-1">
                <Badge variant="secondary" className="font-mono text-[11px] mb-1">
                  OWASP Nest
                </Badge>
                <p className="text-muted-foreground">
                  3 merged PRs fixing ZAP security-scan CI/CD pipeline failures and migrating search UX through code review.
                </p>
              </div>
              <div className="p-2 rounded bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
                Hacktoberfest 2025 Supercontributor
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive CLI Console & Direct Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* CLI Terminal */}
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-mono text-muted-foreground flex items-center gap-2">
              <Terminal className="h-4 w-4 text-accent" /> Interactive Resume Shell (CLI)
            </h3>
            <div className="flex gap-1.5">
              {["bio", "skills", "projects", "contact"].map((preset) => (
                <button
                  key={preset}
                  onClick={() => executeCmd(preset)}
                  className="px-2 py-0.5 rounded bg-muted text-[11px] font-mono text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-ui overflow-hidden font-mono text-xs shadow-xl">
            <div className="bg-muted/40 px-4 py-2 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="text-muted-foreground text-[11px] ml-2">soumya@dev-box:~</span>
              </div>
              <button
                onClick={() => executeCmd("clear")}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-[11px]"
              >
                <RefreshCw className="h-3 w-3" /> clear
              </button>
            </div>

            <div className="p-4 space-y-3 max-h-64 overflow-y-auto bg-background/95">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-accent">
                    <span>$</span>
                    <span className="text-foreground">{h.cmd}</span>
                  </div>
                  <pre className="text-muted-foreground whitespace-pre-wrap font-mono text-[11px] pl-4 border-l-2 border-border/60">
                    {h.output}
                  </pre>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-border bg-card p-2 flex items-center gap-2">
              <span className="text-accent pl-2">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command ('help', 'bio', 'contact')..."
                className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none text-xs font-mono"
              />
              <Button type="submit" size="sm" variant="ghost" className="h-7 px-2">
                <Send className="h-3.5 w-3.5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Links */}
        <div className="lg:col-span-4 space-y-4">
          <Card className="border-border bg-card/60 backdrop-blur">
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-heading text-foreground">Direct Reach-Out</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-2 font-mono text-xs">
              <a
                href="mailto:soumyajaiswal7708@gmail.com"
                className="flex items-center gap-3 p-2.5 rounded bg-background border border-border hover:border-accent/50 text-foreground transition-colors group"
              >
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="truncate group-hover:underline">soumyajaiswal7708@gmail.com</span>
              </a>

              <a
                href="https://github.com/nios-x"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-background border border-border hover:border-accent/50 text-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-primary shrink-0" />
                  <span>github.com/nios-x</span>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>

              <a
                href="https://linkedin.com/in/soumya-jaiswal7708"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded bg-background border border-border hover:border-accent/50 text-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-accent shrink-0" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground" />
              </a>

              <div className="p-3 rounded bg-muted/40 border border-border text-muted-foreground text-[11px] leading-relaxed">
                📍 Ranchi, India • +91-7050002946
                <br />
                Available for SDE / Systems Engineering opportunities.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
