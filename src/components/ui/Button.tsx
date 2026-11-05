import type { ButtonHTMLAttributes } from "react"
import { cn } from "./cn"

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost"
export type ButtonSize = "sm" | "md" | "lg"

const variants: Record<ButtonVariant, string> = {
	primary: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
	secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
	outline: "border border-border bg-transparent text-foreground hover:bg-muted",
	ghost: "bg-transparent text-foreground hover:bg-muted",
}

const sizes: Record<ButtonSize, string> = {
	sm: "h-9 px-3 text-sm",
	md: "h-11 px-5 text-sm",
	lg: "h-12 px-7 text-base",
}

/** Classes for anything that should look like a button, e.g. a router <Link>. */
export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string): string {
	return cn(
		"inline-flex items-center justify-center gap-2 rounded-ui font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
		variants[variant],
		sizes[size],
		className
	)
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant
	size?: ButtonSize
}

export function Button({ variant = "primary", size = "md", className, type = "button", ...props }: ButtonProps) {
	return <button type={type} className={buttonClasses(variant, size, className)} {...props} />
}
