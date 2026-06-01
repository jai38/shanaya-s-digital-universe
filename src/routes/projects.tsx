import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Performances — Shanaya Kacheria" },
      { name: "description", content: "Choirs, charity events, school stages, a Berklee workshop, DJ sets — the receipts." },
      { property: "og:title", content: "Projects & Performances — Shanaya" },
      { property: "og:description", content: "Five years of singing in public, plus the moments that mattered most." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { y: "ongoing", t: "Cathedral & John Connon School Choir", d: "Five years of weekly harmony — the place I learned how to listen to people around me." },
  { y: "event", t: "Encore charity event", d: "Duet and solo performances for a cause — first time singing for something bigger than the song." },
  { y: "stage", t: "Studio 165 / Studio 166 — solo performances", d: "School stage solos. The kind of nerves that teach you something." },
  { y: "1 year", t: "A Cappella India", d: "A year of singing without instruments — voices as the entire orchestra." },
  { y: "ongoing", t: "Collaborative rehearsals", d: "Sessions with other musicians — testing ideas, breaking arrangements, finding the better take." },
  { y: "ongoing", t: "Curated DJ sets", d: "Reading rooms, building emotional arcs over 60 minutes of music." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="projects · 04"
        title={<>the <span className="text-gradient italic">receipts.</span></>}
        intro="Stages, choirs, charity nights, workshops and the small rooms in between."
      />

      {/* SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-magenta/40 bg-gradient-to-br from-magenta/20 via-ink to-cyan/10 p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-magenta/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan/30 blur-3xl" />
            <div className="relative">
              <Sticker variant="amber" rotate={-3}><Sparkles className="h-3 w-3" /> spotlight</Sticker>
              <h2 className="font-display mt-6 text-4xl leading-tight md:text-7xl">
                GMI <span className="text-gradient italic">×</span> Berklee College of Music
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-foreground/85">
                Selected among <span className="text-gradient font-medium">25 curated participants from India</span> for an intensive workshop — a week of being challenged by people who think about music as a whole universe.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["25", "from India"],
                  ["1", "of those 25"],
                  ["∞", "ideas to chase"],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-2xl border border-border bg-background/40 p-4 backdrop-blur">
                    <p className="font-display text-3xl text-gradient md:text-5xl">{n}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-5 pb-32 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-cyan">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{p.y}</span>
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display mt-6 text-2xl md:text-3xl">{p.t}</h3>
                <p className="mt-2 text-sm text-foreground/70">{p.d}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}