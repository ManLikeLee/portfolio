import { skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/site/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-blue-2">Skills</span>
            <h2 className="site-title mt-3 text-3xl md:text-4xl">Tools I reach for</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.group} index={index}>
              <div className="card-interactive h-full rounded-2xl border border-hairline bg-surface/60 p-6">
                <h3 className="mb-4 font-display text-base font-semibold text-ink">{group.group}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-surface-2 px-3 py-1.5 text-xs text-ink-muted transition-colors duration-200 hover:border-hairline-strong hover:text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
