import { useState, type ReactNode } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { site } from "../design"
import { cn } from "./ui/cn"
import { Container } from "./ui/Section"

export default function Layout({ children }: { children: ReactNode }) {
	const [open, setOpen] = useState(false)
	const pages = site.pages
	const hasNav = pages.length > 1

	return (
		<div className="flex min-h-dvh flex-col bg-background text-foreground">
			<header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
				<Container className="flex h-16 items-center justify-between gap-6">
					<Link to="/" className="font-heading text-lg font-bold tracking-tight">{site.name}</Link>
					{hasNav && (
						<nav className="hidden items-center gap-1 md:flex" aria-label="Main">
							{pages.map((page) => (
								<NavLink
									key={page.path}
									to={page.path}
									end={page.path === "/"}
									className={({ isActive }) => cn("rounded-ui px-3 py-2 text-sm font-medium transition-colors", isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground")}
								>
									{page.name}
								</NavLink>
							))}
						</nav>
					)}
					{hasNav && (
						<button
							type="button"
							className="inline-flex h-10 w-10 items-center justify-center rounded-ui text-foreground hover:bg-muted md:hidden"
							aria-label={open ? "Close menu" : "Open menu"}
							aria-expanded={open}
							onClick={() => setOpen((value) => !value)}
						>
							{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
						</button>
					)}
				</Container>
				{hasNav && open && (
					<nav className="border-t border-border md:hidden" aria-label="Main">
						<Container className="flex flex-col py-2">
							{pages.map((page) => (
								<NavLink
									key={page.path}
									to={page.path}
									end={page.path === "/"}
									onClick={() => setOpen(false)}
									className={({ isActive }) => cn("rounded-ui px-3 py-3 text-base font-medium", isActive ? "bg-muted text-foreground" : "text-muted-foreground")}
								>
									{page.name}
								</NavLink>
							))}
						</Container>
					</nav>
				)}
			</header>

			<main className="flex-1">{children}</main>

			<footer className="border-t border-border">
				<Container className="flex flex-col gap-2 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p>
						<span className="font-heading font-semibold text-foreground">{site.name}</span>
						{site.tagline ? ` · ${site.tagline}` : ""}
					</p>
					<p>© {new Date().getFullYear()} {site.name}</p>
				</Container>
			</footer>
		</div>
	)
}
