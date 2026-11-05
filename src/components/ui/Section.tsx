import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "./cn"

/** Centred content column with the site's side padding. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)} {...props} />
}

/** A full-width page band with vertical rhythm; its children sit in a Container. */
export function Section({ className, children, ...props }: HTMLAttributes<HTMLElement>) {
	return (
		<section className={cn("py-16 sm:py-24", className)} {...props}>
			<Container>{children}</Container>
		</section>
	)
}

export interface SectionHeaderProps {
	title: ReactNode
	description?: ReactNode
	align?: "left" | "center"
	className?: string
}

export function SectionHeader({ title, description, align = "left", className }: SectionHeaderProps) {
	return (
		<div className={cn("mb-10 max-w-2xl sm:mb-14", align === "center" && "mx-auto text-center", className)}>
			<h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
			{description && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>}
		</div>
	)
}
