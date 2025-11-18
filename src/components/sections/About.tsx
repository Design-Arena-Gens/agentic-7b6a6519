"use client";

import { Section } from "@/components/ui/Section";
import { content } from "@/data/content";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" title="About">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="max-w-3xl text-pretty text-lg leading-8 text-zinc-700 dark:text-zinc-300"
      >
        {content.about || "About content pending. Paste exact text from the source site."}
      </motion.p>
    </Section>
  );
}
