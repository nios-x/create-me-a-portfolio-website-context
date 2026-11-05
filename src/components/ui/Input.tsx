import type { InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes } from "react"
import { cn } from "./cn"

const field = "w-full rounded-ui border border-border bg-background px-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
	return <input className={cn(field, "h-11", className)} {...props} />
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
	return <textarea className={cn(field, "min-h-28 py-3", className)} {...props} />
}

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
	return <label className={cn("text-sm font-medium text-foreground", className)} {...props} />
}
