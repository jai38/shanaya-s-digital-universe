import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pb-20 md:pt-24">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        — {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="font-display mt-4 text-5xl font-medium leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl"
      >
        {title}
      </motion.h1>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          {intro}
        </motion.p>
      )}
      {children}
    </section>
  );
}