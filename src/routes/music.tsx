import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import Waveform from "@/components/Waveform";
import { Mic2, Disc3, Music, Headphones, Users, Radio } from "lucide-react";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music & Performance — Shanaya Kacheria" },
      { name: "description", content: "Vocal performance, original songs, DJ sets, choir, a cappella and serious training behind it all." },
      { property: "og:title", content: "Music & Performance — Shanaya" },
      { property: "og:description", content: "What I do on a mic, at a piano, behind a deck." },
    ],
  }),
  component: MusicPage,
});

const skills = [
  { icon: Mic2, t: "Vocal performance", d: "Live, studio, intimate or full-throated.", span: "md:col-span-2 md:row-span-2" },
  { icon: Music, t: "Original songs", d: "Lyrics + melody + emotional autopsy.", span: "" },
  { icon: Disc3, t: "DJ sets", d: "Curated journeys, not random bangers.", span: "md:col-span-2" },
  { icon: Users, t: "A cappella & choir", d: "Years of harmony with a room full of voices.", span: "" },
  { icon: Headphones, t: "Covers & reinterpretations", d: "Putting a personal lens on songs that built me.", span: "" },
  { icon: Radio, t: "Live performance", d: "Stages, open mics, school halls, anywhere with a plug.", span: "md:col-span-2" },
];

const training = [
  "Trinity Grade 8 · Vocal Pop & Jazz",
  "Rock School Level 7 · Vocal Pop & Jazz",
  "Rock School Level 8 · Vocal Pop & Jazz",
  "Piano · Trinity Level 1",
  "Pro DJ Certification · The Music Inc. / DJ Suketu",
  "A Cappella India · 1 year",
];

function MusicPage() {
  return (
    <>
      <PageHero
        eyebrow="music · 02"
        title={<>what I do <span className="text-gradient italic">on & off</span> the mic.</>}
        intro="Five modes of musical practice — all stitched together by the same obsession with how sound makes people feel."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map(({ icon: Icon, t, d, span }, i) => (
            <Reveal key={t} delay={i * 0.05} className={`${span}`}>
              <div className="group grain-card relative h-full overflow-hidden rounded-3xl border border-border bg-card/40 p-6 transition hover:-translate-y-1 hover:border-magenta">
                <Icon className="h-7 w-7 text-magenta transition group-hover:scale-110" />
                <h3 className="font-display mt-4 text-2xl md:text-3xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-magenta/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-ink py-10">
        <Marquee>
          {training.concat(training).map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-magenta" /> {t}
            </span>
          ))}
        </Marquee>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:grid md:grid-cols-2 md:gap-16 md:px-8 md:py-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— certified, technically</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl">the <span className="text-gradient italic">credentials</span> bit.</h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Training so the instinct has somewhere to land. Every certification below is a year (or two) of repetition, theory and unglamorous practice.
          </p>
          <Waveform bars={56} />
        </Reveal>
        <ul className="mt-10 space-y-3 md:mt-0">
          {training.map((t, i) => (
            <Reveal key={t} delay={i * 0.05}>
              <li className="flex items-center justify-between rounded-2xl border border-border bg-card/40 px-5 py-4 transition hover:border-cyan">
                <span className="font-display text-lg md:text-xl">{t}</span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}