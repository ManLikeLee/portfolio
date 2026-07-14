import { site, socialLinks } from "@/data/portfolio";
import { icons } from "@/lib/icons";
import { AmbientBackground } from "@/components/site/hero/AmbientBackground";
import { CvDownloadButton } from "@/components/site/cv/CvDownloadButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
      <AmbientBackground />
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/70 px-4 py-1.5 text-xs font-medium text-ink-muted backdrop-blur">
          <span className="pulse-dot" aria-hidden />
          {site.availability}
        </span>

        <h1 className="hero-title-fluid mt-8 text-ink">
          {site.role}
          <span className="block bg-gradient-to-r from-accent-blue via-accent-blue-2 to-accent-purple bg-clip-text text-transparent">
            building products people actually use.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          {site.tagline} {site.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-gradient-to-br from-cta-blue to-cta-purple px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-14px_rgba(37,99,235,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-14px_rgba(37,99,235,0.8)]"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-hairline bg-surface/60 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-all duration-200 hover:border-hairline-strong hover:bg-surface-2"
          >
            View My Work
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-ink-muted transition-colors duration-200 hover:border-hairline-strong hover:text-ink"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            );
          })}
          <CvDownloadButton variant="compact" className="ml-1" />
        </div>
      </div>
    </section>
  );
}
