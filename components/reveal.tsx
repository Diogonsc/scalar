"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.2, 0.8, 0.2, 1] as const;

const offsets = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
} as const;

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof offsets;
}) {
  const reduce = useReducedMotion();
  const from = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
