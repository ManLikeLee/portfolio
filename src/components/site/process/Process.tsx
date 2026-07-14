import { processSteps } from "@/data/portfolio";
import { icons } from "@/lib/icons";
import { Reveal } from "@/components/site/motion/Reveal";

export function Process() {
  return (
    <section id="process" className="border-t border-hairline/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-blue-2">Process</span>
            <h2 className="site-title mt-3 text-3xl md:text-4xl">How I work</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <Reveal key={step.title} index={index}>
                <div className="card-interactive h-full rounded-2xl border border-hairline bg-surface/60 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-accent-blue-2">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mb-2 font-display text-base font-semibold text-ink">
                    {String(index + 1).padStart(2, "0")}. {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
