import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import { Feather, Plane, Waves, Mountain, GraduationCap, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/beyond")({
  head: () => ({
    meta: [
      { title: "Beyond the Stage — Shanaya Kacheria" },
      { name: "description", content: "Poetry, travel, scuba diving, skiing, academics and community service with Salaam Baalak Trust." },
      { property: "og:title", content: "Beyond the Stage — Shanaya" },
      { property: "og:description", content: "The rest of the person behind the music." },
    ],
  }),
  component: BeyondPage,
});

const items = [
  { icon: Feather, t: "Poetry", d: "The cousin of songwriting. Where I rehearse the words before they earn a melody." },
  { icon: Plane, t: "Travel", d: "Cities I've lost time in, airports I've slept in, songs picked up along the way." },
  { icon: Waves, t: "Scuba diving", d: "The most quiet I've ever heard. Useful research for what to put back into a song." },
  { icon: Mountain, t: "Skiing", d: "A lesson in trusting momentum — same as performing live, really." },
  { icon: GraduationCap, t: "Academics", d: "Curiosity dressed up in a syllabus. Always asking why things work the way they do." },
];

function BeyondPage() {
  return (
    <>
      <PageHero
        eyebrow="beyond · 06"
        title={<>the rest of the <span className="text-gradient italic">person.</span></>}
        intro="A portfolio is just a slice. Here's what makes the rest of the album."
      />

      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="grain-card group h-full rounded-3xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-amber">
                <Icon className="h-7 w-7 text-amber" />
                <h3 className="font-display mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-32 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-amber/40 bg-gradient-to-br from-amber/15 via-ink to-magenta/10 p-8 md:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-magenta/20 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-background/60 text-amber backdrop-blur">
                <HeartHandshake className="h-9 w-9" />
              </div>
              <div>
                <Sticker variant="amber" rotate={-2}>community · longest run</Sticker>
                <h2 className="font-display mt-4 text-4xl leading-tight md:text-6xl">
                  Salaam Baalak <span className="text-gradient italic">Trust</span>
                </h2>
                <p className="mt-5 max-w-2xl text-lg text-foreground/85">
                  Long-term work with kids who've had to grow up too fast. The kind of commitment that quietly shapes how you write, how you perform, and who you're really making it for.
                </p>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Empathy isn't a vibe. It's a habit you build by showing up.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}