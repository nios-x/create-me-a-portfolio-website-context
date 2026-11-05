import type { HTMLAttributes } from "react"
import { cn } from "./cn"

export type BadgeVariant = "default" | "secondary" | "outline"

const variants: Record<BadgeVariant, string> = {
	default: "bg-accent text-accent-foreground",
	secondary: "bg-secondary text-secondary-foreground",
	outline: "border border-border text-foreground",
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	variant?: BadgeVariant
}

export function Badge({ variant = "default", className, ...props }: BadgeProps) {
	return <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold", variants[variant], className)} {...props} />
}
