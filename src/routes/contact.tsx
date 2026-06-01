import { createFileRoute } from "@tanstack/react-router";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import { Instagram, Youtube, Music2, Mail, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shanaya Kacheria" },
      { name: "description", content: "For performances, collaborations and creative projects." },
      { property: "og:title", content: "Contact — Shanaya" },
      { property: "og:description", content: "Let's make something." },
    ],
  }),
  component: ContactPage,
});

const socials = [
  { icon: Instagram, label: "Instagram", handle: "@shanaya", href: "#" },
  { icon: Youtube, label: "YouTube", handle: "Shanaya Kacheria", href: "#" },
  { icon: Music2, label: "Spotify", handle: "Shanaya Kacheria", href: "#" },
  { icon: Mail, label: "Email", handle: "hello@shanaya.music", href: "mailto:hello@shanaya.music" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="contact · 07"
        title={
          <>
            let's make <span className="text-gradient italic">something</span> that feels like something.
          </>
        }
        intro="For performances, collaborations, songwriting sessions, DJ bookings and creative projects — say hi."
      />

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {socials.map(({ icon: Icon, label, handle, href }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <motion.a
                href={href}
                whileHover={{ y: -4 }}
                className="group flex items-center justify-between rounded-3xl border border-border bg-card/40 p-4 sm:p-6 transition hover:border-magenta md:p-8 overflow-hidden"
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-background/60 text-magenta">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-muted-foreground truncate">{label}</p>
                    <p className="font-display text-lg sm:text-2xl md:text-3xl truncate">{handle}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-magenta ml-2" />
              </motion.a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-32 text-center md:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">— sign off</p>
          <p className="font-display mt-6 text-3xl leading-tight md:text-5xl">
            Creating music that doesn't just <span className="text-gradient italic">sound</span> meaningful,
            but feels meaningful.
          </p>
        </Reveal>
      </section>
    </>
  );
}