import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/mind")({
  head: () => ({
    meta: [
      { title: "Music & Mind — Shanaya Kacheria" },
      { name: "description", content: "Three short studies on why music moves us — sad songs, memory and rhythm." },
      { property: "og:title", content: "Music & Mind — Shanaya" },
      { property: "og:description", content: "An artist's notes on the psychology of sound." },
    ],
  }),
  component: MindPage,
});

const panels = [
  {
    n: "i",
    title: "Why sad songs comfort us",
    body: "A sad song isn't sadness amplified — it's sadness <em>recognised</em>. When the melody names what you couldn't, the lonely part of the feeling quietly leaves the room.",
    ring: "border-magenta/40",
    glow: "bg-magenta",
    gradient: "from-magenta/40 via-magenta/10 to-transparent",
  },
  {
    n: "ii",
    title: "Why we replay certain songs",
    body: "Songs are emotional bookmarks. We don't just remember a track — we remember <em>who we were</em> when we first looped it. Replaying is time travel that doesn't ask permission.",
    ring: "border-cyan/40",
    glow: "bg-cyan",
    gradient: "from-cyan/40 via-cyan/10 to-transparent",
  },
  {
    n: "iii",
    title: "How rhythm changes mood",
    body: "Before melody, before lyric, there is rhythm — and the body responds first. A slower pulse calms your breathing. A heavier beat re-shapes how you walk into a room.",
    ring: "border-amber/40",
    glow: "bg-amber",
    gradient: "from-amber/40 via-amber/10 to-transparent",
  },
];

function Panel({ p, i }: { p: typeof panels[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
      <div className={`relative grid gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card/30 p-6 md:grid-cols-2 md:p-14 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient}`} />

        <motion.div style={{ y }} className="relative aspect-square">
          <motion.div style={{ rotate }} className="absolute inset-0 grid place-items-center">
            <div className="relative h-full w-full">
              {/* concentric rings */}
              {[0, 1, 2, 3, 4].map((k) => (
                <div
                  key={k}
                  style={{ inset: `${k * 8}%` }}
                  className={`absolute rounded-full border ${p.ring} animate-spinslow`}
                />
              ))}
              <div className={`absolute inset-[40%] rounded-full ${p.glow} blur-2xl opacity-60`} />
              <div className="absolute inset-[44%] grid place-items-center rounded-full bg-background">
                <span className="font-display text-3xl md:text-5xl text-gradient italic">{p.n}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— insight {p.n}</p>
          <h2 className="font-display mt-4 text-4xl leading-tight tracking-tight text-balance md:text-6xl">
            {p.title}
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed text-foreground/85 md:text-xl"
            dangerouslySetInnerHTML={{ __html: p.body }}
          />
        </div>
      </div>
    </section>
  );
}

function MindPage() {
  return (
    <>
      <PageHero
        eyebrow="music & mind · 05"
        title={<>music is <span className="text-gradient italic">felt</span>, not just heard.</>}
        intro="Three short studies on why a few seconds of sound can rearrange a whole afternoon."
      />

      {panels.map((p, i) => (
        <Reveal key={p.n}><Panel p={p} i={i} /></Reveal>
      ))}

      <section className="mx-auto max-w-3xl px-5 pb-32 text-center md:px-8">
        <Reveal>
          <p className="font-display text-3xl leading-tight md:text-5xl">
            The goal isn't to write songs people enjoy. It's to write songs that <span className="text-gradient italic">name something</span> they couldn't.
          </p>
        </Reveal>
      </section>
    </>
  );
}