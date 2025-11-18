import { Section } from "@/components/ui/Section";
import { content } from "@/data/content";

export function Skills() {
  const items = content.skills?.length ? content.skills : defaultSkills;
  return (
    <Section id="skills" title="Capabilities">
      <ul className="grid grid-cols-2 gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-3 md:grid-cols-4">
        {items.map((s) => (
          <li key={s} className="rounded-xl border border-zinc-800/30 bg-white/50 px-4 py-3 dark:bg-white/5">
            {s}
          </li>
        ))}
      </ul>
    </Section>
  );
}

const defaultSkills = [
  "Product Strategy",
  "3D / WebGL",
  "Design Systems",
  "Next.js / React",
  "Performance",
  "Animation",
  "Branding",
  "Prototyping",
];
