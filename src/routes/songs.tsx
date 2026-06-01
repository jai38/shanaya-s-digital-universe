import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import Waveform from "@/components/Waveform";
import { Play } from "lucide-react";

export const Route = createFileRoute("/songs")({
  head: () => ({
    meta: [
      { title: "Original Songs — Shanaya Kacheria" },
      { name: "description", content: "Falling For You and Love Me Bold — two originals about love, vulnerability and the chaos in between." },
      { property: "og:title", content: "Original Songs — Shanaya" },
      { property: "og:description", content: "Two originals, two stories." },
    ],
  }),
  component: SongsPage,
});

const songs = [
  {
    n: "01",
    title: "Falling For You",
    theme: "First love · vulnerability",
    blurb:
      "A song about the exact moment you realise you're already in — the small fall before the big drop. Soft, sincere, and a little terrified.",
    lyric: "i was guarding the door / didn't notice you / were already inside.",
    accent: "from-magenta/40 via-magenta/10 to-transparent",
    sticker: "magenta" as const,
  },
  {
    n: "02",
    title: "Love Me Bold",
    theme: "Vulnerability · emotional chaos · the need for connection",
    blurb:
      "Not the polished version of love — the messy, loud, please-don't-be-careful version. A request to be wanted out loud.",
    lyric: "don't whisper how you feel / shout it / i need to hear it from across the room.",
    accent: "from-cyan/40 via-cyan/10 to-transparent",
    sticker: "cyan" as const,
  },
];

function SongsPage() {
  return (
    <>
      <PageHero
        eyebrow="songs · 03"
        title={<>two songs, <span className="text-gradient italic">two confessions.</span></>}
        intro="Originals where I tried to put words to feelings that don't usually behave."
      />

      <section className="mx-auto max-w-7xl space-y-24 px-5 pb-32 md:px-8">
        {songs.map((s, i) => (
          <Reveal key={s.title} delay={0.05}>
            <article className={`group relative overflow-hidden rounded-[2.5rem] border border-border bg-card/40 p-6 md:p-12`}>
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.accent}`} />
              <div className="relative grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
                {/* art */}
                <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-ink">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative h-3/4 w-3/4 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 shadow-2xl animate-spinslow">
                      <div className="absolute inset-[14%] rounded-full border border-border" />
                      <div className="absolute inset-[28%] rounded-full border border-border" />
                      <div className="absolute inset-[42%] rounded-full gradient-iridescent" />
                      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
                    </div>
                  </div>
                  <div className="absolute left-4 top-4"><Sticker variant={s.sticker}>{s.n} · original</Sticker></div>
                </div>

                {/* meta */}
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{s.theme}</p>
                  <h2 className="font-display mt-3 text-4xl sm:text-5xl leading-none tracking-tight md:text-7xl break-words">
                    {s.title}
                  </h2>
                  <p className="mt-6 max-w-md text-base sm:text-lg text-foreground/80">{s.blurb}</p>

                  <blockquote className="mt-8 border-l-2 border-magenta pl-4 font-display text-lg sm:text-xl italic text-foreground/90 md:text-2xl">
                    "{s.lyric}"
                  </blockquote>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button className="group/btn inline-flex items-center gap-3 rounded-full bg-foreground px-4 sm:px-5 py-3 text-sm font-medium text-background transition hover:scale-105 shrink-0">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground shrink-0">
                        <Play className="h-3 w-3 fill-current" />
                      </span>
                      Play preview
                    </button>
                    <span className="font-mono text-[10px] sm:text-xs text-muted-foreground truncate max-w-full">audio embed slot · drop Spotify link</span>
                  </div>

                  <div className="mt-6 max-w-md overflow-hidden">
                    <Waveform bars={56} />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  );
}