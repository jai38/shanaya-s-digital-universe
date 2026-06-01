import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Sticker from "@/components/Sticker";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shanaya Kacheria" },
      { name: "description", content: "A short story about Shanaya — singer, songwriter, DJ, and a curious student of how music moves people." },
      { property: "og:title", content: "About — Shanaya Kacheria" },
      { property: "og:description", content: "An artist exploring music, memory and the human mind." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "early", t: "First time at a mic", d: "School choir — Cathedral & John Connon. Discovered that singing in a room of people made silence feel different." },
  { y: "training", t: "Trinity Grade 8 · Vocal Pop & Jazz", d: "Plus Rock School Level 7 & 8. Years of technique so I could stop thinking about technique." },
  { y: "piano", t: "Trinity Level 1 · Piano", d: "Because melody hits different when your hands wrote it." },
  { y: "dj", t: "Pro DJ Certification · The Music Inc. / DJ Suketu", d: "Learning how to read a room and bend its energy with a fader." },
  { y: "berklee", t: "GMI × Berklee — selected among 25 from India", d: "A week of being surrounded by people who think about music the way I do." },
  { y: "now", t: "Originals + sets + the in-between", d: "Falling For You, Love Me Bold, and whatever's next." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="about · 01"
        title={<>I think in <span className="text-gradient italic">choruses.</span></>}
        intro="Shanaya Kacheria — singer, songwriter, composer, DJ, and a quietly obsessive student of how a single chord can rearrange a person's afternoon."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-[1.1fr_1fr] md:px-8">
        <Reveal>
          <div className="grain-card relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border">
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-magenta/30 via-ink to-cyan/30">
              <div className="text-center">
                <p className="font-display text-[18vw] leading-none text-foreground/10 md:text-[10rem]">SK</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">portrait · slot</p>
              </div>
            </div>
            <div className="absolute left-5 top-5"><Sticker variant="amber" rotate={-8}>real photo ↪</Sticker></div>
            <div className="absolute bottom-5 right-5"><Sticker variant="cyan" rotate={6}>drop yours</Sticker></div>
          </div>
        </Reveal>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
          <Reveal><p>I grew up writing little melodies in the margins of textbooks. Somewhere along the way I realised I wasn't only interested in <em>making</em> music — I was obsessed with <span className="text-gradient">what it does to us</span>. Why a sad song feels like a hug. Why a beat can change your posture.</p></Reveal>
          <Reveal delay={0.1}><p>So I trained. Voice. Piano. DJing. A cappella. Choir. Stages. Studios. Every format teaches you a different way to listen.</p></Reveal>
          <Reveal delay={0.2}><p>Now I write and perform songs that try to put words to the feelings we almost-but-not-quite have — and I curate sets that try to make rooms feel like one organism for a few hours.</p></Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2 pt-2">
              <Sticker variant="magenta">curious</Sticker>
              <Sticker variant="cyan" rotate={3}>introspective</Sticker>
              <Sticker variant="amber" rotate={-3}>kinda loud</Sticker>
              <Sticker variant="ink">always writing</Sticker>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-32 md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— the long way here</p>
          <h2 className="font-display mt-4 text-4xl md:text-6xl">a timeline of <span className="text-gradient italic">listening.</span></h2>
        </Reveal>

        <ol className="relative mt-16 space-y-10 border-l border-border pl-6 md:pl-10">
          {timeline.map((step, i) => (
            <Reveal key={step.t} delay={i * 0.05}>
              <li className="relative">
                <motion.span
                  className="absolute -left-[32px] top-2 h-4 w-4 rounded-full gradient-iridescent md:-left-[48px]"
                  whileInView={{ scale: [0, 1.4, 1] }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                />
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{step.y}</p>
                <h3 className="font-display mt-1 text-2xl md:text-3xl">{step.t}</h3>
                <p className="mt-2 max-w-2xl text-foreground/75">{step.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}