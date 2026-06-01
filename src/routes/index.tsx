import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import Waveform from "@/components/Waveform";
import {
  ArrowUpRight,
  Headphones,
  Sparkles,
  Mic2,
  Users,
  Waves,
  Mountain,
  Feather,
  HeartHandshake,
  Play,
  Volume2,
  Brain,
  Disc3,
  Radio,
  Music,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanaya Kacheria — Singer • Songwriter • Composer • DJ" },
      { name: "description", content: "Singer, songwriter, composer and DJ exploring how music shapes emotion, memory and the human mind. Homepage V2." },
      { property: "og:title", content: "Shanaya Kacheria — Digital Universe" },
      { property: "og:description", content: "Music that doesn't just sound meaningful — it feels meaningful. Experience Homepage V2." },
      { property: "og:image", content: "/shanaya-s-digital-universe/images/shanaya_hero_v2.png" },
    ],
  }),
  component: IndexV2,
});

const roles = ["singer.", "songwriter.", "composer.", "dj.", "storyteller."];

// Helper: cursor-following spotlight wrapper
function SpotlightCard({
  children,
  className = "",
  glowColor = "var(--cyan)",
  to,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  to?: string;
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const content = (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card/30 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-card/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(150px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}18, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );

  if (to) {
    return <Link to={to} className="block no-underline">{content}</Link>;
  }
  return content;
}

function IndexV2() {
  // Roles animation index
  const [roleIndex, setRoleIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  // Chapter 02: Music section DJ deck faders
  const [vocalFader, setVocalFader] = useState(95);
  const [compFader, setCompFader] = useState(88);
  const [djFader, setDjFader] = useState(100);

  // Chapter 05: Music & Mind Interactive Sandbox
  const [activeMindInsight, setActiveMindInsight] = useState<"sad" | "loop" | "rhythm">("sad");

  // Chapter 03: Songs Playing Preview States
  const [playingSong, setPlayingSong] = useState<string | null>(null);

  const mindInsights = {
    sad: {
      n: "i",
      title: "Why sad songs comfort us",
      body: "A sad song isn't sadness amplified — it's sadness <em>recognized</em>. When a melody names what you couldn't, the lonely part of the feeling quietly leaves the room.",
      accent: "var(--magenta)",
      gradient: "from-magenta/30 via-magenta/5 to-transparent",
      speed: 16,
    },
    loop: {
      n: "ii",
      title: "Why we replay certain tracks",
      body: "Songs are emotional bookmarks. We don't just remember a track — we remember <em>who we were</em> when we first looped it. Replaying is time travel that doesn't ask permission.",
      accent: "var(--cyan)",
      gradient: "from-cyan/30 via-cyan/5 to-transparent",
      speed: 8,
    },
    rhythm: {
      n: "iii",
      title: "How rhythm changes mood",
      body: "Before melody, before lyric, there is rhythm — and the body responds first. A slower pulse calms your breathing. A heavier beat re-shapes how you walk into a room.",
      accent: "var(--amber)",
      gradient: "from-amber/30 via-amber/5 to-transparent",
      speed: 4,
    },
  };

  const activeInsight = mindInsights[activeMindInsight];

  return (
    <div className="space-y-12 overflow-x-hidden">
      {/* 1. PHOTO-DRIVEN HERO SECTION (Lyra Health inspired, split desktop) */}
      <section className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          {/* Left Column: Text & CTAs */}
          <div className="space-y-8 min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <Sticker variant="magenta"><Sparkles className="h-3 w-3" /> portfolio · v2.0</Sticker>
              <Sticker variant="cyan" rotate={-4}>ear for the unsaid ◉</Sticker>
            </div>

            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm"
              >
                — Shanaya Kacheria · b. Mumbai
              </motion.p>

              <h1 className="font-display text-[12vw] font-medium leading-[0.9] tracking-tight sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7rem] break-words">
                shanaya <br />
                <span className="text-gradient italic">kacheria.</span>
              </h1>

              {/* Dynamic role vertical roll */}
              <div className="flex items-center gap-3 pt-2 text-xl text-muted-foreground md:text-2xl">
                <span>I am a</span>
                <span className="relative inline-flex h-10 overflow-hidden font-display text-2xl font-medium text-foreground md:text-3xl">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roleIndex}
                      initial={{ y: 25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -25, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl text-balance">
              An artist obsessed with the space <em className="text-gradient not-italic">between</em> sound and feeling — how a melody holds a memory, how a rhythm bends a mood, and how sound shapes the mind.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/songs"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:scale-105"
              >
                <Headphones className="h-4 w-4" /> Listen to my songs
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                to="/mind"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-6 py-4 text-sm font-medium backdrop-blur transition hover:border-magenta hover:text-magenta"
              >
                Explore Music & Mind →
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Photo asset & integrated dynamic widgets */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative blurred backdrop glow */}
              <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-tr from-magenta/20 to-cyan/20 blur-3xl opacity-80" />

              {/* Main Styled Photo Frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-border/80 bg-ink shadow-2xl glow-magenta/10">
                <img
                  src="/shanaya-s-digital-universe/images/shanaya_hero_v2.png"
                  alt="Shanaya Kacheria Portrait V2"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />

                {/* Aesthetic Dark Gradient Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Widget 1: Real-time Soundwave bouncing indicator (bottom left) */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3 backdrop-blur-xl transition hover:bg-background/80">
                  <div className="flex h-5 items-end gap-[3px]">
                    {[1, 2, 3, 4, 5, 4, 3, 2, 3, 4].map((h, i) => (
                      <span
                        key={i}
                        className="w-[2px] rounded-full bg-magenta"
                        style={{
                          height: "100%",
                          transformOrigin: "bottom",
                          animation: `floaty 1s ease-in-out infinite alternate`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-foreground">
                    ambient state: humming ◉
                  </span>
                </div>

                {/* Floating Widget 2: Spinning Vinyl icon (top right) */}
                <div className="absolute right-6 top-6 animate-spinslow rounded-full bg-foreground/10 p-2 backdrop-blur-md border border-foreground/10">
                  <Disc3 className="h-7 w-7 text-cyan" />
                </div>
              </div>

              {/* Decorative side badge */}
              <div className="absolute -bottom-5 -right-4 rotate-6 hidden sm:block">
                <Sticker variant="amber">Selected GMI × Berklee ✦</Sticker>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-ink py-6">
        <Marquee>
          {[
            "singer",
            "✦",
            "songwriter",
            "✦",
            "composer",
            "✦",
            "dj",
            "✦",
            "performer",
            "✦",
            "trinity grade 8",
            "✦",
            "berklee selected",
            "✦",
          ].map((w, i) => (
            <span key={i} className="font-display text-3xl md:text-5xl">
              {w === "✦" ? <span className="text-gradient">{w}</span> : w}
            </span>
          ))}
        </Marquee>
      </section>

      {/* CHAPTER 01: ABOUT SECTION (Journal Style with sunlit portrait) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left: Polaroid-skewed Portrait */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Reveal>
              <div className="group relative">
                {/* Dynamic border frame that rotates/straightens on hover */}
                <div className="relative aspect-[4/5] rotate-[-2deg] rounded-[2.5rem] border-4 border-card bg-card p-4 shadow-xl transition-all duration-500 group-hover:rotate-0 group-hover:scale-[1.02]">
                  <div className="h-[88%] overflow-hidden rounded-2xl border border-border">
                    <img
                      src="/shanaya-s-digital-universe/images/shanaya_about.png"
                      alt="Shanaya natural sunny portrait"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  {/* Polaroid caption region */}
                  <div className="mt-4 flex items-center justify-between px-2 font-display text-xl text-muted-foreground italic">
                    <span>mumbai days.</span>
                    <span className="font-mono text-xs uppercase tracking-widest not-italic">cap: 01</span>
                  </div>
                </div>

                {/* Floating stickers decoration */}
                <div className="absolute left-[-16px] top-6 -rotate-12">
                  <Sticker variant="amber">real portrait</Sticker>
                </div>
                <div className="absolute right-[-10px] bottom-12 rotate-12">
                  <Sticker variant="cyan">chapter 01</Sticker>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Cozy Narrative */}
          <div className="space-y-6 min-w-0">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — chapter 01 / about me
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl lg:text-6xl">
                I think in <span className="text-gradient italic">choruses.</span>
              </h2>
            </Reveal>

            <div className="space-y-6 text-lg leading-relaxed text-foreground/85 text-balance">
              <Reveal delay={0.05}>
                <p>
                  I grew up writing little melodies in the margins of textbooks. Somewhere along the way, I realized I wasn’t only interested in <em>making</em> music — I was obsessed with <span className="text-gradient">what it does to us</span>. Why a sad song feels like a hug. Why a heavy bass beat can rearrange your posture.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  So I trained. Voice. Piano. DJing. Choir. A cappella. Every format taught me a different way to listen to the room, to the silence, and to the voices surrounding me.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="pt-2">
              <div className="flex flex-wrap gap-2">
                <Sticker variant="magenta">curious</Sticker>
                <Sticker variant="cyan" rotate={3}>introspective</Sticker>
                <Sticker variant="amber" rotate={-3}>kinda loud</Sticker>
                <Sticker variant="ink">always writing</Sticker>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur hover:border-cyan hover:text-cyan"
              >
                Deep dive into my story →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTER 02: MUSIC SECTION (Interactive DJ Deck Faders) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: Drag deck */}
          <Reveal className="w-full min-w-0">
            <div className="grain-card relative rounded-[2.5rem] border border-border bg-card/25 p-5 shadow-xl backdrop-blur-md sm:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/5 via-transparent to-cyan/5 pointer-events-none" />

              <div className="relative flex items-center justify-between pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <Radio className="h-5 w-5 text-magenta animate-pulse" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Interactive Mix Deck
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-ping" />
                  <span className="h-2 w-2 rounded-full bg-cyan" />
                </div>
              </div>

              {/* Sliders grid */}
              <div className="mt-8 space-y-8">
                {/* Slider 1 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mic2 className="h-4 w-4 text-cyan" />
                      <span className="font-display text-lg">Vocal Depth</span>
                    </div>
                    <span className="font-mono text-sm text-gradient font-bold">{vocalFader}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={vocalFader}
                    onChange={(e) => setVocalFader(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-border cursor-pointer accent-cyan"
                  />
                  <p className="text-xs text-muted-foreground font-mono">
                    Pop & Jazz clarity · Intimate room acoustics
                  </p>
                </div>

                {/* Slider 2 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Music className="h-4 w-4 text-magenta" />
                      <span className="font-display text-lg">Original Songwriting</span>
                    </div>
                    <span className="font-mono text-sm text-gradient font-bold">{compFader}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={compFader}
                    onChange={(e) => setCompFader(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-border cursor-pointer accent-magenta"
                  />
                  <p className="text-xs text-muted-foreground font-mono">
                    Chord structures · Vulnerable lyric weights
                  </p>
                </div>

                {/* Slider 3 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Disc3 className="h-4 w-4 text-amber" />
                      <span className="font-display text-lg">DJ Deck Energy</span>
                    </div>
                    <span className="font-mono text-sm text-gradient font-bold">{djFader}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={djFader}
                    onChange={(e) => setDjFader(Number(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-border cursor-pointer accent-amber"
                  />
                  <p className="text-xs text-muted-foreground font-mono">
                    Fader drop energy · BPM crowd-reading sync
                  </p>
                </div>
              </div>

              {/* Dynamic Equalizer visualization */}
              <div className="mt-8 pt-6 border-t border-border flex items-end justify-between h-12 px-2 gap-[4px] overflow-hidden">
                {Array.from({ length: 24 }).map((_, i) => {
                  // Speed & height scales on fader metrics
                  const heightFactor = (vocalFader * 0.4 + compFader * 0.3 + djFader * 0.3) / 100;
                  const randomSpeed = 0.5 + Math.random() * 0.8;
                  return (
                    <div
                      key={i}
                      className="w-full rounded-t-sm"
                      style={{
                        backgroundColor:
                          i % 3 === 0
                            ? "var(--magenta)"
                            : i % 3 === 1
                              ? "var(--cyan)"
                              : "var(--amber)",
                        height: `${Math.max(10, Math.floor(Math.sin(i) * 35 + 20) * heightFactor)}%`,
                        animation: `floaty ${randomSpeed}s ease-in-out infinite alternate`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Right: Intro & Credentials */}
          <div className="space-y-6 min-w-0">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                — chapter 02 / practice & music
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl lg:text-6xl">
                what I do on <span className="text-gradient italic">& off</span> the mic.
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                Technical repeating, fader controls, piano composition. I train so the instincts have somewhere reliable to land.
              </p>
            </Reveal>

            {/* Metrics transparent cards */}
            <div className="grid gap-3 pt-2">
              <Reveal delay={0.05}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card/30 px-5 py-4 transition hover:border-magenta hover:bg-card/50">
                  <div className="flex items-start sm:items-center gap-3 min-w-0 w-full sm:w-auto">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1 sm:pt-0">01</span>
                    <span className="font-display text-base sm:text-lg text-balance">Trinity Grade 8 · Vocal Pop & Jazz</span>
                  </div>
                  <Sticker variant="magenta" className="shrink-0 self-start sm:self-auto">classical</Sticker>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card/30 px-5 py-4 transition hover:border-cyan hover:bg-card/50">
                  <div className="flex items-start sm:items-center gap-3 min-w-0 w-full sm:w-auto">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1 sm:pt-0">02</span>
                    <span className="font-display text-base sm:text-lg text-balance">GMI × Berklee Selection</span>
                  </div>
                  <Sticker variant="cyan" className="shrink-0 self-start sm:self-auto">berklee</Sticker>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card/30 px-5 py-4 transition hover:border-amber hover:bg-card/50">
                  <div className="flex items-start sm:items-center gap-3 min-w-0 w-full sm:w-auto">
                    <span className="font-mono text-xs text-muted-foreground shrink-0 pt-1 sm:pt-0">03</span>
                    <span className="font-display text-base sm:text-lg text-balance">Pro DJ Certification · Suketu</span>
                  </div>
                  <Sticker variant="amber" className="shrink-0 self-start sm:self-auto">sets</Sticker>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2} className="pt-2">
              <Link
                to="/music"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background hover:opacity-90 transition"
              >
                Explore Music & Credentials →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CHAPTER 03: SONGS SECTION (Spinning Vinyl record showcase) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — chapter 03 / original songs
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
              two songs, <span className="text-gradient italic">two confessions.</span>
            </h2>
            <p className="text-muted-foreground text-balance">
              Melody is where the messy parts of our mind get organized. Hover over the tracks to pull out the records.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Song 1: Falling For You */}
          <Reveal className="w-full min-w-0">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card/35 p-6 md:p-8 hover:border-magenta/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-magenta/15 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Vinyl Container with slide out hover */}
                <div className="relative w-36 h-36 shrink-0 mx-auto sm:mx-0">
                  {/* Outer Vinyl disc (slides out on hover) */}
                  <div className="absolute inset-0 rounded-full bg-[#0d0d18] border border-foreground/10 shadow-2xl flex items-center justify-center transition-all duration-700 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12 group-hover:rotate-180">
                    {/* Vinyl lines */}
                    <div className="absolute inset-4 rounded-full border border-foreground/5" />
                    <div className="absolute inset-8 rounded-full border border-foreground/5" />
                    <div className="absolute inset-12 rounded-full border border-foreground/5" />
                    {/* Vinyl Center label */}
                    <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-magenta to-indigo-500 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-background" />
                    </div>
                  </div>

                  {/* Album Cover wrapper */}
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border bg-ink shadow-lg flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-magenta/40 to-indigo-900/60" />
                    <Music className="h-8 w-8 text-foreground/40 group-hover:scale-110 transition duration-300" />
                    <div className="absolute left-2 top-2">
                      <Sticker variant="magenta">01 · original</Sticker>
                    </div>
                  </div>
                </div>

                {/* Song info */}
                <div className="space-y-3 text-center sm:text-left min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                    First love · vulnerability
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl truncate">Falling For You</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                    The exact moment you realize you're already inside — the small fall before the big drop.
                  </p>
                </div>
              </div>

              {/* Dynamic interactive lyric blockquote */}
              <blockquote className="relative mt-8 border-l-2 border-magenta pl-4 font-display text-lg italic text-foreground/80 transition-all duration-300 group-hover:text-gradient group-hover:scale-[1.01] text-balance">
                "i was guarding the door / didn't notice you / were already inside."
              </blockquote>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={() => setPlayingSong(playingSong === "falling" ? null : "falling")}
                  className="group/btn inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:scale-105 shrink-0"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground shrink-0">
                    <Play className={`h-3 w-3 fill-current ${playingSong === "falling" ? "animate-pulse" : ""}`} />
                  </span>
                  {playingSong === "falling" ? "Humming preview..." : "Play preview"}
                </button>
                <span className="font-mono text-xs text-muted-foreground text-center truncate">
                  {playingSong === "falling" ? "◉ playing live stream" : "Spotify embed slot"}
                </span>
              </div>

              <div className="mt-6">
                <Waveform bars={36} active={playingSong === "falling"} />
              </div>
            </div>
          </Reveal>

          {/* Song 2: Love Me Bold */}
          <Reveal className="w-full min-w-0">
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card/35 p-6 md:p-8 hover:border-cyan/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/15 via-transparent to-transparent pointer-events-none" />

              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Vinyl Container with slide out hover */}
                <div className="relative w-36 h-36 shrink-0 mx-auto sm:mx-0">
                  {/* Outer Vinyl disc (slides out on hover) */}
                  <div className="absolute inset-0 rounded-full bg-[#0d0d18] border border-foreground/10 shadow-2xl flex items-center justify-center transition-all duration-700 ease-out group-hover:translate-x-6 sm:group-hover:translate-x-12 group-hover:rotate-180">
                    {/* Vinyl lines */}
                    <div className="absolute inset-4 rounded-full border border-foreground/5" />
                    <div className="absolute inset-8 rounded-full border border-foreground/5" />
                    <div className="absolute inset-12 rounded-full border border-foreground/5" />
                    {/* Vinyl Center label */}
                    <div className="absolute inset-[36%] rounded-full bg-gradient-to-br from-cyan to-indigo-500 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-background" />
                    </div>
                  </div>

                  {/* Album Cover wrapper */}
                  <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-border bg-ink shadow-lg flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan/40 to-teal-900/60" />
                    <Music className="h-8 w-8 text-foreground/40 group-hover:scale-110 transition duration-300" />
                    <div className="absolute left-2 top-2">
                      <Sticker variant="cyan">02 · original</Sticker>
                    </div>
                  </div>
                </div>

                {/* Song info */}
                <div className="space-y-3 text-center sm:text-left min-w-0">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block">
                    Vulnerability · connection
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl truncate">Love Me Bold</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                    Not the polished version of love — the messy, loud, please-don't-be-careful version.
                  </p>
                </div>
              </div>

              {/* Dynamic interactive lyric blockquote */}
              <blockquote className="relative mt-8 border-l-2 border-cyan pl-4 font-display text-lg italic text-foreground/80 transition-all duration-300 group-hover:text-gradient group-hover:scale-[1.01] text-balance">
                "don't whisper how you feel / shout it / i need to hear it from across the room."
              </blockquote>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={() => setPlayingSong(playingSong === "lovemebold" ? null : "lovemebold")}
                  className="group/btn inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:scale-105 shrink-0"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground shrink-0">
                    <Play className={`h-3 w-3 fill-current ${playingSong === "lovemebold" ? "animate-pulse" : ""}`} />
                  </span>
                  {playingSong === "lovemebold" ? "Humming preview..." : "Play preview"}
                </button>
                <span className="font-mono text-xs text-muted-foreground text-center truncate">
                  {playingSong === "lovemebold" ? "◉ playing live stream" : "Spotify embed slot"}
                </span>
              </div>

              <div className="mt-6">
                <Waveform bars={36} active={playingSong === "lovemebold"} />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-12">
          <Reveal>
            <Link
              to="/songs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:border-cyan hover:text-cyan transition"
            >
              Explore Lyrics & Complete Stories →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CHAPTER 04: PROJECTS SECTION (Stage Spotlight cursor grids) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <Reveal className="w-full min-w-0">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-magenta/20 bg-gradient-to-br from-card/30 via-ink to-magenta/5 p-6 md:p-14 mb-16 shadow-xl backdrop-blur-md">
            {/* Background glowing gradients */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-magenta/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />

            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              {/* Left Column: Intimate Narrative of GMI Berklee */}
              <div className="space-y-6 min-w-0">
                <div className="flex flex-wrap gap-2">
                  <Sticker variant="amber" rotate={-2}><Sparkles className="h-3 w-3" /> Berklee Select</Sticker>
                  <Sticker variant="magenta" rotate={3}>1 of 25 from india</Sticker>
                </div>

                <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-balance">
                  The Berklee <span className="text-gradient italic">Intensive.</span>
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed text-balance">
                  A nationwide selection that placed me in a week-long creative pressure cooker. Surrounded by 24 of the most obsessive young vocalists and writers in India, I discovered that music isn't about solo perfection — it's an intense, high-stakes ensemble conversation.
                </p>

                {/* Key experience bullet layouts */}
                <div className="space-y-4 pt-2">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-magenta/10 text-magenta font-mono text-xs font-bold">
                      10h
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-bold">Ensemble Pressure</h4>
                      <p className="text-sm text-muted-foreground text-balance">Daily sight-reading, writing, and conducting rehearsals led directly by Berklee faculty.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-cyan/10 text-cyan font-mono text-xs font-bold">
                      5P
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-bold">Harmonic Breakdown</h4>
                      <p className="text-sm text-muted-foreground text-balance">Deconstructing and executing complex 5-part vocal harmonies on the fly.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Backstage Pass interactive widget */}
              <div className="relative flex items-center justify-center p-2 sm:p-4 overflow-hidden w-full">
                {/* Floating animations with perspective */}
                <div className="group/pass relative w-full max-w-[280px] xs:w-72 h-[410px] rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-card/85 to-white/5 p-6 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-cyan/20 [perspective:1000px] hover:[transform:rotateY(10deg)_rotateX(5deg)] scale-90 sm:scale-100 origin-center">
                  {/* Glowing card outline */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan/20 via-transparent to-magenta/20 opacity-0 group-hover/pass:opacity-100 transition duration-500 pointer-events-none" />

                  {/* Lanyard clip hole */}
                  <div className="mx-auto w-12 h-4 rounded-full bg-background border border-border flex items-center justify-center mb-6">
                    <div className="w-6 h-1.5 rounded-full bg-card" />
                  </div>

                  {/* Pass Header */}
                  <div className="flex justify-between items-start pb-4 border-b border-white/10">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">Curated Event</p>
                      <h4 className="font-display text-lg font-bold">GMI × Berklee</h4>
                    </div>
                    {/* Hologram stamp */}
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan via-magenta to-amber animate-pulse shadow-inner" />
                  </div>

                  {/* Artist Info */}
                  <div className="py-8 space-y-4 min-w-0">
                    <div className="space-y-1">
                      <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Attendee Name</p>
                      <p className="font-display text-2xl font-bold tracking-wide break-words">SHANAYA K.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1 min-w-0">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Role</p>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-magenta truncate">ARTIST / VOCAL</p>
                      </div>
                      <div className="space-y-1 min-w-0">
                        <p className="font-mono text-[8px] uppercase tracking-widest text-muted-foreground">Access Level</p>
                        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan truncate">ALL ACCESS</p>
                      </div>
                    </div>
                  </div>

                  {/* Pass Footer barcode */}
                  <div className="absolute bottom-6 inset-x-6 space-y-3">
                    <div className="flex justify-between font-mono text-[9px] text-muted-foreground border-t border-white/10 pt-3">
                      <span>COHORT 2024</span>
                      <span>NO. 17 / 25</span>
                    </div>
                    {/* Barcode drawing */}
                    <div className="h-8 bg-foreground flex items-center justify-between px-2 rounded-sm overflow-hidden opacity-85 hover:opacity-100 transition">
                      {Array.from({ length: 42 }).map((_, idx) => (
                        <span
                          key={idx}
                          className="h-full bg-background"
                          style={{
                            width: `${idx % 4 === 0 ? "3px" : idx % 5 === 2 ? "1px" : "2px"}`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-center font-mono text-[8px] tracking-[0.2em] text-muted-foreground">
                      *GMI-BERKLEE-SHANAYA-2024*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dynamic spotlights cards grid - Renders remaining 4 cards for V2 projects */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              y: "stage",
              t: "Studio 165 / 166",
              d: "Solo stage performances in front of school crowds. Learning how to control nerves under the lights.",
              accent: "var(--amber)",
            },
            {
              y: "1 year",
              t: "A Cappella India",
              d: "A full year of vocal arrangements, executing rich chord patterns without standard background instruments.",
              accent: "var(--magenta)",
            },
            {
              y: "rehearsal",
              t: "Collaborations",
              d: "Co-writing and jamming with other musicians — testing ideas, finding alternative faders and takes.",
              accent: "var(--cyan)",
            },
            {
              y: "ongoing",
              t: "Curated DJ Sets",
              d: "Bending and mixing electronic elements, building coherent 60-minute emotional tracks for rooms.",
              accent: "var(--amber)",
            },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05} className="w-full">
              <SpotlightCard glowColor={p.accent} to="/projects" className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                      {p.y}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="font-display mt-6 text-2xl group-hover:text-gradient transition duration-300">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-balance">{p.d}</p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/40">
                  <span className="text-xs font-mono text-muted-foreground">spotlight: active</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300" />
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        {/* Dynamic CTA button to explore internal Projects route */}
        <div className="text-center mt-12">
          <Reveal>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:border-cyan hover:text-cyan transition"
            >
              Explore all projects →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CHAPTER 05: MUSIC & MIND SECTION (Emotional Mood Sandbox) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <Reveal className="w-full min-w-0">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card/20 p-6 md:p-14">
            {/* Ambient sliding background glow based on active insight */}
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${activeInsight.gradient} transition-all duration-1000`} />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              {/* Left Column: Sandbox selectors and description */}
              <div className="space-y-6 min-w-0">
                <div className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-cyan" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    Music & Mind Sandbox
                  </span>
                </div>

                <h2 className="font-display text-4xl leading-tight md:text-5xl lg:text-6xl text-balance">
                  music is <span className="text-gradient italic">felt</span>, not just heard.
                </h2>
                <p className="text-muted-foreground text-balance">
                  Notes on how sound waves rearrange our internal wiring. Pick a sandbox filter below to change the mind pulse:
                </p>

                {/* Interactive Mood filter buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={() => setActiveMindInsight("sad")}
                    className={`rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition ${
                      activeMindInsight === "sad"
                        ? "bg-magenta text-background font-bold shadow-lg"
                        : "border border-border bg-background/50 text-foreground hover:bg-background/80"
                    }`}
                  >
                    sad songs comfort
                  </button>
                  <button
                    onClick={() => setActiveMindInsight("loop")}
                    className={`rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition ${
                      activeMindInsight === "loop"
                        ? "bg-cyan text-background font-bold shadow-lg"
                        : "border border-border bg-background/50 text-foreground hover:bg-background/80"
                    }`}
                  >
                    replay bookmarks
                  </button>
                  <button
                    onClick={() => setActiveMindInsight("rhythm")}
                    className={`rounded-full px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition ${
                      activeMindInsight === "rhythm"
                        ? "bg-amber text-background font-bold shadow-lg"
                        : "border border-border bg-background/50 text-foreground hover:bg-background/80"
                    }`}
                  >
                    rhythm body sync
                  </button>
                </div>

                {/* Dynamically swapped text detail */}
                <div className="pt-4 space-y-3 min-h-[140px] transition-all duration-300 min-w-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground block">
                    — insight {activeInsight.n}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl truncate">{activeInsight.title}</h3>
                  <p
                    className="text-lg text-foreground/80 leading-relaxed text-balance"
                    dangerouslySetInnerHTML={{ __html: activeInsight.body }}
                  />
                </div>

                <div className="pt-4">
                  <Link
                    to="/mind"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-90"
                    style={{ color: activeInsight.accent }}
                  >
                    Read all neuropsychology papers →
                  </Link>
                </div>
              </div>

              {/* Right Column: Dynamic Concentric brainwave ripples visualizer */}
              <div className="relative aspect-square max-w-sm mx-auto w-full lg:max-w-none flex items-center justify-center">
                <div className="relative h-4/5 w-4/5">
                  {/* Dynamically pulsating concentric circles based on chosen insight */}
                  {[0, 1, 2, 3, 4].map((k) => (
                    <div
                      key={k}
                      style={{
                        inset: `${k * 9}%`,
                        borderColor: activeInsight.accent,
                        animationDuration: `${activeInsight.speed}s`,
                        opacity: 0.8 - k * 0.15,
                      }}
                      className="absolute rounded-full border border-dashed animate-spinslow"
                    />
                  ))}
                  <div
                    className="absolute inset-[38%] rounded-full blur-3xl opacity-50 transition-colors duration-1000"
                    style={{ backgroundColor: activeInsight.accent }}
                  />
                  <div className="absolute inset-[40%] grid place-items-center rounded-full bg-background border border-border shadow-xl">
                    <span
                      className="font-display text-4xl font-bold italic transition-colors duration-1000"
                      style={{ color: activeInsight.accent }}
                    >
                      {activeInsight.n}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CHAPTER 06: BEYOND SECTION (Overlapping Polaroid scattered scrapbook -> Redesigned Photo-Driven snap carousel) */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — chapter 06 / beyond the songs
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-balance">
              the rest of the <span className="text-gradient italic">person.</span>
            </h2>
            <p className="text-muted-foreground text-balance">
              A heavily photo-driven showcase of life off-stage. Swipe left or right on mobile, explore the blocks on desktop.
            </p>
          </div>
        </Reveal>

        {/* Mobile: Auto-scrolling Marquee ("Movie Tap") */}
        <div className="block md:hidden -mx-5 pb-6">
          <Marquee>
            {[
              {
                title: "Aesthetic Poetry",
                blurb: "rehearsing the words before they earn a melody.",
                tag: "poetry · cap 01",
                img: "/shanaya-s-digital-universe/images/shanaya_poetry.png",
                accent: "border-magenta/30 hover:border-magenta",
                sticker: "magenta" as const,
              },
              {
                title: "Ocean Depths",
                blurb: "the absolute quiet underwater.",
                tag: "scuba · cap 02",
                img: "/shanaya-s-digital-universe/images/shanaya_scuba.png",
                accent: "border-cyan/30 hover:border-cyan",
                sticker: "cyan" as const,
              },
              {
                title: "Snow Slopes",
                blurb: "trusting momentum and speed.",
                tag: "skiing · cap 03",
                img: "/shanaya-s-digital-universe/images/shanaya_skiing.png",
                accent: "border-amber/30 hover:border-amber",
                sticker: "amber" as const,
              },
              {
                title: "Salaam Baalak",
                blurb: "empathy built by showing up.",
                tag: "charity · cap 04",
                img: "/shanaya-s-digital-universe/images/shanaya_community.png",
                accent: "border-magenta/30 hover:border-magenta",
                sticker: "ink" as const,
              },
            ].map((item, i) => (
              <div key={item.title} className="w-[280px] shrink-0">
                <div className={`group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border ${item.accent} bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4">
                    <Sticker variant={item.sticker}>{item.tag}</Sticker>
                  </div>
                  <div className="absolute bottom-6 inset-x-6 p-5 rounded-3xl border border-white/5 bg-background/50 backdrop-blur-xl space-y-2">
                    <h3 className="font-display text-xl tracking-tight text-white group-hover:text-gradient transition duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed text-balance break-words">
                      {item.blurb}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Desktop: Standard Grid */}
        <div className="hidden md:grid gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Aesthetic Poetry",
              blurb: "rehearsing the words before they earn a melody.",
              tag: "poetry · cap 01",
              img: "/shanaya-s-digital-universe/images/shanaya_poetry.png",
              accent: "border-magenta/30 hover:border-magenta",
              sticker: "magenta" as const,
            },
            {
              title: "Ocean Depths",
              blurb: "the absolute quiet underwater.",
              tag: "scuba · cap 02",
              img: "/shanaya-s-digital-universe/images/shanaya_scuba.png",
              accent: "border-cyan/30 hover:border-cyan",
              sticker: "cyan" as const,
            },
            {
              title: "Snow Slopes",
              blurb: "trusting momentum and speed.",
              tag: "skiing · cap 03",
              img: "/shanaya-s-digital-universe/images/shanaya_skiing.png",
              accent: "border-amber/30 hover:border-amber",
              sticker: "amber" as const,
            },
            {
              title: "Salaam Baalak",
              blurb: "empathy built by showing up.",
              tag: "charity · cap 04",
              img: "/shanaya-s-digital-universe/images/shanaya_community.png",
              accent: "border-magenta/30 hover:border-magenta",
              sticker: "ink" as const,
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="w-full">
              <div className={`group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border ${item.accent} bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <Sticker variant={item.sticker}>{item.tag}</Sticker>
                </div>
                <div className="absolute bottom-6 inset-x-6 p-5 rounded-3xl border border-white/5 bg-background/50 backdrop-blur-xl space-y-2">
                  <h3 className="font-display text-2xl tracking-tight text-white group-hover:text-gradient transition duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono leading-relaxed text-balance break-words">
                    {item.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA to Explore Beyond route */}
        <div className="text-center mt-12">
          <Reveal>
            <Link
              to="/beyond"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/30 px-6 py-3.5 text-sm font-semibold backdrop-blur hover:border-amber hover:text-amber transition"
            >
              Explore Scrapbook Details →
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
