"use client";

import { Section } from "@/components/ui/Section";
import { content } from "@/data/content";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <Section id="projects" title="Selected Work">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {(content.projects?.length ? content.projects : placeholderProjects).map((p, idx) => (
          <motion.a
            key={p.title + idx}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: idx * 0.05, type: "spring", stiffness: 120, damping: 18 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/40 bg-zinc-50/60 shadow-2xl backdrop-blur dark:bg-white/5"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white drop-shadow-md">{p.title}</h3>
              <p className="mt-2 max-w-prose text-sm text-white/85 drop-shadow">
                {p.description}
              </p>
              {p.tags && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

const placeholderProjects = [
  {
    title: "Cinematic Web Experience",
    description: "Immersive 3D-driven marketing site using Next.js, R3F, and Framer Motion.",
    image: "/window.svg",
    href: "#",
    tags: ["Next.js", "Three.js", "Framer Motion"],
  },
  {
    title: "Product Design System",
    description: "Scalable component library with motion semantics and modern theming.",
    image: "/globe.svg",
    href: "#",
    tags: ["Design Systems", "Components"],
  },
];
