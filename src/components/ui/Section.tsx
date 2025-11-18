"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function Section({ id, title, children }: PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="relative w-full py-24 sm:py-28 md:py-32">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="mb-8 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
      >
        {title}
      </motion.h2>
      <div className="relative">{children}</div>
    </section>
  );
}
