import { icons } from "@/lib/icons";
import { cvFile } from "@/data/portfolio";
import clsx from "clsx";

const Download = icons.download;

const variantClasses = {
  primary:
    "bg-gradient-to-br from-cta-blue to-cta-purple text-white shadow-[0_14px_30px_-14px_rgba(37,99,235,0.65)] hover:shadow-[0_18px_38px_-14px_rgba(37,99,235,0.8)] hover:-translate-y-0.5",
  ghost:
    "border border-hairline bg-surface/60 text-ink backdrop-blur hover:border-hairline-strong hover:bg-surface-2",
  compact:
    "border border-hairline bg-surface/60 text-ink backdrop-blur hover:border-hairline-strong hover:bg-surface-2 px-4 py-2 text-sm",
} as const;

export function CvDownloadButton({
  variant = "primary",
  className,
}: {
  variant?: keyof typeof variantClasses;
  className?: string;
}) {
  const isCompact = variant === "compact";
  return (
    <a
      href={cvFile.href}
      download={cvFile.downloadName}
      className={clsx(
        "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200",
        !isCompact && "px-6 py-3 text-sm",
        variantClasses[variant],
        className
      )}
    >
      <Download className="h-4 w-4" aria-hidden />
      Download CV
    </a>
  );
}
