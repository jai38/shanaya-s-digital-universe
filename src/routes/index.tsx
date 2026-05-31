import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { lazy, Suspense, useRef } from "react";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import Waveform from "@/components/Waveform";
import { ArrowUpRight, Headphones, Sparkles } from "lucide-react";

const VinylScene = lazy(() => import("@/components/VinylScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanaya Kacheria — Singer • Songwriter • Composer • DJ" },
      { name: "description", content: "Singer, songwriter, composer and DJ exploring how music shapes emotion, memory and the human mind." },
      { property: "og:title", content: "Shanaya Kacheria" },
      { property: "og:description", content: "Music that doesn't just sound meaningful — it feels meaningful." },
    ],
  }),
  component: Index,
});

const roles = ["singer.", "songwriter.", "composer.", "dj.", "storyteller."];

function Index() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden">
        {/* 3D scene */}
        <motion.div style={{ y, opacity }} className="pointer-events-none absolute inset-0 -z-10">
          <Suspense fallback={null}>
            <VinylScene />
          </Suspense>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
        </motion.div>

        <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-between px-5 pb-10 pt-10 md:px-8 md:pt-16">
          <div className="flex items-center gap-3">
            <Sticker variant="ink"><Sparkles className="h-3 w-3" /> portfolio · 2025</Sticker>
            <Sticker variant="magenta" rotate={6}>now playing ◉</Sticker>
          </div>

          <div className="my-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground md:text-sm"
            >
              — Shanaya Kacheria · b. Mumbai · ear for the unsaid
            </motion.p>

            <h1 className="font-display mt-4 text-[15vw] font-medium leading-[0.85] tracking-tight text-balance md:text-[11rem] lg:text-[14rem]">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                shanaya
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-gradient italic"
              >
                kacheria.
              </motion.span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-base text-muted-foreground md:text-lg">
              <span>I am a</span>
              <span className="relative inline-flex h-7 overflow-hidden md:h-9">
                <motion.span
                  animate={{ y: [0, -28, -56, -84, -112, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                  className="flex flex-col font-display text-2xl text-foreground md:text-3xl"
                >
                  {[...roles, roles[0]].map((r) => (
                    <span key={r} className="h-7 md:h-9 leading-7 md:leading-9">{r}</span>
                  ))}
                </motion.span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-base text-foreground/80 md:text-lg">
              An artist obsessed with the space <em className="text-gradient not-italic">between</em> sound and feeling — how a melody holds memory, how rhythm bends mood.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/songs"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:gap-3"
              >
                <Headphones className="h-4 w-4" /> Listen to my songs
                <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
              </Link>
              <Link
                to="/mind"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-3 text-sm font-medium backdrop-blur hover:border-magenta hover:text-magenta"
              >
                Music & the mind →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-ink py-6">
        <Marquee>
          {["singer", "✦", "songwriter", "✦", "composer", "✦", "dj", "✦", "performer", "✦", "trinity grade 8", "✦", "berklee selected", "✦"].map((w, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl">
              {w === "✦" ? <span className="text-gradient">{w}</span> : w}
            </span>
          ))}
        </Marquee>
      </section>

      {/* STORY INTRO */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-40">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— chapter 01 / the why</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display mt-6 text-3xl leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            I make music because <span className="text-gradient">feelings need somewhere to go.</span> The sad ones,
            the loud ones, the ones we don't have words for yet — they all get a chord, a verse, a beat.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { t: "5+ yrs", l: "Cathedral & John Connon Choir" },
            { t: "25/India", l: "Selected · GMI × Berklee workshop" },
            { t: "2 originals", l: "Falling For You · Love Me Bold" },
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 0.1}>
              <div className="grain-card group rounded-3xl border border-border bg-card/40 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-magenta">
                <p className="font-display text-5xl text-gradient md:text-6xl">{s.t}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CHAPTERS NAV */}
      <section className="mx-auto max-w-7xl px-5 pb-32 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— take a tour</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl">pick a track <span className="text-gradient italic">↓</span></h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { to: "/about", n: "01", t: "About", d: "Where I come from, what I'm chasing." },
            { to: "/music", n: "02", t: "Music", d: "Training, performance, the practice." },
            { to: "/songs", n: "03", t: "Songs", d: "Originals with their stories attached." },
            { to: "/projects", n: "04", t: "Projects", d: "Stages, choirs, collabs, sets." },
            { to: "/mind", n: "05", t: "Music & Mind", d: "Why sound moves us — the psychology bit." },
            { to: "/beyond", n: "06", t: "Beyond", d: "Poetry, scuba, mountains, kids who deserve more." },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 0.05}>
              <Link
                to={c.to}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-card/30 p-6 transition hover:border-cyan hover:bg-card/60"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-muted-foreground">{c.n}</span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan" />
                </div>
                <h3 className="font-display mt-10 text-3xl md:text-4xl">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <Waveform bars={28} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
