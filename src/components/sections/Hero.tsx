"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { content } from "@/data/content";

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), { ssr: false });

export function Hero() {
  return (
    <header className="relative flex min-h-[92vh] w-full items-center overflow-hidden rounded-2xl border border-zinc-800/40 bg-gradient-to-b from-[#090a0f] to-black px-6 py-24 sm:px-10">
      <HeroCanvas />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 18 }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400"
        >
          {content.title || "Venture Studio"}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 16 }}
          className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl"
        >
          {content.name || "Clever Ventures"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 18 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg"
        >
          {content.about ||
            "We partner with founders to design, build, and launch standout digital products."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 120, damping: 18 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Work
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          {content.email && (
            <a
              href={`mailto:${content.email}`}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur transition hover:text-white"
            >
              Contact
            </a>
          )}
        </motion.div>
      </div>
    </header>
  );
}
