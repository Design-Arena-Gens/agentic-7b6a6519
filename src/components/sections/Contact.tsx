import { Section } from "@/components/ui/Section";
import { content } from "@/data/content";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-4">
        {content.email && (
          <a
            href={`mailto:${content.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800/40 bg-white/50 px-5 py-2 text-sm font-medium text-zinc-900 transition hover:bg-white/70 dark:bg-white/10 dark:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            {content.email}
          </a>
        )}
        {content.socials?.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-3">
            {content.socials.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-800/40 px-4 py-1.5 text-sm text-zinc-800 transition hover:bg-zinc-100 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10">
                <span>{s.label}</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
