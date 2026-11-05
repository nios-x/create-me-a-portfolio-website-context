/**
 * The design schema for this site, written by rwaft from the build plan.
 * Its colours and fonts are also Tailwind tokens in src/index.css: style with
 * those utilities (bg-primary, text-muted-foreground, font-heading) rather than
 * reading the raw values here.
 */
export const site = {
	"name": "Soumya Jaiswal Portfolio",
	"tagline": "Full Stack & Systems Engineer Specializing in Distributed Infrastructure, High-Throughput APIs, and Real-Time Systems",
	"kind": "website",
	"layout": "site",
	"pages": [
		{
			"name": "Home",
			"path": "/"
		},
		{
			"name": "Projects",
			"path": "/projects"
		},
		{
			"name": "Architecture & Systems",
			"path": "/systems"
		}
	],
	"design": {
		"mood": "Dark high-tech engineer terminal with vibrant obsidian and electric cyan accents",
		"mode": "dark",
		"palette": {
			"background": "#090d16",
			"foreground": "#e2e8f0",
			"card": "#111827",
			"cardForeground": "#f3f4f6",
			"primary": "#00f0ff",
			"primaryForeground": "#090d16",
			"secondary": "#1e293b",
			"secondaryForeground": "#94a3b8",
			"muted": "#1e293b",
			"mutedForeground": "#a8a29e",
			"accent": "#10b981",
			"accentForeground": "#090d16",
			"border": "#1e293b",
			"ring": "#00f0ff"
		},
		"fonts": {
			"heading": "Space Grotesk",
			"body": "JetBrains Mono"
		},
		"radius": "md"
	}
} as const
