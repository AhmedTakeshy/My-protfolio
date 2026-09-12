import ScrollReveal from "@/components/ScrollReveal";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand"],
  },
  {
    label: "Architecture & Systems",
    items: ["Micro-frontends", "Module Federation", "Design systems", "SSR / ISR / PPR"],
  },
  {
    label: "Testing & Quality",
    items: ["Playwright (E2E)", "Jest", "React Testing Library", "TDD"],
  },
  {
    label: "Infra & Tooling",
    items: ["Docker", "GitHub Actions", "CI/CD pipelines", "Vercel", "Prisma ORM"],
  },
];

export default function Capabilities() {
  return (
    <section className="section" id="skills">
      <div className="container mx-auto">
        <p className="eyebrow mb-3">03 — Capabilities</p>
        <h2 className="mb-12 text-[32px] lg:text-[40px] font-semibold text-ink max-w-xl">
          A spec sheet, not a highlight reel.
        </h2>
        <div className="grid gap-px overflow-hidden border rounded-lg sm:grid-cols-2 border-border bg-border">
          {GROUPS.map((group, i) => (
            <ScrollReveal key={group.label} delayMs={i * 80} className="p-6 lg:p-8 bg-surface">
              <h3 className="mb-4 font-mono text-xs tracking-widest uppercase text-accent">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-1.5 text-sm border rounded-md border-border text-ink/90 font-mono"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
