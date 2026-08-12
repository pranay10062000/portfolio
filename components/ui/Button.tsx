import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  download,
  external,
  ariaLabel,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent text-[#16100a] shadow-[0_16px_44px_rgba(255,138,26,0.22)] hover:-translate-y-0.5 hover:bg-[#ff9a36]",
    secondary:
      "border border-white/16 bg-white/[0.07] text-white hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/[0.11]",
    ghost: "text-white/72 hover:bg-white/[0.06] hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
