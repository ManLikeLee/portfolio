import { about } from "@/data/portfolio";
import { Reveal } from "@/components/site/motion/Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-hairline/60 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent-blue-2">
              {about.heading}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} index={index}>
                <p
                  className={
                    index === 0
                      ? "text-xl leading-relaxed text-ink md:text-2xl"
                      : "text-base leading-relaxed text-ink-muted md:text-lg"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
