import { contact, socialLinks } from "@/data/portfolio";
import { icons } from "@/lib/icons";
import { CvDownloadButton } from "@/components/site/cv/CvDownloadButton";
import { Reveal } from "@/components/site/motion/Reveal";

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline/60 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-blue-2">Contact</span>
          <h2 className="site-title mt-3 text-3xl md:text-4xl">{contact.heading}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-muted">{contact.subtitle}</p>
        </Reveal>

        <Reveal index={1}>
          <div className="mx-auto mt-10 grid gap-3 sm:grid-cols-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="card-interactive flex min-w-0 items-center gap-3 rounded-xl border border-hairline bg-surface/60 px-5 py-3.5 text-left text-sm text-ink"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-accent-blue-2">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-ink-muted">{link.label}</span>
                    <span className="block truncate font-medium">
                      {link.href.replace(/^mailto:|^https?:\/\//, "")}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contact.primaryActionHref}
              className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-br from-cta-blue to-cta-purple px-6 py-3 text-sm font-medium text-white shadow-[0_14px_30px_-14px_rgba(37,99,235,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-14px_rgba(37,99,235,0.8)]"
            >
              {contact.primaryActionLabel}
            </a>
            <CvDownloadButton variant="ghost" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
