import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { icons } from "@/lib/icons";

const ExternalLink = icons["external-link"];
const Github = icons.github;

export function ProjectCard({ project }: { project: Project }) {
  const link = project.liveUrl ?? project.repoUrl;
  const isRepoOnly = !project.liveUrl && !!project.repoUrl;

  return (
    <article className="card-interactive flex h-full flex-col overflow-hidden rounded-2xl border border-hairline bg-surface/60">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>
        {project.outcome && (
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">Outcome — </span>
            {project.outcome}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 text-xs text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="animated-underline inline-flex w-fit items-center gap-1.5 pt-1 text-sm font-medium text-ink"
          >
            {isRepoOnly ? (
              <>
                View on GitHub
                <Github className="h-3.5 w-3.5" aria-hidden />
              </>
            ) : (
              <>
                View live demo
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </>
            )}
          </a>
        )}
      </div>
    </article>
  );
}
