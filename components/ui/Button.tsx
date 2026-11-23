import { cn } from "@/lib/utils";

type ButtonProps = { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost"; className?: string; download?: boolean; external?: boolean; ariaLabel?: string };

export function Button({ href, children, variant = "primary", className, download, external, ariaLabel }: ButtonProps) {
  return <a href={href} download={download} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={ariaLabel} className={cn("button", `button--${variant}`, className)}>{children}</a>;
}
