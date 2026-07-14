import type { Metadata } from "next";
import { SkipLink } from "@/components/site/a11y/SkipLink";
import { Nav } from "@/components/site/nav/Nav";
import { Footer } from "@/components/site/footer/Footer";
import { PersonJsonLd } from "@/components/site/seo/PersonJsonLd";
import { site } from "@/data/portfolio";

const title = `${site.name} — ${site.role}`;
const description = `${site.tagline} ${site.description}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Philip Uguru",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title,
    description,
    siteName: `${site.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="site min-h-full">
      <PersonJsonLd />
      <SkipLink />
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
