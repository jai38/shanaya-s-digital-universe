import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Music2, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border bg-ink">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl gradient-iridescent" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
        <p className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
          Music that doesn't just <em className="text-gradient not-italic">sound</em> meaningful
          <span className="block text-muted-foreground">— it feels meaningful.</span>
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Reach out</p>
            <a href="mailto:hello@shanaya.music" className="mt-2 inline-block font-display text-2xl hover:text-gradient">
              hello@shanaya.music
            </a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
            <ul className="mt-2 grid grid-cols-2 gap-1 text-sm">
              {[
                ["/about", "About"],
                ["/music", "Music"],
                ["/songs", "Songs"],
                ["/projects", "Projects"],
                ["/mind", "Music & Mind"],
                ["/beyond", "Beyond"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-muted-foreground hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Find me</p>
            <div className="mt-3 flex gap-2">
              {[
                { icon: Instagram, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Music2, href: "#" },
                { icon: Mail, href: "mailto:hello@shanaya.music" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/40 transition hover:scale-110 hover:border-magenta hover:text-magenta"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Shanaya Kacheria. All sounds reserved.</p>
          <p className="font-mono">made with ♥ + reverb</p>
        </div>
      </div>
    </footer>
  );
}