import { site, socialLinks } from "@/data/portfolio";
import { icons } from "@/lib/icons";
import { CvDownloadButton } from "@/components/site/cv/CvDownloadButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-hairline bg-surface-2 font-display text-sm font-semibold text-ink">
            {site.initials}
          </span>
          <span className="text-sm text-ink-muted">
            &copy; {year} {site.name}. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-hairline text-ink-muted transition-colors duration-200 hover:border-hairline-strong hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
          <CvDownloadButton variant="compact" />
        </div>
      </div>
    </footer>
  );
}
