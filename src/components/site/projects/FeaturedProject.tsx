import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { icons } from "@/lib/icons";

const ExternalLink = icons["external-link"];

export function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="card-interactive overflow-hidden rounded-2xl border border-hairline bg-surface/60">
      <div className="grid gap-0 md:grid-cols-2 md:items-stretch">
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-2 md:aspect-auto">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 md:p-10">
          <span className="inline-flex w-fit items-center rounded-full border border-hairline bg-surface-2 px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-blue-2">
            Featured
          </span>
          <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{project.title}</h3>

          {project.problem && (
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Problem — </span>
              {project.problem}
            </p>
          )}
          {project.solution && (
            <p className="text-sm leading-relaxed text-ink-muted">
              <span className="font-medium text-ink">Solution — </span>
              {project.solution}
            </p>
          )}

          {project.impact && project.impact.length > 0 && (
            <ul className="flex flex-col gap-2">
              {project.impact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue-2" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-hairline bg-surface-2 px-3 py-1 text-xs text-ink-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="animated-underline inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-medium text-ink"
            >
              View live demo
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
