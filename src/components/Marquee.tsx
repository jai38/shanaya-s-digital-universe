import type { ReactNode } from "react";

export default function Marquee({ children, reverse = false }: { children: ReactNode; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex w-max gap-12 whitespace-nowrap animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex shrink-0 gap-12">{children}</div>
        <div className="flex shrink-0 gap-12" aria-hidden>{children}</div>
      </div>
    </div>
  );
}