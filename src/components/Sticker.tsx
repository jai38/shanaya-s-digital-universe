import type { ReactNode } from "react";

export default function Sticker({
  children,
  rotate = -4,
  variant = "magenta",
}: { children: ReactNode; rotate?: number; variant?: "magenta" | "cyan" | "amber" | "ink" }) {
  const map = {
    magenta: "bg-magenta text-ink",
    cyan: "bg-cyan text-ink",
    amber: "bg-amber text-ink",
    ink: "bg-ink text-foreground border border-border",
  } as const;
  return (
    <span
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest ${map[variant]}`}
    >
      {children}
    </span>
  );
}