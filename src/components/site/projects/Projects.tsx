import { projects } from "@/data/portfolio";
import { FeaturedProject } from "@/components/site/projects/FeaturedProject";
import { ProjectCard } from "@/components/site/projects/ProjectCard";
import { Reveal } from "@/components/site/motion/Reveal";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="border-t border-hairline/60 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-blue-2">Work</span>
            <h2 className="site-title mt-3 text-3xl md:text-4xl">Products, not just demos</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              A few of the platforms I&apos;ve designed and built end-to-end, from problem framing to a shipped
              product real users touch.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          {featured.map((project, index) => (
            <Reveal key={project.slug} index={index}>
              <FeaturedProject project={project} />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {rest.map((project, index) => (
            <Reveal key={project.slug} index={index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
