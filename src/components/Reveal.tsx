import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = { children: ReactNode; delay?: number; y?: number; className?: string } & Omit<MotionProps, "children">;

export default function Reveal({ children, delay = 0, y = 30, className, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}